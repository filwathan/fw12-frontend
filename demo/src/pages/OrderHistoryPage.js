import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const OrderHistoryPage = () => {
  return (
    <div className='h-screen'>
        <div> <Header></Header> </div>
        <main className='main-overlay right-more'>
          <div className='left-than-right'>
              <section className='overlay-left'>
                  <div className='tab-page overlay-white'>
                      <a href='./ProfilPage.html'>
                          <div className='tab-page-profil'>Account Settings</div>
                      </a>
                      <a href='./OrderHistoryPage.html'>
                          <div className='tab-page-profil'>Order History</div>
                      </a>
                  </div>
                  <div className='history-order overlay-white-br'>
                      <div className='padding-nonbr history-film'>
                          <div>
                              <div>Tuesday, 07 July 2020 - 04:30pm</div>
                              <div>Spider-Man: Homecoming</div>
                          </div>
                          <div>
                              <img src='./Asset/HomePage/logo-cineone21.png' alt='cineone21'/>
                          </div>
                      </div>                   
                      <div className='br-full'></div>                   
                      <div className='padding-nonbr btn-history'>
                          <div>
                              <a href='./TicketResult.html'>
                                  <button className='btn-history-active'>Ticket in active</button>
                              </a>
                          </div>
                          <div><a href='#'>See Details</a></div>
                      </div>                   
                  </div>                
                  <div className='history-order overlay-white-br'>
                      <div className='padding-nonbr history-film'>
                          <div>
                              <div>Monday, 14 June 2020 - 02:00pm</div>
                              <div>Avengers: End Game</div>
                          </div>
                          <div>
                              <img src='./Asset/HomePage/logo-ebuid.png' alt='ebuid'/>
                          </div>
                      </div>                   
                      <div className='br-full'></div>                   
                      <div className='padding-nonbr btn-history'>
                          <div>
                              <a href='./TicketResultUsed.html'>
                                  <button className='btn-history-active non-active'>Ticket used</button>
                              </a>
                          </div>
                          <div><a href='#'>See Details</a></div>
                      </div>                   
                  </div>
                  <div className='history-order overlay-white-br'>
                      <div className='padding-nonbr history-film'>
                          <div>
                              <div>Monday, 10 March 2020 - 04:00pm</div>
                              <div>Thor: Ragnarok</div>
                          </div>
                          <div>
                              <img src='./Asset/HomePage/logo-cineone21.png' alt='cineone21'/>
                          </div>
                      </div>                   
                      <div className='br-full'></div>                   
                      <div className='padding-nonbr btn-history'>
                          <div>
                              <a href='./TicketResultExpired.html'>
                                  <button className='btn-history-active non-active'>Ticket Expired</button>
                              </a>
                          </div>
                          <div><a href='#'>See Details</a></div>
                      </div>                   
                  </div>
              </section>
          </div>
          <div className='right-than-left right-more'>
              <section className='overlay-right'>                
                  <div className='side-profil overlay-white-br'>
                      <div>INFO</div>
                      <div className='profil-info'>
                          <div>
                              <img src='./Asset/HomePage/profil-nav-bar.png' alt='profil'/>
                          </div>
                          <div>Jonas El Rodriguez</div>
                          <div>Moviegoers</div>
                      </div>
                      <div className='br-full'></div>
                      <div className='profil-btn-logout'>
                          <div>
                              <button className='btn-logout'>Logout</button>
                          </div>
                      </div>
                  </div>                    
              </section>
          </div>
          

      </main>        
        <div> <Footer></Footer> </div>
    </div>
  )
}

export default OrderHistoryPage