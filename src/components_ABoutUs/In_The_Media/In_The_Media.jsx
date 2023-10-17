import React from 'react'
import './in_The_Media.css'
import insta from './../../images_aboutUs/insta.svg'
import fb from './../../images_aboutUs/fb.svg'
import twiter from './../../images_aboutUs/twiter.svg'
import linkdin from './../../images_aboutUs/linkdin.svg'
import Media_Post from './Media_post/Media_Post'

import GoogleMapReact from 'google-map-react';
import indiatoday from './../../images_aboutUs/india_today.png'
import livemint from './../../images_aboutUs/livemint.png'
// import { Swiper } from 'swiper/types'






import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';





const In_The_Media = () => {


       const AnyReactComponent = ({ text }) => <div>{text}</div>;
       const defaultProps = {
              center: {
                     lat: 10.99835602,
                     lng: 77.01502627
              },
              zoom: 11
       };


       return (
              <div>
                     <div className="main_ITM">
                            <div className="ITM">
                                   <h1>In the <span>Media</span></h1>
                                   <div className="media_post_ITM">
                                   <Swiper
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]
            }
            // slidesPerView={6}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              400:{
                slidesPerView:1,
              },
              639: {
                slidesPerView: 2,
              },
              865:{
                slidesPerView:2
              },
              1000:{
                slidesPerView:3
              },
              1500:{
                slidesPerView:3
              },
              1700:{
                slidesPerView:4
              }
            }}
            className="mySwiper"
          >
                                                 {/* <Media_Post logo={livemint} />
                                                 <Media_Post logo={indiatoday} />
                                                 <Media_Post logo={livemint} />
                                                 <Media_Post logo={indiatoday} />
                                                 <Media_Post logo={livemint} /> */}

                                                 <SwiperSlide><Media_Post logo={livemint} /> </SwiperSlide>
                                                 <SwiperSlide><Media_Post logo={indiatoday} /></SwiperSlide>

                                                 <SwiperSlide><Media_Post logo={livemint} /> </SwiperSlide>
                                                 <SwiperSlide><Media_Post logo={indiatoday} /></SwiperSlide>

                                                 <SwiperSlide><Media_Post logo={livemint} /> </SwiperSlide>
                                                 <SwiperSlide><Media_Post logo={indiatoday} /></SwiperSlide>

                                          </Swiper>
                                   </div>
                            </div>
                            <div className="map">
                                   <h1>A step <span>closer</span></h1>
                                   <div>
                                          <div className="map_left">
                                                 <div className="office_ITM">
                                                        <h1>Office</h1>
                                                        <p>Pari Chowk, Greater Noida, Uttar Pradesh 201310, IN</p>
                                                 </div>
                                                 <div className="social_ITM">
                                                        <h1>Social</h1>
                                                        <div className="social_logo_ITM">
                                                               <img src={insta} alt="" />
                                                               <img src={fb} alt="" />
                                                               <img src={twiter} alt="" />
                                                               <img src={linkdin} alt="" />

                                                        </div>

                                                 </div>
                                          </div>
                                          <div className="map_right">
                                                 <GoogleMapReact
                                                        bootstrapURLKeys={{ key: "" }}
                                                        defaultCenter={defaultProps.center}
                                                        defaultZoom={defaultProps.zoom}
                                                 >
                                                        <AnyReactComponent
                                                               lat={59.955413}
                                                               lng={30.337844}
                                                               text="My Marker"
                                                        />
                                                 </GoogleMapReact>
                                          </div>

                                   </div>

                            </div>
                     </div>

              </div>
       )
}

export default In_The_Media
