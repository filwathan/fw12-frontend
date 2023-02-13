import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import logo from '../asset/images/pengennonton.png'
import qr from '../asset/images/QR-Code1.png'
import { useParams } from 'react-router-dom';
import http from '../helpers/http';
import { useSelector } from 'react-redux';

const TicketResult = () => {
    const token = useSelector((state) => state.auth.token)
    const {idOrder} = useParams()
    //get order tikect
    const [tickect, setTickect] = React.useState({})
    const getOrderById = async () => {
        try {
            const {data} = await http(token).get('/orders/byIdOrder/'+ idOrder)
            setTickect({...data.results, count: data.results.seat.split(',').length})
        } catch (error) {
            setTickect({})
        }
    }

    React.useEffect(() => {
        getOrderById()
        
    }, [])
  return (
    <div className='h-screen'>
        <div> <Header></Header> </div>
        <main className='overlay-ticket-result'>
        <div className='ticket-result overlay-white'>
            <div>Proof of Payment</div>
            <div className='overlay-ticket'>
                <div className='left-side-ticket'>
                    <div className='header-ticket'>
                        <div>
                            <img className='w-[40px]' src={logo} alt='tickitz' />
                        </div>
                        <div>Admit One</div>
                    </div>
                    <div className='detail-ticket'>
                        <div>
                            <div>Movie</div>
                            <div>{tickect?.titleMovie}</div>
                        </div>
                    </div>
                    <div className='detail-ticket'>
                        <div>
                            <div>Date</div>
                            <div>{new Date(tickect?.dateAndTime).toDateString()}</div>
                        </div>
                        <div>
                            <div>Time</div>
                            <div>{tickect?.showtimeName}</div>
                        </div>
                        <div>
                            <div>Category</div>
                            <div>{tickect?.genre}</div>
                        </div>
                    </div>
                    <div className='detail-ticket'>
                        <div>
                            <div>Count</div>
                            <div>{tickect?.count}</div>
                        </div>
                        <div>
                            <div>Seats</div>
                            <div>{tickect?.seat}</div>
                        </div>
                        <div className='price-detail-ticket'>
                            <div>Price</div>
                            <div>$ {tickect?.total}</div>
                        </div>
                    </div>

                </div>
                <div className='right-side-ticket'>
                    <div className='header-ticket'>
                        <div>
                            <img className='w-[40px]' src={logo} alt='tickitz' />
                        </div>
                    </div>
                    <div className='overlay-qr'>
                        <div className='qr-code'>
                            <img className='bg-white' src={new Date(tickect?.dateAndTime) > new Date() ? qr : "" } alt='QR CODE' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
        
        <div> <Footer></Footer> </div>
    </div>
  )
}

export default TicketResult