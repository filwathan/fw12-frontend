import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Header = () => {
    const token = useSelector((state) => state.auth.token)    
  return (
    <nav className='flex justify-center items-center py-8 px-32 text-yellow-300 bg-black'>
        <div className='mr-20'>
            {/* <img src="../asset/images/pengennonton.png" alt="logo" /> */}
            <img className='w-40 h-8' src={require('../asset/images/logo-L.png')} alt='logo' />
        </div>
        <div className='flex-1'>
            <Link to='/' className='mr-16'>Home</Link>
            <Link to='/viewall' className='mr-16'>List Movie</Link>
            {/* <a href="./ViewAll.html">List Movie</a> */}
        </div>
        <div>
            {!token? 
                <Link to='/signin'>
                    <button className='border-2 rounded-md py-1 px-6 border-yellow-300'>Sign In</button>
                </Link> : 
                <div>berhasil login</div>
            }  
        </div>
    </nav>
  )
}

export default Header