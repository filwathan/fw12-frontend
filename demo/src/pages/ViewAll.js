import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ViewAll = () => {
    const [movie, setMovie] = React.useState({});
    React.useEffect(()=>{
        getMovie().then((data) =>{
            setMovie(data)
        })
    },[])

    const getMovie = async () =>{
        const {data} = await axios.get('http://localhost:8888/movies/semua');
        return data
    }


  return (
    <div className='h-screen'>
        <div> <Header></Header> </div>
        <main className='list-movie'>
            <div className='coming-soon-product'>
                <div>
                    <span>List Movie</span>
                </div>
                <div className='sort-list-movie'>
                    <select name='sort' id='sort'>
                        <option value='sort'>Sort</option>
                    </select>
                </div>
                <div className='search-list-movie'>
                    <input type='search' placeholder='Search Movie Name ...'/>
                </div>
            </div>
            <div className='month'>
                <button className='btn-month'>September</button>
                <button className='btn-month'>October</button>
                <button className='btn-month'>November</button>
                <button className='btn-month'>December</button>
                <button className='btn-month'>January</button>
                <button className='btn-month'>February</button>
                <button className='btn-month'>March</button>
                <button className='btn-month'>April</button>
                <button className='btn-month'>May</button>
                <button className='btn-month'>July</button>
                <button className='btn-month'>august</button>
            </div>
            <div id='warp-upcoming-list' className='upcoming-list movie-list'>
                {movie?.results?.map((film) =>(
                    <div >
                    <img  src={"http://localhost:8888/assets/uploads/".concat(film.picture)} alt="The Witchec"/>
                    <h4 > {film.titleMovie}</h4>
                    <p >{film.genre}</p>
                    <Link to={'/moviedetails/' + film.idMovie}>
                        <button >Details</button>
                    </Link>
                    </div>
                    ))}
                {/* <div>
                    <img src='./Asset/HomePage/the-witches.png' alt='The Witchec'/>
                    <h4>The Witchec</h4>
                    <p>Adventure, Comedy, Family</p>
                    <a href='./MovieDetails.html'>
                        <button>Details</button>
                    </a>
                </div>
                <div>
                    <img src='./Asset/HomePage/tenet.png' alt='Tenet'/>
                    <h4>Tenet</h4>
                    <p>Action, Sci-Fi</p>
                    <a href='./MovieDetails.html'>
                        <button>Details</button>
                    </a>
                </div>
                <div>
                    <img src='./Asset/HomePage/black-widow.png' alt='Black Widow'/>
                    <h4>Black Widow</h4>
                    <p>Action, Adventure, Sci-Fi</p>
                    <a href='./MovieDetails.html'>
                        <button>Details</button>
                    </a>
                </div>
                <div>
                    <img src='./Asset/HomePage/the-witches.png' alt='The Witchec'/>
                    <h4>The Witchec</h4>
                    <p>Adventure, Comedy, Family</p>
                    <a href='./MovieDetails.html'>
                        <button>Details</button>
                    </a>
                </div>               
                <div>
                    <img src='./Asset/HomePage/the-witches.png' alt='The Witchec'/>
                    <h4>The Witchec</h4>
                    <p>Adventure, Comedy, Family</p>
                    <a href='./MovieDetails.html'>
                        <button>Details</button>
                    </a>
                </div>               
                <div>
                    <img src='./Asset/HomePage/the-witches.png' alt='The Witchec'/>
                    <h4>The Witchec</h4>
                    <p>Adventure, Comedy, Family</p>
                    <a href='./MovieDetails.html'>
                        <button>Details</button>
                    </a>
                </div>               
                <div>
                    <img src='./Asset/HomePage/the-witches.png' alt='The Witchec'/>
                    <h4>The Witchec</h4>
                    <p>Adventure, Comedy, Family</p>
                    <a href='./MovieDetails.html'>
                        <button>Details</button>
                    </a>
                </div> */}
            </div>
            <div className='number-page'>
                <div><span>1</span></div>
                <div><span>2</span></div>
                <div><span>3</span></div>
                <div><span>4</span></div>
            </div>
        </main>
        <div> <Footer></Footer> </div>
    </div>
  )
}

export default ViewAll