import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import profileImage from '../asset/images/profil.jpg'
import { logoutAction } from '../redux/reducers/auth'
import { clearTransaction } from '../redux/reducers/transactionReducers'
import jwtDecode from 'jwt-decode'
import http from '../helpers/http'

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [toggle, setToggle] = React.useState(false)
    const token = useSelector((state) => state.auth.token)
    // const [idUser, setIdUser] = React.useState(null)
    
    // setIdUser(decode.id)
    
    
    //get user
    const [personal, setPersonal] = React.useState({});
    const getProfil = async () => {
        try {
            const decode = jwtDecode(token)
            const idUser = decode.id
            const {data} = await http(token).get('/users/' + idUser);
            setPersonal(data.results);
        } catch (error) {
          setPersonal({});
        }
      };

    const out = () => {
        dispatch(clearTransaction())
        dispatch(logoutAction()); 
        navigate('/')
    }

    React.useEffect(() => {
        getProfil()        
    }, [])
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
                <div>
                    <div onClick={() => {setToggle(!toggle)}}>
                        <img className='w-8 h-8 rounded-full' src={personal?.picture || profileImage} alt='profil' />
                        {toggle && 
                            <div className='absolute right-32 bg-yellow-500 p-2 text-black'>
                                <Link to='/profilpage' className='hover:bg-yellow-700'>Profil</Link>
                                <p onClick={out} className='mt-2 hover:bg-yellow-700'>Logout</p>
                            </div>}
                    </div>
                </div>
            }  
        </div>
    </nav>
  )
}

export default Header