import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const ResetPassword = () => {
    const navigate = useNavigate()
    
    const resetPassword = (event) =>{
        event.preventDefault()
        const passwordForm = event.target.password.value
        const confirmPasswordForm = event.target.confirmPassword.value
        const codeForm = 123

        const resetPasswordForm = async ()=>{
            await axios.post('http://localhost:8888/auth/register', {                
                password: passwordForm,
                confirmPassword: confirmPasswordForm,
                code: codeForm,
            })
        }

        resetPasswordForm()
        navigate('/signin')
    }
    
  return (
    <div className='h-screen flex'>
            <div className="flex-[0.7] flex  bg-logo-sign bg-cover text-black ">           
                <div className='bg-yellow-500/90 bg-cover py-20 px-24 w-full h-full '> 
                    <img className='w-[150px] h-[75px] mb-[50px]' src={require("../asset/images/PN.png")} alt="Logo"/>
                    <div className='font-bold text-[45px] text-black '>Lets reset your password</div>
                    <div className='text-[24px] mb-12'>To be able to use your account again, please complete the following steps.</div>
                    <div>
                        <div className='flex items-center'>
                            <div className='border-black border-2 w-[30px] h-[30px] rounded-full text-center mr-10'>1</div>
                            <div>Fill your complete email</div>
                        </div>
                        <div className='border-black border-l-2  h-[20px] ml-[14px]' ></div>
                        <div className='flex items-center'>
                            <div className='border-black border-2 w-[30px] h-[30px] rounded-full text-center mr-10'>2</div>
                            <div>Check your email</div>
                        </div>
                        <div className='border-black border-l-2  h-[20px] ml-[14px]'></div>
                        <div className='flex items-center'>
                            <div className='bg-black w-[30px] h-[30px] rounded-full text-yellow-500 text-center mr-10'>3</div>
                            <div>Enter your new password</div>
                        </div>
                        <div className='border-black border-l-2  h-[20px] ml-[14px]'></div>
                        <div className='flex items-center'>
                            <div className='border-black border-2 w-[30px] h-[30px] rounded-full text-center mr-10'>4</div>
                            <div>Done</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-[0.3] px-20 py-12 text-yellow-700 bg-black overflow-scroll overflow-x-hidden">
                <div className='pt-12 mb-10' id="notice-form-head">
                    <h3 className='text-yellow-500 text-[26px] font-bold mb-2' >Fill your complete password</h3>
                    <p>set your new password</p>
                    <div className='hidden' id="notif-signup">password and confirm password must same</div>
                </div>
                <form onSubmit={resetPassword} className='mb-8' id="form-signin" >                   
                    <div className='flex flex-col mb-8'>
                        <label className='mb-2.5 text-yellow-500' for="password">Password</label>
                        <input className='p-2 rounded-md text-black' type="password" name="password" id="password" placeholder="Write your password"/>
                    </div>
                    <div className='flex flex-col mb-8'>
                        <label className='mb-2.5 text-yellow-500' for="confirmPassword">Confirm Password</label>
                        <input className='p-2 rounded-md text-black' type="password" name="confirmPassword" id="confirmPassword" placeholder="Write your Confirm Password"/>
                    </div>
                    <div className='text-center'>
                        <button className='rounded-md text-white bg-yellow-500 w-full h-[40px]'>Send</button>
                    </div>                    
                </form>                
            </div>
        </div>
  )
}

export default ResetPassword