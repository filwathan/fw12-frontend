import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const PaymentPage = () => {
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
                          <div>Tuesday, 07 July 2020 at 02:00 </div>
                      </div>
                      <div className='br-full'></div>                    
                      <div>
                          <div>Movie title</div>
                          <div>Spider-Man: Homecoming</div>
                      </div>                    
                      <div className='br-full'></div>                    
                      <div>
                          <div>Cinema name</div>
                          <div>CineOne21 Cinema</div>
                      </div>                    
                      <div className='br-full'></div>                    
                      <div>
                          <div>Number of tickets</div>
                          <div>3 pieces</div>
                      </div>                    
                      <div className='br-full'></div>                    
                      <div>
                          <div>Total payment</div>
                          <div className='total-price-payment'>$30,00</div>
                      </div>                 
                  </div>
                  <div>
                      <h3 className='title-instructure'>Choose a Payment Method</h3>
                  </div>
                  <div className='choose-seat'>
                      <div className='payment-brand'>
                          <div className='brand-border'>
                              <img src='./Asset/HomePage/logo-gpay.png' alt='gpay'/>
                          </div>
                          <div className='brand-border'>
                              <img src='./Asset/HomePage/logo-visa.png' alt='visa'/>
                          </div>
                          <div className='brand-border'>
                              <img src='./Asset/HomePage/logo-gopay.png' alt='gopay'/>
                          </div>
                          <div className='brand-border'>
                              <img src='./Asset/HomePage/logo-paypal.png' alt='paypal'/>
                          </div>
                          <div className='brand-border'>
                              <img src='./Asset/HomePage/logo-dana.png' alt='dana'/>
                          </div>
                          <div className='brand-border'>
                              <img src='./Asset/HomePage/logo-bca.png' alt='bca'/>
                          </div>
                          <div className='brand-border'>
                              <img src='./Asset/HomePage/logo-bri.png' alt='bri'/>
                          </div>
                          <div className='brand-border'>
                              <img src='./Asset/HomePage/logo-ovo.png' alt='ovo'/>
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
                          <a href='./OrederPage.html'>
                              <button className='btn-checkout-order'>Prvious step</button>
                          </a>
                      </div>
                      <div>
                          <a href='./OrderHistoryPage.html'>
                              <button className='btn-checkout-order'>Pay your order</button>
                          </a>
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
                            <label for='fistName'>First Name</label>
                            <input type='text' name='fistName' id='fistName' placeholder='Jonas El Rodriguez'/>
                        </div>
                        <div>
                            <label for='email'>Email</label>
                            <input type='text' name='email' id='email' placeholder='jonasrodri123@gmail.com'/>
                        </div>
                        <div>
                            <label for='phone'>Phone Number</label>
                            <input type='text' name='phone' id='phone' placeholder='81445687121'/>
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