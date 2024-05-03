import React, { useEffect, useState } from 'react'
import { IoHome } from "react-icons/io5";
import './contact.css';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  
  return (
    <div className='app__contact' id="contact" >
      <div className='app__contact-outer'>
        <center>   <h4 className='app__contact-subtitle' > Get In Touch! </h4> </center>
        <center>   <h4 className='app__contact-title' > Leave a meassage and I'll respond as soon as I can </h4> </center>

        <div className='app__contact-whole'>
          <div className='app__contact-first'>

            <div className='app__contact-location'>

              <div className='app__reacticons'>
                <IoHome style={{ color: "#7f5539" }} className='home_icon' />
              </div>
              <div className='inner__elements'>
                <div className='app__contact-info'>
                  <p style={{ fontWeight: "normal", letterSpacing: 1 }} className='app__contact_info'> Location </p>
                  <p className='app__contact-location_info'> Bangalore,Karnataka </p>
                </div>
              </div>
            </div>

            <div className='app__contact-phone'>

              <div className='app__reacticons'>
                <FaPhoneAlt style={{ color: "#7f5539" }} className='icon' />
              </div>
              <div className='inner__elements'>
                <div className='app__contact-info'>
                  <p style={{ fontWeight: "normal", letterSpacing: 1 }} className='app__contact_info1'> Phone no. </p>
                  <p className='app__contact-phone_info'> 9894930655 </p>
                </div>
              </div>
            </div>



          </div>


          <div className='app__contact-second'>
            <div className='app__contact-email'>

              <div className='app__reacticons'>
                <MdEmail style={{ color: "#7f5539" }} className='email_icon' />
              </div><div className='inner__elements'>
                <div className='app__contact-info'>
                  <p style={{ fontWeight: "normal", letterSpacing: 1 }} className='app__contact_email-info'> Email </p>
                  <p className='app__contact-email_infoo'> madhushree2232002@gmail.com </p>

                </div>
              </div>
            </div>

            <div className='linkedin'>
              <div className='app__contact-linkedin'>
                <div className='app__reacticons'>

                  <FaLinkedin style={{ color: "#7f5539" }} className='linked_icon' />
                </div>
                <div className='inner__elements'>
                  <div className='app__contact-info'>
                    <p style={{ fontWeight: "normal", letterSpacing: 1 }} className='app__contact_linked-info'> Linked_in </p>
                    <p className='app__contact-linked_infoo'> <a href="https://in.linkedin.com/in/madhushrees22" target='blank'> www.linkedin.com/in/madhushrees22</a> </p>

                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Contact