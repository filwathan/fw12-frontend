import React from 'react';
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import http from '../helpers/http';
import spiderman from '../asset/images/spiderman.png'

const Homepage = () => {
    const navigate = useNavigate()
    const [nowShowing, setNowShowing] = React.useState({});
    React.useEffect(()=>{
        getNowShowing().then((data) =>{
            setNowShowing(data)
        })
    },[])

    const getNowShowing = async () =>{
        const {data} = await http().get('movies/nowShowingMovie');
        return data
    }

    const [upcoming, setUpcoming] = React.useState({});
    React.useEffect(()=>{
        getUpcoming().then((data) =>{
            setUpcoming(data)
        })
    },[])

    const getUpcoming = async () =>{
        const {data} = await http().get('movies/upcomingMovie');
        return data
    }



  return (<>
    <div className='h-screen'>
        <div> <Header></Header> </div>
        <div className='flex  items-center  py-16 px-28 bg-black'>
            <div className='flex flex-1 justify-center'>
                <div className=''>
                    <p className='text-yellow-700'>Nearest Cinema, Newest Movie,</p>
                    <p className='text-[35px] font-bold text-yellow-500'>Find out now!</p>
                </div>
            </div>
            <div className='flex-1'>
                <div className='flex justify-center'>
                    <img src={require('../asset/images/3-gambar.png')} alt="poster" />
                </div>
            </div>
        </div>
        <div className='bg-zinc-900 py-16 px-28' >
            <div className='flex mb-20'>
                <div className='border-b-2 border-yellow-500 pb-4'>
                    <span className='text-[24px] font-bold text-yellow-500'>Now Showing</span>
                </div>
                <div className='flex-1'></div>
                <div className='text-yellow-500'>
                    <Link to='/viewall' >view all</Link>
                </div>
            </div>
            <div className='flex text-yellow-500 text-center'>                
                {nowShowing?.results?.map((film, index) =>(
                    <div key={index} className='group/upcoming border-2 border-black p-8 rounded-lg mr-6 '>
                        <img className='w-40 h-60' src={film.picture || spiderman} alt="The Witchec"/>
                        <div className='hidden group-hover/upcoming:block group-hover/upcoming:static'>
                            <h4 className='font-bold text-[18px] mb-2'> {film.titleMovie}</h4>
                            <p className='text-[14px] text-center mb-6 h-[50px]'>{film.genre}</p>
                            <button onClick={() => {navigate('/moviedetails/'+ film.idMovie )}} className='border-2 border-yellow-500 rounded-lg py-1 px-9'>Details</button>                            
                        </div>
                    </div>
                ))}                
            </div>
        </div>
        <div className='bg-black py-16 px-28 '>
            <div className='flex mb-20'>
                <div className=''>
                    <span className='text-[24px] font-bold text-yellow-500'>Upcoming Movies</span>
                </div>
                <div className='flex-1'></div>
                <div className='text-yellow-500'>
                    <Link to='/viewall' >view all</Link>
                </div>
            </div>
            <div className='flex overflow-x-auto text-yellow-500 mb-12'>
                <button className='border-2 border-yellow-500 rounded-lg py-2 px-5 mr-3'>September</button>
                <button className='border-2 border-yellow-500 rounded-lg py-2 px-5 mr-3'>October</button>
                <button className='border-2 border-yellow-500 rounded-lg py-2 px-5 mr-3'>November</button>
                <button className='border-2 border-yellow-500 rounded-lg py-2 px-5 mr-3'>December</button>
                <button className='border-2 border-yellow-500 rounded-lg py-2 px-5 mr-3'>January</button>
                <button className='border-2 border-yellow-500 rounded-lg py-2 px-5 mr-3'>February</button>
                <button className='border-2 border-yellow-500 rounded-lg py-2 px-5 mr-3'>March</button>
                <button className='border-2 border-yellow-500 rounded-lg py-2 px-5 mr-3'>April</button>
                <button className='border-2 border-yellow-500 rounded-lg py-2 px-5 mr-3'>May</button>
                <button className='border-2 border-yellow-500 rounded-lg py-2 px-5 mr-3'>June</button>
                <button className='border-2 border-yellow-500 rounded-lg py-2 px-5 mr-3'>July</button>
                <button className='border-2 border-yellow-500 rounded-lg py-2 px-5 mr-3'>august</button>
            </div>
            {/* trying fetch from backend */}
            <div className='flex overflow-x-auto text-yellow-500 '>
                {upcoming?.results?.map((film, index) =>(
                    <div key={index} className='flex-1 flex flex-col items-center border-2 border-zinc-900 rounded-lg p-8 mr-6'>
                        <img className='mb-6 w-40 h-60 ' src={film.picture || spiderman} alt="The Witchec"/>
                        <h4 className='font-bold text-[18px] mb-2 text-center h-20'> {film.titleMovie}</h4>
                        <p className='text-[14px] text-center mb-6 h-[50px]'>{film.genre}</p>
                        <button onClick={() => {navigate('/moviedetails/'+ film.idMovie )}} className='border-2 border-yellow-500 rounded-lg py-1 px-9'>Details</button>                        
                    </div>
                ))}
                {/* <div className='flex-1 flex flex-col items-center border-2 border-zinc-900 rounded-lg p-8 mr-6 w-[220px] h-[450]'>
                    <img className='mb-6' src={require('../asset/images/spiderman.png')} alt="Black Widow"/>
                    <h4 className='font-bold text-[18px] mb-2'>Black Widow</h4>
                    <p className='text-[14px] text-center mb-6 h-[50px]'>Action, Adventure, Sci-Fi</p>
                    <Link to='/'>
                        <button className='border-2 border-yellow-500 rounded-lg py-1 px-9'>Details</button>
                    </Link>
                </div>
                <div className='flex-1 flex flex-col items-center border-2 border-zinc-900 rounded-lg p-8 mr-6'>
                    <img className='mb-6' src={require('../asset/images/spiderman.png')} alt="The Witchec"/>
                    <h4 className='font-bold text-[18px] mb-2'> The Witchec</h4>
                    <p className='text-[14px] text-center mb-6 h-[50px]'>Adventure, Comedy, Family</p>
                    <Link to='/'>
                        <button className='border-2 border-yellow-500 rounded-lg py-1 px-9'>Details</button>
                    </Link>
                </div>
                <div className='flex-1 flex flex-col items-center border-2 border-zinc-900 rounded-lg p-8 mr-6'>
                    <img className='mb-6' src={require('../asset/images/spiderman.png')} alt="Tenet"/>
                    <h4 className='font-bold text-[18px] mb-2'>Tenet</h4>
                    <p className='text-[14px] text-center mb-6 h-[50px]'>Action, Sci-Fi</p>
                    <Link to='/'>
                        <button className='border-2 border-yellow-500 rounded-lg py-1 px-9'>Details</button>
                    </Link>
                </div>
                <div className='flex-1 flex flex-col items-center border-2 border-zinc-900 rounded-lg p-8 mr-6'>
                    <img className='mb-6' src={require('../asset/images/spiderman.png')} alt="Black Widow"/>
                    <h4 className='font-bold text-[18px] mb-2'>Black Widow</h4>
                    <p className='text-[14px] text-center mb-6 h-[50px]'>Action, Adventure, Sci-Fi</p>
                    <Link to='/'>
                        <button className='border-2 border-yellow-500 rounded-lg py-1 px-9'>Details</button>
                    </Link>
                </div>
                <div className='flex-1 flex flex-col items-center border-2 border-zinc-900 rounded-lg p-8 mr-6'>
                    <img className='mb-6' src={require('../asset/images/spiderman.png')} alt="The Witchec"/>
                    <h4 className='font-bold text-[18px] mb-2'>The Witchec</h4>
                    <p className='text-[14px] text-center mb-6 h-[50px]'>Adventure, Comedy, Family</p>
                    <Link to='/'>
                        <button className='border-2 border-yellow-500 rounded-lg py-1 px-9'>Details</button>
                    </Link>
                </div> */}
            </div>
        </div>
        {/* ended trying fetch from backend */}
        <div className='flex justify-center bg-black'>
            <div className='text-center text-yellow-700 text-[14px]'>
                <div className='mb-8'>
                    <p className='text-[22px] '>Be the vanguard of the</p>
                    <h3 className='text-yellow-500 font-bold text-[40px]'>Moviegoers</h3>
                </div>
                <div className='mb-8'>
                    <form  action="">
                        <input className='border-2 border-zinc-900 rounded h-[40px] w-[300px] py-1 pl-3' type="text" id="new-member" name="new-member" placeholder="Type your email"/>
                        <button className='bg-yellow-500 rounded-md p-2 text-black ml-4'>Join Now</button>
                    </form>
                </div>
                <div>
                    <p>By joining you as a Tickitz member,</p>
                    <p>we will always send you the latest updates via email .</p>
                </div>
            </div>
        </div>
        <div> <Footer></Footer> </div>
    </div></>
  )
}

export default Homepage