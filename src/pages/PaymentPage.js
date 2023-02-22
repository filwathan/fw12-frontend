import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import {useSelector, useDispatch} from 'react-redux';
import http from '../helpers/http';
import { useNavigate } from 'react-router-dom';
import { clearTransaction } from '../redux/reducers/transactionReducers';

const PaymentPage = () => {
    const navigate = useNavigate()
    const dispacth = useDispatch()
    const token = useSelector((state) => state.auth.token)
    const transaction = useSelector(state => state.transaction);
    
    //get user
    const [personal, setPersonal] = React.useState({});
    const getProfil = async () => {
        try {
            const {data} = await http(token).get('/users/' + transaction.idUser);
            setPersonal(data.results);
        } catch (error) {
          setPersonal({});
        }
      };

    //get movie
    const [movie, setMovie] = React.useState({});
        const getMovie = async () => {
        try {
            const {data} = await http(token).get('/movies/' + transaction.idMovie);
            setMovie(data.results);
        } catch (error) {
            setMovie({});
        }
    };

    //get premiere
    const [premiere, setPremiere] = React.useState({});    
        const getPremiere = async () => {
        try {
            const {data} = await http(token).get('/premieres/' + transaction.idPremiere);
            setPremiere(data.results);
        } catch (error) {
            setPremiere({});
        }
    };

    //get shotime
    const [showtime, setShowtime] = React.useState({});
        const getShowtime = async () => {
        try {
            const {data} = await http(token).get('/showtimes/' + transaction.idShowtime);
            setShowtime(data.results);
        } catch (error) {
            setShowtime({});
        }
    };

    //pay the transaction
    const [payment,setPayment] = React.useState(0);
    const [firstName, setFirstName] = React.useState('');    
    const [email, setEmail] = React.useState('');    
    const [phone, setPhone] = React.useState(0);    

    const payTransaction = async () => {
        try {
            console.log('hit')
            const wantPay = {...transaction, seat: transaction.seat.toString(), fullName: firstName || personal?.firstName, email: personal?.email, phone: personal?.phone, idPayment: payment }
            console.log(wantPay)
            const {data} = await http(token).post('/orders/', wantPay)
            console.log(data.results)
            dispacth(clearTransaction())
            navigate('/orderhistorypage')
        } catch (error) {
            console.log('error')
        }
    }

    React.useEffect(() => {
        getMovie();
        getPremiere();
        getShowtime();
        getProfil();

    }, [])
  return (
    <div className='h-screen'>
        <div> <Header></Header> </div>
        <div className='main-overlay'>
          <div className='left-than-right'>
              <div className='overlay-left'>
                  <div>
                      <h3 className='title-instructure'>Payment Info</h3>
                  </div>
                  <div className='payment-info'>                    
                      <div>
                          <div>Date & time</div>
                          <div>{new Date(transaction?.dateAndTime).toDateString()} at {showtime.showtimeName} </div>
                      </div>
                      <div className='br-full'></div>                    
                      <div>
                          <div>Movie title</div>
                          <div>{movie?.titleMovie}</div>
                      </div>                    
                      <div className='br-full'></div>                    
                      <div>
                          <div>Cinema name</div>
                          <div>{premiere?.premiereName} Cinema</div>
                      </div>                    
                      <div className='br-full'></div>                    
                      <div>
                          <div>Number of tickets</div>
                          <div>{transaction.seat.length} pieces</div>
                      </div>                    
                      <div className='br-full'></div>                    
                      <div>
                          <div>Total payment</div>
                          <div className='total-price-payment'>$ {transaction.total}</div>
                      </div>                 
                  </div>
                  <div>
                      <h3 className='title-instructure'>Choose a Payment Method</h3>
                  </div>
                  <div className='choose-seat'>
                      <div className='payment-brand'>
                          <div onClick={() => setPayment(1)} className={payment === 1 ? 'bg-yellow-500 border-2  border-solid border-yellow-700 rounded-lg pt-4 pr-1 pb-4 pl-1 text-center' : 'border-2  border-solid border-yellow-700 rounded-lg pt-4 pr-1 pb-4 pl-1 text-center'}>
                              <img src='./Asset/HomePage/logo-bca.png' alt='bca'/>
                          </div>
                          <div onClick={() => setPayment(2)} className={payment === 2 ? 'bg-yellow-500 border-2  border-solid border-yellow-700 rounded-lg pt-4 pr-1 pb-4 pl-1 text-center' : 'border-2  border-solid border-yellow-700 rounded-lg pt-4 pr-1 pb-4 pl-1 text-center'}>
                              <img src='./Asset/HomePage/logo-ovo.png' alt='ovo'/>
                          </div>
                          <div onClick={() => setPayment(3)} className={payment === 3 ? 'bg-yellow-500 border-2  border-solid border-yellow-700 rounded-lg pt-4 pr-1 pb-4 pl-1 text-center' : 'border-2  border-solid border-yellow-700 rounded-lg pt-4 pr-1 pb-4 pl-1 text-center'}>
                              <img src='./Asset/HomePage/logo-bri.png' alt='bri'/>
                          </div>
                          <div onClick={() => setPayment(4)} className={payment === 4 ? 'bg-yellow-500 border-2  border-solid border-yellow-700 rounded-lg pt-4 pr-1 pb-4 pl-1 text-center' : 'border-2  border-solid border-yellow-700 rounded-lg pt-4 pr-1 pb-4 pl-1 text-center'}>
                              <img src='./Asset/HomePage/logo-dana.png' alt='dana'/>
                          </div>
                          <div onClick={() => setPayment(5)} className={payment === 5 ? 'bg-yellow-500 border-2  border-solid border-yellow-700 rounded-lg pt-4 pr-1 pb-4 pl-1 text-center' : 'border-2  border-solid border-yellow-700 rounded-lg pt-4 pr-1 pb-4 pl-1 text-center'}>
                              <img src='./Asset/HomePage/logo-gopay.png' alt='gopay'/>
                          </div>
                          <div onClick={() => setPayment(6)} className={payment === 6 ? 'bg-yellow-500 border-2  border-solid border-yellow-700 rounded-lg pt-4 pr-1 pb-4 pl-1 text-center' : 'border-2  border-solid border-yellow-700 rounded-lg pt-4 pr-1 pb-4 pl-1 text-center'}>
                              <img src='./Asset/HomePage/logo-visa.png' alt='visa'/>
                          </div>
                          <div onClick={() => setPayment(7)} className={payment === 7 ? 'bg-yellow-500 border-2  border-solid border-yellow-700 rounded-lg pt-4 pr-1 pb-4 pl-1 text-center' : 'border-2  border-solid border-yellow-700 rounded-lg pt-4 pr-1 pb-4 pl-1 text-center'}>
                              <img src='./Asset/HomePage/logo-gpay.png' alt='gpay'/>
                          </div>
                          <div onClick={() => setPayment(8)} className={payment === 8 ? 'bg-yellow-500 border-2  border-solid border-yellow-700 rounded-lg pt-4 pr-1 pb-4 pl-1 text-center' : 'border-2  border-solid border-yellow-700 rounded-lg pt-4 pr-1 pb-4 pl-1 text-center'}>
                              <img src='./Asset/HomePage/logo-paypal.png' alt='paypal'/>
                          </div>
                      </div>
                      <div className='additional-main'>
                          <div className='br-full'></div>
                          <div className='middle-br'>or</div>
                          {/* <!-- <div className='br-full'> --> */}
                          <div className='via-cash'>
                              <span>Pay via cash. </span>
                              <span>See how it work</span>
                          </div>
                      </div>
                      <div></div>
                  </div>
                  <div className='overlay-btn-order'>
                      <div>
                          <div>
                              <button onClick={() => navigate('/orderpage')} className='btn-checkout-order'>Prvious step</button>
                          </div>
                      </div>
                      <div>
                          <div>
                              <button type='submit' onClick={payTransaction} className='btn-checkout-order'>Pay your order</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className='right-than-left'>
            <div className='overlay-right'>
                <div>
                    <h3 className='title-instructure'>Personal Info</h3>
                </div>
                <div className='personal-info'>
                    <form>
                        <div>
                            <label htmlFor='firstName'>First Name</label>
                            <input onChange={e => setFirstName(e.target.value)} type='text' name='firstName' id='firstName' defaultValue={personal?.firstName}/>
                        </div>
                        <div>
                            <label htmlFor='email'>Email</label>
                            <input onChange={e => setEmail(e.target.value)} type='text' name='email' id='email' defaultValue={personal?.email}/>
                        </div>
                        <div>
                            <label htmlFor='phone'>Phone Number</label>
                            <input onChange={e => setPhone(e.target.value)} type='text' name='phone' id='phone' defaultValue={personal?.phone}/>
                        </div>
                        <div>
                            <div className='validation-notif'>
                                <i data-feather='alert-triangle'></i>
                                <div>Fill your data correctly.</div>
                            </div>
                        </div>
                    </form>
                </div>                    
            </div>
          </div>
          

        </div>        
        <div> <Footer></Footer> </div>
    </div>
  )
}

export default PaymentPage