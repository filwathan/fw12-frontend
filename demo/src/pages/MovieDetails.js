import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useParams, useNavigate } from 'react-router-dom';
import spiderman from '../asset/images/spiderman.png'
import http from '../helpers/http';
import {useSelector, useDispatch} from 'react-redux';
import jwt_decode from 'jwt-decode';
import {transaction} from '../redux/reducers/transactionReducers';

const MovieDetails = () => {
    const {idMovie} = useParams()
    const token = useSelector(state => state.auth.token);
    const decode = jwt_decode(token);
    const userId = decode.id;
    
    const dispacth = useDispatch();
    const navigate = useNavigate()

    const [movieDetail, setMovieDetail] = React.useState({});

    React.useEffect(() => {
        getMovieDetail(idMovie)
        getCityList();
        getPremieresAdress();
    },[idMovie])

   

    const getMovieDetail = async (idMovie) =>{
        const {data} = await http(token).get('movies/detail/' + idMovie);
        setMovieDetail(data.results)
    }

    //showtimes
    //date
    const today = new Date().toLocaleDateString("en-CA")
    const [date, setDate] = React.useState(new Date());
    //get city
    const [getCity, setGetCity] = React.useState([]);
    const [city, setCity] = React.useState('');
    const getCityList = async () => {
        try {
          const {data} = await http(token).get('/locations');
          setGetCity(data.results);
        } catch (error) {
          setGetCity([]);
        }
    };

    //getPremiereAdress
    const [adress, setAdress] = React.useState([]);
    const getPremieresAdress = async () => {
        try {
          const {data} = await http(token).get(
            '/premieres/premiereLocationByMovie/' + idMovie,
          );
          setAdress(data.results);
        } catch (error) {
          setAdress([]);
        }
      };

      //setTime
      const [time, setTime] = React.useState(0);

      //transaction
      const goTrx = (idUser, idMovie, idPremier, idLocation, datetrx, idTime) => {
        const params = {
          user: parseInt(idUser),
          movie: parseInt(idMovie),
          premiere: parseInt(idPremier),
          location: parseInt(idLocation),
          date: datetrx,
          time: parseInt(idTime),
        };
        dispacth(transaction(params));
        navigate('/orderpage')
      };
      

  return (
    <div className='h-screen'>
       <div> <Header></Header> </div>
       <section className='details-movie'>
            <div>
                <div className='border-img'>
                    <img src={movieDetail.picture || spiderman} alt={movieDetail.titleMovie}/>
                </div>
            </div>
            <div className='overlay-details'>
                <div className='title-genre'>
                    <h3>{movieDetail.titleMovie}</h3>
                    <span>{movieDetail.genre}</span>
                </div>
                <div className='details'>
                    <div>
                        <div>
                            <span>Release date</span>
                            <p>{new Date(movieDetail.releaseDate).toDateString()}</p>
                        </div>
                        <div>
                            <span>Duration</span>
                            <p>{movieDetail.duration} </p>
                        </div>
                    </div>
                    <div className='directed-casts'>
                        <div>
                            <span>Directed by</span>
                            <p>{movieDetail.direcredBy}</p>
                        </div>
                        <div>
                            <span>Casts</span>
                            <p>{movieDetail.cast}</p>
                        </div>
                    </div>
                </div>
                <div className='br-full'></div>
                <article className='synopsis'>
                    <h4>Synopsis</h4>
                    <p>{movieDetail.synopsis}</p>
                </article>
            </div>
        </section>
        <section className='overlay-showtimes-tickets'>
            <div className='header-show-tickets'>
                <div>
                    <h3>Showtimes and Tickets</h3>
                </div>
                <div>
                    {/* <input className='input' type='date' id='date-tickect' name='date-tickect' /> */}
                    <input min={today} onChange={e => setDate(e.target.value) } className='input' type='date' id='date-tickect' name='date-tickect' />
                    {/* <!-- <select name='date' id='date-ticket'></select> --> */}
                    <select onChange={e => setCity(e.target.value) }  className="select" name='location' id='location'>
                        {getCity?.map((data, index) =>(
                            <option key={index} value={data.idLocation} label={data.locationName} ></option>
                        ))}
                        {/* <option value='jakarta'>Jakarta</option>
                        <option value='purwokerto'>Purwokerto</option>
                        <option value='bandung'>Bandung</option> */}
                    </select>
                </div>
            </div>
            <div className='overlay-tickets'>
                {adress?.map((data, index) => (
                    <div key={index} className='tickets'>
                        <div className='choice-ticket'>
                            <div className='bracnd-ticket'>
                                <div>
                                    <img src='./Asset/HomePage/logo-ebuid.png' alt='ebuid'/>
                                </div>
                                <div>
                                    <h3>{data.premiereName}</h3>
                                    <p>{data.locationAdress}</p>
                                </div>
                            </div>
                            <div className='br-full'></div>
                            <div className='times'>
                                <div onClick={() => {setTime(1)}} className={time === 1 ? 'text-yellow-500 w-[50px]' : 'w-[50px]'}>08:30</div>
                                <div onClick={() => {setTime(2)}} className={time === 2 ? 'text-yellow-500 w-[50px]' : 'w-[50px]'}>10:30</div>
                                <div onClick={() => {setTime(3)}} className={time === 3 ? 'text-yellow-500 w-[50px]' : 'w-[50px]'}>12:00</div>
                                <div onClick={() => {setTime(4)}} className={time === 4 ? 'text-yellow-500 w-[50px]' : 'w-[50px]'}>14:00</div>
                                <div onClick={() => {setTime(5)}} className={time === 5 ? 'text-yellow-500 w-[50px]' : 'w-[50px]'}>16:30</div>
                                <div onClick={() => {setTime(6)}} className={time === 6 ? 'text-yellow-500 w-[50px]' : 'w-[50px]'}>18:30</div>
                                <div onClick={() => {setTime(7)}} className={time === 7 ? 'text-yellow-500 w-[50px]' : 'w-[50px]'}>20:30</div>
                                <div onClick={() => {setTime(8)}} className={time === 8 ? 'text-yellow-500 w-[50px]' : 'w-[50px]'}>22:30</div>
                            </div>
                            <div className='price'>
                                <div>
                                    <div>Price</div>
                                </div>
                                <div>
                                    <div>$ {movieDetail.price}/seat</div>
                                </div>
                            </div>
                            <div className='overlay-btn'>
                                <div>
                                    <button 
                                        onClick={
                                            () => goTrx(
                                                userId, 
                                                idMovie, 
                                                data.idPremiere, 
                                                data.idLocation, 
                                                date, 
                                                time,
                                            )} 
                                        className='btn-booking'>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                
                {/* <div className='tickets'>
                    <div className='choice-ticket'>
                        <div className='bracnd-ticket'>
                            <div>
                                <img src='./Asset/HomePage/logo-ebuid.png' alt='ebuid'/>
                            </div>
                            <div>
                                <h3>ebv.id</h3>
                                <p>Whatever street No.12, South Purwokerto</p>
                            </div>
                        </div>
                        <div className='br-full'></div>
                        <div className='times'>
                            <div>08:30am</div>
                            <div>10:30pm</div>
                            <div>12:00pm</div>
                            <div>02:00pm</div>
                            <div>04:30pm</div>
                            <div>07:00pm</div>
                            <div>08:30pm</div>
                        </div>
                        <div className='price'>
                            <div>
                                <div>Price</div>
                            </div>
                            <div>
                                <div>$10.00/seat</div>
                            </div>
                        </div>
                        <div className='overlay-btn'>
                            <a href='./OrederPage.html'>
                                <button className='btn-booking'>Book Now</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='tickets'>
                    <div className='choice-ticket'>
                        <div className='bracnd-ticket'>
                            <div>
                                <img src='./Asset/HomePage/logo-ebuid.png' alt='ebuid'/>
                            </div>
                            <div>
                                <h3>ebv.id</h3>
                                <p>Whatever street No.12, South Purwokerto</p>
                            </div>
                        </div>
                        <div className='br-full'></div>
                        <div className='times'>
                            <div>08:30am</div>
                            <div>10:30pm</div>
                            <div>12:00pm</div>
                            <div>02:00pm</div>
                            <div>04:30pm</div>
                            <div>07:00pm</div>
                            <div>08:30pm</div>
                        </div>
                        <div className='price'>
                            <div>
                                <div>Price</div>
                            </div>
                            <div>
                                <div>$10.00/seat</div>
                            </div>
                        </div>
                        <div className='overlay-btn'>
                            <a href='./OrederPage.html'>
                                <button className='btn-booking'>Book Now</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='tickets'>
                    <div className='choice-ticket'>
                        <div className='bracnd-ticket'>
                            <div>
                                <img src='./Asset/HomePage/logo-ebuid.png' alt='ebuid'/>
                            </div>
                            <div>
                                <h3>ebv.id</h3>
                                <p>Whatever street No.12, South Purwokerto</p>
                            </div>
                        </div>
                        <div className='br-full'></div>
                        <div className='times'>
                            <div>08:30am</div>
                            <div>10:30pm</div>
                            <div>12:00pm</div>
                            <div>02:00pm</div>
                            <div>04:30pm</div>
                            <div>07:00pm</div>
                            <div>08:30pm</div>
                        </div>
                        <div className='price'>
                            <div>
                                <div>Price</div>
                            </div>
                            <div>
                                <div>$10.00/seat</div>
                            </div>
                        </div>
                        <div className='overlay-btn'>
                            <a href='./OrederPage.html'>
                                <button className='btn-booking'>Book Now</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='tickets'>
                    <div className='choice-ticket'>
                        <div className='bracnd-ticket'>
                            <div>
                                <img src='./Asset/HomePage/logo-ebuid.png' alt='ebuid'/>
                            </div>
                            <div>
                                <h3>ebv.id</h3>
                                <p>Whatever street No.12, South Purwokerto</p>
                            </div>
                        </div>
                        <div className='br-full'></div>
                        <div className='times'>
                            <div>08:30am</div>
                            <div>10:30pm</div>
                            <div>12:00pm</div>
                            <div>02:00pm</div>
                            <div>04:30pm</div>
                            <div>07:00pm</div>
                            <div>08:30pm</div>
                        </div>
                        <div className='price'>
                            <div>
                                <div>Price</div>
                            </div>
                            <div>
                                <div>$10.00/seat</div>
                            </div>
                        </div>
                        <div className='overlay-btn'>
                            <a href='./OrederPage.html'>
                                <button className='btn-booking'>Book Now</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='tickets'>
                    <div className='choice-ticket'>
                        <div className='bracnd-ticket'>
                            <div>
                                <img src='./Asset/HomePage/logo-ebuid.png' alt='ebuid'/>
                            </div>
                            <div>
                                <h3>ebv.id</h3>
                                <p>Whatever street No.12, South Purwokerto</p>
                            </div>
                        </div>
                        <div className='br-full'></div>
                        <div className='times'>
                            <div>08:30am</div>
                            <div>10:30pm</div>
                            <div>12:00pm</div>
                            <div>02:00pm</div>
                            <div>04:30pm</div>
                            <div>07:00pm</div>
                            <div>08:30pm</div>
                        </div>
                        <div className='price'>
                            <div>
                                <div>Price</div>
                            </div>
                            <div>
                                <div>$10.00/seat</div>
                            </div>
                        </div>
                        <div className='overlay-btn'>
                            <a href='./OrederPage.html'>
                                <button className='btn-booking'>Book Now</button>
                            </a>
                        </div>
                    </div>
                </div>    */}
            </div>
            <div className='more'>
                <div className='br-full'></div>
                <div>view more</div>
                <div className='br-full'></div>
            </div>
        </section>       
       <div> <Footer></Footer> </div>
    </div>
  )
}

export default MovieDetails