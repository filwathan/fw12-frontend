import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { addSeatTransaction, clearTransaction } from '../redux/reducers/transactionReducers';
import http from '../helpers/http';

const OrderPage = () => {
    const navigate = useNavigate();
    const dispacth = useDispatch();
    const token = useSelector((state) => state.auth.token)
    //trasaction previus
    const transaction = useSelector(state => state.transaction);

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

    //seat grid
    const seatAlphabeth = ['A', 'B', 'C', 'D', 'E', 'F', 'G',];
    const seatNumber = [0, 1, 2, 3, 4, 5, 6, 7,];
    const [selected, setSelected] = React.useState([]);

    //add seat transaction
    const goTrxAddSeat = (seatSeleceted, total) => {
        const params = {
          seat: seatSeleceted,
          total: total,
        };
        console.log(params);
        dispacth(addSeatTransaction(params));
        navigate('/paymentpage')
    };

    //change movie
    const changeMovie = () => {
        dispacth(clearTransaction());
        navigate('/viewall')
    }

    React.useEffect(() => {
        getMovie();
        getPremiere();
        getShowtime();

    }, [selected])
  return (
    <div className='h-screen'>
        <div> <Header></Header> </div>
        <main className='main-overlay'>
          <div className='left-than-right'>
              <div className='overlay-left'>
                  <div>
                      <h3 className='title-instructure'>Movie Selected</h3>
                  </div>
                  <div className='title-film'>                    
                      <div>{movie?.titleMovie}</div>
                      <div>
                          <button onClick={changeMovie} className='btn-change-movie'>Change movie</button>
                      </div>                    
                  </div>
                  <div>
                      <h3 className='title-instructure'>Choose Your Seat</h3>
                  </div>
                  <div className='choose-seat'>
                      <div className='screen'>
                          <div>Screen</div>
                          <div className='br-full'></div>
                      </div>                     
                      <div className='grid-seat'>
                          <div className='left-grid-seat'>
                                {seatNumber.map((numb, i) => (
                                    <div key={i}>
                                        {seatAlphabeth.map((alpha, j) => (i === 0 ?
                                            <div className='bg-white' key={j}>
                                                {alpha}
                                            </div> :
                                            <div onClick={() => (setSelected([...selected, alpha+numb]))} key={j}>
                                            {alpha+numb}
                                        </div>
                                        ))}
                                        <div>{numb}</div>
                                    </div>
                                ))}
                          </div>
                          <div className='right-grid-seat'>
                                {seatNumber.map((numb, i) => (
                                    <div key={i+7}>
                                        {seatAlphabeth.map((alpha, j) => (numb === 0 ?
                                            <div className='bg-white' key={j}>
                                                {alpha}
                                            </div> :
                                            <div onClick={() => (setSelected([...selected, alpha+(numb+7)]))} key={j}>
                                            {alpha+(numb+7)}
                                        </div>
                                        ))}
                                        <div>{numb+7}</div>
                                    </div>
                                ))}
                          </div>
                      </div>
                      <div className='seating-key'>Seating key</div>
                      <div className='legend-seating-key'>
                          <div>
                              <div></div>
                              <span>Available</span>
                          </div>
                          <div>
                              <div></div>
                              <span>Selected</span>
                          </div>
                          <div>
                              <div></div>
                              <span>Sold</span>
                          </div>
                      </div>
                  </div>
                  <div className='overlay-btn-order'>
                      <div>
                          <div>
                              <button onClick={changeMovie} className='btn-checkout-order'>Change your movie</button>
                          </div>
                      </div>
                      <div>
                          <div >
                              <button onClick={() => {
                                goTrxAddSeat(selected, selected.length * movie.price);
                                }} 
                                className='btn-checkout-order'>Checkout now</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className='right-than-left'>
              <div className='overlay-right'>
                  <div>
                      <h3 className='title-instructure'>Order Info</h3>
                  </div>
                  <div className='order-info'>
                      <div className='brand-order-info'>
                          <div>
                              <img src='./Asset/HomePage/logo-cineone21.png' alt='cineone21'/>
                          </div>
                          <div>{premiere?.premiereName} Cinema</div>
                      </div>
                      <div className='detail-orader-info'>
                          <div>
                              <p>Movie selected</p>
                              <div>{movie?.titleMovie}</div>
                          </div>
                          <div>
                              <p>{new Date(transaction?.dateAndTime).toDateString()}</p>
                              <div>{showtime?.showtimeName}</div>
                          </div>
                          <div>
                              <p>One ticket price</p>
                              <div>$ {movie?.price}</div>
                          </div>
                          <div>
                              <p>Seat choosed</p>
                              <div>{selected?.join(', ')}</div>
                          </div>
                      </div>
                      <div className='br-full'></div>
                      <div className='total-payment-order'>
                          <div>Total Payment</div>
                          <div>$ {selected.length * movie.price}</div>
                      </div>
                    
                </div>
              </div>
          </div>

        </main>     
        <div> <Footer></Footer> </div>
    </div>
  )
}

export default OrderPage