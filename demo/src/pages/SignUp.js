import { Link } from 'react-router-dom'

const SignUp = () => {
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
                    <div className='hidden' id="notif-signup">Fields can not empty</div>
                </div>
                <form className='mb-8' id="form-signup" >
                    <div className='flex flex-col mb-3'>
                        <label className='mb-2.5 text-yellow-500' for="firstName">First Name</label>
                        <input className='p-2 rounded-md text-black' type="text" name="firstName" id="firstName" placeholder="Write your First Name"/>
                    </div>
                    <div className='flex flex-col mb-3'>
                        <label className='mb-2.5 text-yellow-500' for="lastName">Last Name</label>
                        <input className='p-2 rounded-md text-black' type="text" name="lastName" id="lastName" placeholder="Write your Last Name"/>
                    </div>
                    <div className='flex flex-col mb-3'>
                        <label className='mb-2.5 text-yellow-500' for="phone">Phone</label>
                        <input className='p-2 rounded-md text-black' type="text" name="phone" id="phone" placeholder="Write your Phone"/>
                    </div>
                    <div className='flex flex-col mb-3'>
                        <label className='mb-2.5 text-yellow-500' for="email">Email</label>
                        <input className='p-2 rounded-md text-black' type="text" name="email" id="email" placeholder="Write your email"/>
                    </div>
                    <div className='flex flex-col mb-8'>
                        <label className='mb-2.5 text-yellow-500' for="password">Password</label>
                        <input className='p-2 rounded-md text-black' type="password" name="password" id="password" placeholder="Write your password"/>
                    </div>
                    <div className='text-center'>
                        <button className='rounded-md text-white bg-yellow-500 w-full h-[40px]'>Sign Up</button>
                    </div>                    
                </form>
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