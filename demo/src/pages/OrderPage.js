import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const OrderPage = () => {
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
                      <div>Spider-Man: Homecoming</div>
                      <div>
                          <button className='btn-change-movie'>Change movie</button>
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
                              <div className='seat-name'>A</div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div className='seat-name'>B</div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div className='seat-name'>C</div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div className='seat-name'>D</div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div className='seat-name'>E</div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div className='seat-name'>F</div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div className='seat-name'>G</div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div className='seat-name'>H</div>
                              <div className='seat-name'>1</div>
                              <div className='seat-name'>2</div>
                              <div className='seat-name'>3</div>
                              <div className='seat-name'>4</div>
                              <div className='seat-name'>5</div>
                              <div className='seat-name'>6</div>
                              <div className='seat-name'>7</div>
                          </div>
                          <div className='right-grid-seat'>
                              
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              
                              <div className='seat-name'>8</div>
                              <div className='seat-name'>9</div>
                              <div className='seat-name'>10</div>
                              <div className='seat-name'>11</div>
                              <div className='seat-name'>12</div>
                              <div className='seat-name'>13</div>
                              <div className='seat-name'>14</div>
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
                          <a href='./ViewAll.html'>
                              <button className='btn-checkout-order'>Change your movie</button>
                          </a>
                      </div>
                      <div>
                          <a href='./PaymentPage.html'>
                              <button className='btn-checkout-order'>Checkout now</button>
                          </a>
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
                          <div>CineOne21 Cinema</div>
                      </div>
                      <div className='detail-orader-info'>
                          <div>
                              <p>Movie selected</p>
                              <div>Spider-Man: Homecoming</div>
                          </div>
                          <div>
                              <p>Tuesday, 07 July 2020</p>
                              <div>02:00</div>
                          </div>
                          <div>
                              <p>One ticket price</p>
                              <div>$10</div>
                          </div>
                          <div>
                              <p>Seat choosed</p>
                              <div>C4, C5, C6</div>
                          </div>
                      </div>
                      <div className='br-full'></div>
                      <div className='total-payment-order'>
                          <div>Total Payment</div>
                          <div>$30</div>
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