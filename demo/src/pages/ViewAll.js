import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import spiderman from '../asset/images/spiderman.png'
import http from '../helpers/http';
import { useSelector } from 'react-redux';

const ViewAll = () => {
    const token = useSelector((state) => state.auth.token)
    const [movie, setMovie] = React.useState({});
    const [page, setPage] = React.useState(1)
    const [totalPage, setTotalPage] = React.useState(1)
    const [limit, setLimit] = React.useState(8)
    const [search, setSearch] = React.useState('')
    const [sortBy, setSortBy] = React.useState('')
    const [sort, setSort] = React.useState('ASC')
    
    
    

    //get all movie
    const getMovie = async () =>{
        try {
            const {data} = await http(token).get(`/movies/semua?page=${page}&limit=${limit}&search=${search}&sortBy=${sortBy}&sort=${sort}`);
            console.log(data.pageInfo)
            setTotalPage(data.pageInfo.totalPage)
            setMovie(data)
        } catch (error) {
            setMovie({})            
        }
        
    }

    //search
    const seaching = (e) => {
        setSearch(e.target.value)
    }

    //sort
    const sorting = (e) =>{
        setSort(e.target.value)
    }

    //add
    const add = () => {
        if(page < totalPage){
            setPage(page + 1 )
        }
        else{
            setPage(page)
        }
    }

    //minus
    const minus = () => {
        if(page > 1){
            setPage(page - 1 )
        }
        else{
            setPage(page)
        }
    }


    React.useEffect(()=>{
        getMovie()
    },[page,limit,search,sortBy,sort,totalPage])


  return (
    <div className='h-screen'>
        <div> <Header></Header> </div>
        <main className='list-movie'>
            <div className='coming-soon-product'>
                <div>
                    <span>List Movie</span>
                </div>
                <div className='sort-list-movie'>
                    <select onChange={sorting} name='sort' id='sort'>
                        <option value='ASC'>A~Z a~z</option>
                        <option value='DESC'>z~a Z~A</option>
                    </select>
                </div>
                <div className='search-list-movie'>
                    <input onChange={seaching} type='search' placeholder='Search Movie Name ...'/>
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
                {movie?.results?.map((film, index) =>(
                    <div key={index} >
                        <img  src={film.picture || spiderman} alt={film.titleMovie}/>
                        <h4 > {film.titleMovie}</h4>
                        <p >{film.genre}</p>
                        <Link to={'/moviedetails/' + film.idMovie}>
                            <button >Details</button>
                        </Link>
                    </div>
                ))}                
            </div>
            <div className='number-page'>
                <div onClick={minus}><span>{'<'}</span></div>
                <div><span>{page}</span></div>
                <div onClick={add}><span>{'>'}</span></div>
            </div>
        </main>
        <div> <Footer></Footer> </div>
    </div>
  )
}

export default ViewAll