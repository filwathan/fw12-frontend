import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const ManageMoviePage = () => {
  return (
    <div className='h-screen'>
        <div> <Header></Header> </div>
        <div>
            <div> Form Movie</div>
            <div>
                <form>
                    <div>atas
                        <div>image</div>
                        <div>form 1
                            <div>
                                <label for='titleMovie'>Movie Name</label>
                                <input type='text' name='titleMovie' id='titleMovie' placeholder='titleMovie from database'/>
                            </div>
                            <div>
                                <label for='director'>Director</label>
                                <input type='text' name='director' id='director' placeholder='director from database'/>
                            </div>
                            <div>
                                <label for='releaseDate'>Release Date</label>
                                <input type='text' name='releaseDate' id='releaseDate' placeholder='releaseDate from database'/>
                            </div>
                        </div>
                        <div>form 2
                            <div>
                                <label for='Genres'>Category</label>
                                <input type='text' name='Genres' id='Genres' placeholder='Genres from database'/>
                            </div>
                            <div>
                                <label for='casts'>Cast</label>
                                <input type='text' name='casts' id='casts' placeholder='casts from database'/>
                            </div>
                            <div>jam menit
                                <div>
                                    <label for='hour'>Duration Hour</label>
                                    <input type='text' name='hour' id='hour' placeholder='hour from database'/>
                                </div>
                                <div>
                                    <label for='minute'>Duration Minute</label>
                                    <input type='text' name='minute' id='minute' placeholder='minute from database'/>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div>bawah
                        <div>
                            <label for='synopsis'>Synopsis</label>
                            <input type='text' name='synopsis' id='synopsis' placeholder='synopsis from database'/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <button>reset</button>                            
                        </div>
                        <div>
                            <button>submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <div>data movie</div>
                <div>sort</div>
                <div>search</div>
            </div>
            <div></div>
            <div>1,2,3,4</div>
        </div>
        <div> <Footer></Footer> </div>
    </div>
  )
}

export default ManageMoviePage