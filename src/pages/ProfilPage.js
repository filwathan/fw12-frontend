import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { useSelector, useDispatch } from 'react-redux';
import http from '../helpers/http';
import profileImage from '../asset/images/profil.jpg'
import { logoutAction } from '../redux/reducers/auth'
import { clearTransaction } from '../redux/reducers/transactionReducers'
import { reach } from 'yup';

const ProfilPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token)
    const idUser = jwtDecode(token).id

    //get user
    const [personal, setPersonal] = React.useState({});
    const getProfil = async () => {
        try {
            const {data} = await http(token).get('/users/' + idUser);
            setPersonal(data.results);
        } catch (error) {
          setPersonal({});
        }
      };

    //upload foto
    const [toggleUpload, setToggleUpload] = React.useState(false)
    const [uploadPhoto, setUploadPhoto] = React.useState(null)
    const [errorUpload, setErrorUpload] = React.useState('')

    const file = (e) => {
        setErrorUpload('')
        const imageExt = ['jpg', 'jpeg', 'png']
        const type = (e.type.slice(6))
        if(e.size <= 5000000){
            if(imageExt.includes(type)) {
                setUploadPhoto(e)
            }
            else {
                setErrorUpload('file must JPG, JPEG, or PNG')
            }
        }
        else {
            setErrorUpload('file size max 5MB')
        }
    }

    const closeModalUpload = () => {
        setToggleUpload(!toggleUpload)
        setUploadPhoto(null)
        setErrorUpload('')
    }

    const submitUpload = async () => {
        try {
            const form = new FormData()
            form.append('picture', uploadPhoto)
            const {data} = await http(token).patch('/users/'+ idUser, form)
            setPersonal({...personal, picture: data.results.picture})
            setToggleUpload(!toggleUpload)
            setUploadPhoto(null)
            setErrorUpload('')
        } catch (error) {
            console.log(error)        
        }
    }

    //logout
    const out = () => {
        dispatch(clearTransaction())
        dispatch(logoutAction()); 
        navigate('/')
    }

    //update profile
    const updateProfile = async (e) => {
        e.preventDefault()
        try {
            const form = {
                firstName: e.target.firstName.value,
                lastName: e.target.lastName.value,
                email: e.target.email.value,
                phone: e.target.phone.value,
            }
            const {data} = await http(token).patch('/users/'+ idUser, form)
            setPersonal(data.results)
        } catch (error) {
            console.log('hit error')
        }
    }

    //update password
    const [errorUpdatePassword, setErrorUpdatePassword] = React.useState('')
    const updatePassword = async (e) => {
        e.preventDefault()
        if (e.target.password.value !== e.target.confirmPassword.value){
            setErrorUpdatePassword('password must match')
        }
        else {
            try {
                const form = {
                    password: e.target.password.value,
                    confirmPassword: e.target.confirmPassword.value,
                }
                const {data} = await http(token).patch('/users/'+ idUser, form)
                setErrorUpdatePassword('')                
            } catch (error) {
                setErrorUpdatePassword('')
            }            
        }
        
    }

    React.useEffect(() =>{
        getProfil()
    }, [errorUpload, errorUpdatePassword])
  return (
    <div className='h-screen'>
        <div> <Header></Header> </div>
        {toggleUpload && 
            <div className='absolute z-10 h-screen w-full flex justify-center items-center bg-zinc-900 opacity-95'>
                <div className='modal-box'>
                    <label onClick={() => closeModalUpload()}  className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold py-4">Please choise your file</h3>
                    {errorUpload && 
                        <p className="py-2 text-red-500">{errorUpload}</p>
                    }
                    
                    <input onChange={(e) => file(e.target.files[0])} type="file" className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
                    <div className="modal-action">
                        <label onClick={submitUpload} className="btn">Upload</label>
                    </div>
                </div>
            </div>
        }
        <div className='main-overlay right-more'>
          <div className='left-than-right'>
              <div className='overlay-left'>
                  <div className='tab-page overlay-white'>
                      <div className='mr-10 py-5 border-b-2 border-yellow-500 text-yellow-500' onClick={() => {navigate('/profilpage')}}>
                          <div>Account Settings</div>
                      </div>
                      <div className='mr-10 py-5' onClick={() => {navigate('/orderhistorypage')}}>
                          <div>Order History</div>
                      </div>
                </div>
                <div>
                      <form onSubmit={updateProfile}>
                          <div className='information-account overlay-white'>
                              <div>Details Information</div>
                              <div className='br-full'></div>
                              <div className='overlay-details-information'>
                                  <div className='details-information'>
                                      <div>
                                          <label htmlFor='firstName'>First Name</label>
                                          <input type='text' name='firstName' id='firstName' defaultValue={personal.firstName} placeholder={personal.firstName}/>
                                      </div>
                                      <div>
                                          <label htmlFor='lastName'>last Name</label>
                                          <input type='text' name='lastName' id='lastName' defaultValue={personal.lastName} placeholder={personal.lastName}/>
                                      </div>
                                  </div>
                                  <div className='details-information'>                        
                                      <div>
                                          <label htmlFor='email'>Email</label>
                                          <input type='text' name='email' id='email' defaultValue={personal.email} placeholder={personal.email}/>
                                      </div>
                                      <div>
                                          <label htmlFor='phone'>Phone Number</label>
                                          <input type='text' name='phone' id='phone' defaultValue={personal.phone} placeholder={personal.phone}/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className=''>
                              <button type='submit' className='update-details-information'>Update changes</button>
                          </div>
                      </form>                
                </div>
                <div>
                      <form onSubmit={updatePassword}>
                          <div className='information-account overlay-white'>
                              <div>Account and Privacy</div>
                              <div className='br-full'></div>
                              <div className='overlay-details-information'>
                                {errorUpdatePassword && <div className='text-red-500'>{errorUpdatePassword}</div>}
                                  <div className='details-information'>
                                      <div>
                                          <label htmlFor='password'>New Password</label>
                                          <input type='password' name='password' id='password' placeholder='Write your password'/>
                                      </div>
                                      <div>
                                          <label htmlFor='confirmPassword'>Confirm Password</label>
                                          <input type='password' name='confirmPassword' id='confirmPassword' placeholder='Confirm your password'/>
                                      </div>
                                  </div>                                
                              </div>
                          </div>
                          <div className=''>
                              <button type='submit' className='update-details-information'>Update changes</button>
                          </div>
                      </form>                
                </div>
              </div>
          </div>
          <div className='right-than-left right-more'>
              <section className='overlay-right'>                
                  <div className='side-profil overlay-white-br'>
                      <div>INFO</div>
                      <div className='profil-info'>
                          <div>
                              <img onClick={() => setToggleUpload(!toggleUpload)} className='rounded-full mx-auto' src={personal.picture || profileImage} alt='profil'/>
                          </div>
                          <div>{personal.firstName + ' ' + personal.lastName}</div>
                          <div>Moviegoers</div>
                      </div>
                      <div className='br-full'></div>
                      <div className='profil-btn-logout'>
                          <div>
                              <button onClick={out} className='btn-logout'>Logout</button>
                          </div>
                      </div>
                  </div>                    
              </section>
          </div>
        

        </div>
        
        <div> <Footer></Footer> </div>
    </div>
  )
}

export default ProfilPage