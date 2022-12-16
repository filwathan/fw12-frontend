import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const ProfilPage = () => {
  return (
    <div className='h-screen'>
        <div> <Header></Header> </div>
        <div className='main-overlay right-more'>
          <div className='left-than-right'>
              <div className='overlay-left'>
                  <div className='tab-page overlay-white'>
                      <a href='./ProfilPage.html'>
                          <div className='tab-page-profil active-tab'>Account Settings</div>
                      </a>
                      <a href='./OrderHistoryPage.html'>
                          <div className='tab-page-profil'>Order History</div>
                      </a>
                </div>
                <div>
                      <form>
                          <div className='information-account overlay-white'>
                              <div>Details Information</div>
                              <div className='br-full'></div>
                              <div className='overlay-details-information'>
                                  <div className='details-information'>
                                      <div>
                                          <label for='fistName'>First Name</label>
                                          <input type='text' name='fistName' id='fistName' placeholder='Write your first name'/>
                                      </div>
                                      <div>
                                          <label for='lastName'>last Name</label>
                                          <input type='text' name='lastName' id='lastName' placeholder='Write your last name'/>
                                      </div>
                                  </div>
                                  <div className='details-information'>                        
                                      <div>
                                          <label for='email'>Email</label>
                                          <input type='text' name='email' id='email' placeholder='Write your email'/>
                                      </div>
                                      <div>
                                          <label for='phone'>Phone Number</label>
                                          <input type='text' name='phone' id='phone' placeholder='Write your phone number'/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className=''>
                              <button className='update-details-information'>Update changes</button>
                          </div>
                      </form>                
                </div>
                <div>
                      <form>
                          <div className='information-account overlay-white'>
                              <div>Account and Privacy</div>
                              <div className='br-full'></div>
                              <div className='overlay-details-information'>
                                  <div className='details-information'>
                                      <div>
                                          <label for='newpassword'>New Password</label>
                                          <input type='password' name='newpassword' id='newpassword' placeholder='Write your password'/>
                                      </div>
                                      <div>
                                          <label for='confirmpassword'>Confirm Password</label>
                                          <input type='password' name='confirmpassword' id='confirmpassword' placeholder='Confirm your password'/>
                                      </div>
                                  </div>                                
                              </div>
                          </div>
                          <div className=''>
                              <button className='update-details-information'>Update changes</button>
                          </div>
                      </form>                
                </div>
              </div>
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
        

        </div>
        
        <div> <Footer></Footer> </div>
    </div>
  )
}

export default ProfilPage