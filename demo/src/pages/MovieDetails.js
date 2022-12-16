import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const MovieDetails = () => {
    const {idMovie} = useParams()

    const [movieDetail, setMovieDetail] = React.useState({});

    React.useEffect(() => {
        getMovieDetail(idMovie)
    },[idMovie])

   

    const getMovieDetail = async (idMovie) =>{
        const {data} = await axios.get('http://localhost:8888/movies/detail/' + idMovie);
        setMovieDetail(data.results)
    }

  return (
    <div className='h-screen'>
       <div> <Header></Header> </div>
       <section className='details-movie'>
            <div>
                <div className='border-img'>
                    <img src={"http://localhost:8888/assets/uploads/".concat(movieDetail.picture)} alt='spiderman'/>
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
                            <p>{movieDetail.releaseDate}</p>
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
                    <input type='date' id='date-tickect' name='date-tickect' />
                    {/* <!-- <select name='date' id='date-ticket'></select> --> */}
                    <select name='location' id='location'>
                        <option value='jakarta'>Jakarta</option>
                        <option value='purwokerto'>Purwokerto</option>
                        <option value='bandung'>Bandung</option>
                    </select>
                </div>
            </div>
            <div className='overlay-tickets'>
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