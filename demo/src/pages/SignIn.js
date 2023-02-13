import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {useNavigate} from "react-router-dom"

import {useSelector} from 'react-redux'

import {loginAction} from '../redux/actions/auth'

import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(Yup);

const loginSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .password()
      .minUppercase(1, 'min have 1 capital character')
      .minNumbers(1, 'min have 1 number')
      .minSymbols(1, 'min have 1 symbol')
      .required('Required'),
  });

function SignIn(){
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const message = useSelector((state) => state.auth.message)
    console.log(message)

    const login = event =>{
        const email = event.email
        const password = event.password
        dispatch(loginAction({email, password, cb: () => navigate('/') }))
    }

    return (
        <div className='countainer-sign'>
            <div className="flex-[0.7] flex  bg-logo-sign bg-cover text-black ">           
                <div className='bg-yellow-500/90 bg-cover flex justify-center items-center flex-col w-full h-full '> 
                    <img className='w-[500px] h-[200px] ' src={require("../asset/images/PN.png")} alt="Logo"/>
                    <div className='font-bold text-[45px] '>pengen banget nonton!</div>
                </div>
            </div>
            <div className="flex-[0.3] px-20 py-12 text-yellow-700 bg-black overflow-scroll overflow-x-hidden">
                <div className='pt-12 mb-10' id="notice-form-head">
                    <h3 className='text-yellow-500 text-[48px] font-bold mb-2' >Sign In</h3>
                    <p>Sign in with your data that you entered during your registration</p>
                    {/* <div className='hidden' id="notif-signup">Email or Password is wrong</div> */}
                    {!message?
                    <div id="notif-signup"></div> :
                    <div className='text-red-500' id="notif-signup">{message}</div>
                    }
                </div>
                <Formik 
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={loginSchema}
                    onSubmit={login}
                >
                    {({ errors, touched }) => (
                        <Form className='mb-8' id="form-signin" >
                            <div className='flex flex-col mb-3'>
                                <label className='mb-2.5 text-yellow-500' htmlFor="email">Email</label>
                                <Field className='p-2 rounded-md text-black' type="text" name="email" id="email" placeholder="Write your email"/>
                                {errors.email && touched.email ? (
                                    <div className="text-red-500">{errors.email}</div>
                                ) : null}
                            </div>
                            <div className='flex flex-col mb-8'>
                                <label className='mb-2.5 text-yellow-500' htmlFor="password">Password</label>
                                <Field className='p-2 rounded-md text-black' type="password" name="password" id="password" placeholder="Write your password"/>
                                {errors.password && touched.password ? (
                                    <div className="text-red-500">{errors.password}</div>
                                ) : null}
                            </div>
                            <div className='text-center'>
                                <button type='submit' className='rounded-md text-white bg-yellow-500 w-full h-[40px]'>Sign In</button>
                            </div>                    
                        </Form>
                    )}
                </Formik>
                
                <div className='text-center'>
                    <div>
                        <span>Forgot your password? </span>
                        <Link className='text-yellow-500' to="/forgotpassword">Reset now</Link>
                        {/* <a href="ForgotPassword.html">Reset now</a> */}
                    </div>
                    <div>
                        <span>Don’t have an account? </span>
                        <Link className='text-yellow-500' to="/signup">Sign Up</Link>
                        {/* <a href="SignUp.html">Sign Up</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default SignIn