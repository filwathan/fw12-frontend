import { Link, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { registerAction } from '../redux/actions/auth';

import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(Yup);

const registerSchema = Yup.object({
    firstName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    phone: Yup.string()
      .min(10, 'min 10 Character')
      .max(13, 'Max 13 Character')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .password()
      .minUppercase(1, 'min have 1 capital character')
      .minNumbers(1, 'min have 1 number')
      .minSymbols(1, 'min have 1 symbol')
      .required('Required'),
  });

const SignUp = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const message = useSelector((state) => state.auth.message)

    const signUp = event =>{
        const firstName = event.firstName
        const lastName = event.lastName
        const phone = event.phone
        const email = event.email
        const password = event.password
        dispatch(registerAction({firstName, lastName, phone, email, password, cb: () => navigate('/') }))
    }


  return (
    <div className='h-screen flex'>
            <div className="flex-[0.7] flex  bg-logo-sign bg-cover text-black ">           
                <div className='bg-yellow-500/90 bg-cover flex justify-center items-center flex-col w-full h-full '> 
                    <img className='w-[500px] h-[200px] ' src={require("../asset/images/PN.png")} alt="Logo"/>
                    <div className='font-bold text-[45px] '>pengen banget nonton!</div>
                </div>
            </div>
            <div className="flex-[0.3] px-20 py-12 text-yellow-700 bg-black overflow-scroll overflow-x-hidden">
                <div className='pt-12 mb-10' id="notice-form-head">
                    <h3 className='text-yellow-500 text-[48px] font-bold mb-2' >Sign Up</h3>
                    <p>Fill your additional details</p>
                    {!message?
                    <div id="notif-signup"></div> :
                    <div className='text-red-500' id="notif-signup">field can't empty</div>
                    }
                </div>
                <Formik
                    validationSchema={registerSchema}
                    onSubmit={signUp}
                    initialValues={{
                      firstName: '',
                      lastName: '',
                      phone: '',
                      email: '',
                      password: '',
                    }}>
                        {({ errors, touched }) => (
                            <Form className='mb-8' id="form-signup" >
                                <div className='flex flex-col mb-3'>
                                    <label className='mb-2.5 text-yellow-500' htmlFor="firstName">First Name</label>
                                    <Field className='p-2 rounded-md text-black' type="text" name="firstName" id="firstName" placeholder="Write your First Name"/>
                                    {errors.firstName && touched.firstName ? (
                                        <div className="text-red-500">{errors.firstName}</div>
                                    ) : null}
                                </div>
                                <div className='flex flex-col mb-3'>
                                    <label className='mb-2.5 text-yellow-500' htmlFor="lastName">Last Name</label>
                                    <Field className='p-2 rounded-md text-black' type="text" name="lastName" id="lastName" placeholder="Write your Last Name"/>
                                    {errors.lastName && touched.lastName ? (
                                        <div className="text-red-500">{errors.lastName}</div>
                                    ) : null}
                                </div>
                                <div className='flex flex-col mb-3'>
                                    <label className='mb-2.5 text-yellow-500' htmlFor="phone">Phone</label>
                                    <Field className='p-2 rounded-md text-black' type="text" name="phone" id="phone" placeholder="Write your Phone"/>
                                    {errors.phone && touched.phone ? (
                                        <div className="text-red-500">{errors.phone}</div>
                                    ) : null}
                                </div>
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
                                    <button type='submit' className='rounded-md text-white bg-yellow-500 w-full h-[40px]'>Sign Up</button>
                                </div>                    
                            </Form>
                        )}
                </Formik>                
                <div className='text-center'>
                    <div>
                        <span>Already have account ? </span>
                        <Link className='text-yellow-500' to="/signin">Sign In</Link>
                        {/* <a href="ForgotPassword.html">Reset now</a> */}
                    </div>                    
                </div>
            </div>
        </div>
  )
}

export default SignUp