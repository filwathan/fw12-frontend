import React from 'react'
const Footer = () => {
  return (
    <footer className='flex-col pt-24 px-28 pb-12 text-yellow-500 bg-black'>
        <div className='flex'>
            <div className='flex-1 text-base leading-8 tracking-wide mr-8'>
                <div className='mb-7'>
                    <img className='w-3/4 h-20' src={require('../asset/images/pengennonton.png')} alt="footer logo"/>
                </div>
                <p className=''>Stop waiting in line. Buy tickets</p>
                <p className=''>conveniently, watch movies quietly.</p>
            </div>
            <div className='flex-1'>
                <div className='font-bold mb-7 '>Explore</div>
                <p className='mb-3.5'>Home</p>
                <p className=''>List Movie</p>
            </div>
            <div className='flex-1'>
                <div className='font-bold mb-7 '>Our Sponsor</div>                
                <div className='mb-6'>
                    <img src={require('../asset/images/logo-ebuid1.png')} alt="ebuid"/>
                </div>
                <div className='mb-6' >
                    <img src={require('../asset/images/logo-cineone21.png')} alt="cineone21"/>
                </div>
                <div className='mb-6'>
                    <img src={require('../asset/images/logo-hiflix.png')} alt="hiflix"/>
                </div>
            </div>
            <div className='flex-1'>
                <div className='font-bold mb-7 '>Follow us</div>                
                <div className='mb-6'>
                    <i data-feather="facebook">i</i>
                    <span>Tickitz Cinema id</span>
                </div >
                <div className='mb-6'>
                    <i data-feather="instagram">i</i>
                    <span>tickitz.id</span>
                </div>
                <div className='mb-6'>
                    <i data-feather="twitter">i</i>
                    <span>tickitz.id</span>
                </div>
                <div className='mb-6'>
                    <i data-feather="youtube">i</i>
                    <span>Tickitz Cinema id</span>
                </div>
            </div>
        </div>
        <div >
            <span>© 2020 Tickitz. All Rights Reserved.</span>
        </div>
    </footer>
  )
}

export default Footer