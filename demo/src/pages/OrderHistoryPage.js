import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import profileImage from '../asset/images/profil.jpg'
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { useSelector, useDispatch } from 'react-redux';
import http from '../helpers/http';
import { logoutAction } from '../redux/reducers/auth'
import { clearTransaction } from '../redux/reducers/transactionReducers'

const OrderHistoryPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector(state => state.auth.token)
    const idUser = jwtDecode(token).id
    const today = new Date();

    //get history
    const [history, setHistory] = React.useState([])
    const getHistory = async () => {
        try {
            const {data} = await http(token).get('/orders/byUser/'+ idUser)
            setHistory(data.results)
        } catch (error) {
            setHistory()
        }
    }

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

    //logout
    const out = () => {
        dispatch(clearTransaction())
        dispatch(logoutAction()); 
        navigate('/')
    }

    React.useEffect(() =>{
        getHistory()
        getProfil()
    }, [])


  return (
    <div className='h-screen'>
        <div> <Header></Header> </div>        
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
        </div>
        <main className='main-overlay right-more'>
          <div className='left-than-right'>
              <section className='overlay-left'>
                  <div className='tab-page overlay-white'>
                        <div className='mr-10 py-5' onClick={() => {navigate('/profilpage')}}>
                          <div>Account Settings</div>
                        </div>
                        <div className='mr-10 py-5 border-b-2 border-yellow-500 text-yellow-500' onClick={() => {navigate('/orderhistorypage')}}>
                            <div >Order History</div>
                        </div>
                  </div>
                  {history?.map((data, index) => (
                    <div key={index} className='history-order overlay-white-br'>
                        <div className='padding-nonbr history-film'>
                            <div>
                                <div className='text-yellow-700'>{new Date(data?.dateAndTime).toDateString()} - {data?.showtimeName}</div>
                                <div>{data.titleMovie}</div>
                            </div>
                            <div>
                                <img src={data?.imagePremiere || './Asset/HomePage/logo-cineone21.png'} alt={data.premiereName}/>
                            </div>
                        </div>                   
                        <div className='br-full'></div>                   
                        <div className='padding-nonbr btn-history'>
                            <div>
                                <div>
                                    {(new Date(data?.dateAndTime) ) >= today ? 
                                        <button onClick={() => navigate('/ticketresult/'+data.idOrder)} className='btn-history-active'>Ticket in active</button> :
                                        <button onClick={() => navigate('/ticketresult/'+data.idOrder)} className='btn-history-deactive'>Ticket is Expired</button>
                                    }
                                </div>
                            </div>
                            <div className='text-yellow-700'>See Details</div>
                        </div>                   
                    </div>                    
                  ))}
                  {/* <div className='history-order overlay-white-br'>
                      <div className='padding-nonbr history-film'>
                          <div>
                              <div>Tuesday, 07 July 2020 - 04:30pm</div>
                              <div>Spider-Man: Homecoming</div>
                          </div>
                          <div>
                              <img src='./Asset/HomePage/logo-cineone21.png' alt='cineone21'/>
                          </div>
                      </div>                   
                      <div className='br-full'></div>                   
                      <div className='padding-nonbr btn-history'>
                          <div>
                              <a href='./TicketResult.html'>
                                  <button className='btn-history-active'>Ticket in active</button>
                              </a>
                          </div>
                          <div><a href='#'>See Details</a></div>
                      </div>                   
                  </div>                
                  <div className='history-order overlay-white-br'>
                      <div className='padding-nonbr history-film'>
                          <div>
                              <div>Monday, 14 June 2020 - 02:00pm</div>
                              <div>Avengers: End Game</div>
                          </div>
                          <div>
                              <img src='./Asset/HomePage/logo-ebuid.png' alt='ebuid'/>
                          </div>
                      </div>                   
                      <div className='br-full'></div>                   
                      <div className='padding-nonbr btn-history'>
                          <div>
                              <a href='./TicketResultUsed.html'>
                                  <button className='btn-history-active non-active'>Ticket used</button>
                              </a>
                          </div>
                          <div><a href='#'>See Details</a></div>
                      </div>                   
                  </div>
                  <div className='history-order overlay-white-br'>
                      <div className='padding-nonbr history-film'>
                          <div>
                              <div>Monday, 10 March 2020 - 04:00pm</div>
                              <div>Thor: Ragnarok</div>
                          </div>
                          <div>
                              <img src='./Asset/HomePage/logo-cineone21.png' alt='cineone21'/>
                          </div>
                      </div>                   
                      <div className='br-full'></div>                   
                      <div className='padding-nonbr btn-history'>
                          <div>
                              <a href='./TicketResultExpired.html'>
                                  <button className='btn-history-active non-active'>Ticket Expired</button>
                              </a>
                          </div>
                          <div><a href='#'>See Details</a></div>
                      </div>                   
                  </div> */}
              </section>
          </div>
          <div className='right-than-left right-more'>
              <section className='overlay-right'>                
                  <div className='side-profil overlay-white-br'>
                      <div>INFO</div>
                      <div className='profil-info'>
                          <div>
                              <img className='rounded-full mx-auto' src={personal.picture || profileImage} alt='profil'/>
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
        </main>        
        <div> <Footer></Footer> </div>
    </div>
  )
}

export default OrderHistoryPage