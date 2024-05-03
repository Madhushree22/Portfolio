import React, { useEffect } from 'react'
import './about.css'
import { SlCalender } from "react-icons/sl";
import { RiSuitcaseFill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [slide, setSlide] = useState(false);
  const [isShaking, setIsShaking] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 100); // Example: Trigger animation when scrolled 100px down
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const animate = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 100); // Example: Trigger animation when scrolled 100px down
    };

    window.addEventListener('scroll', animate);
    return () => window.removeEventListener('scroll', animate);
  }, []);


  useEffect(() => {
    const handleSlide = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setSlide(scrollTop > 100); // Example: Trigger animation when scrolled 100px down
    };

    window.addEventListener('scroll', handleSlide);
    return () => window.removeEventListener('scroll', handleSlide);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const icons = document.querySelectorAll('.shaking-icon');

      if (icons.length > 0) {
        const iconTop = icons[0].getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        setIsShaking(iconTop < viewportHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='app__about' id="about">
      <div className='aboutt'>
        <div className='about__heading ' >
          <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
            <h2>About Me!</h2>
          </div>
          <div className='about__title'>
            <div className='about__content'>
              <h3>
                Hello, I'm Madhu!
              </h3><br></br>
              <div className={`slide-in ${slide ? 'slide' : ''}`}>
                <h5 style={{ color: "#fffff", fontSize: "medium" }}>
                  Aspiring | Enthusiastic | Creative
                </h5><br></br>
              </div>

              <div className='about__info-content'>
                <p className='about__first-content'>

                  <div className={`fade-in1 ${isScrolled ? 'visible1' : ''}`}>
                    <span className='about__highlight'>W</span>elcome to my corner of the digital world! I am a <span className='about__highlight'>BCA</span> graduate with a passion as <span className='about__highlight'>FRONTEND DEVELOPER | JAVA FULL STACK DEVELOPER</span>.
                    Excitement courses through my veins as I embark on the journey of translating theoretical knowledge into hands-on experiences.
                    I am here to contribute, learn, and grow. My academic background in <span className='about__highlight'>JAVA | WEB TECHNOLOGY | REACTJS | SQL </span>has equipped me with a solid foundation as a <span className='about__highlight'>DEVELOPER </span> .
                    I am eager to apply this knowledge in a practical setting and take on new challenges that will shape my professional identity.
                  </div>
                </p><br></br>

                <p className='about__second-content'>

                  <div className={`fade-in2 ${isScrolled ? 'visible2' : ''}`}>
                    As I embark on my professional journey, I am excited about the possibilities that lie ahead. I am actively seeking opportunities that allow me to grow, collaborate, and make meaningful contributions.
                    My goal is to not only build a career but to be a part of something bigger, where innovation and creativity thrive.
                    I am actively exploring entry-level opportunities and am open to conversations about how I can contribute to your team. If you are looking for a dedicated, quick learner with a passion for diving into<span className='about__highlight'> IT INDUSTRY </span> as a <span className='about__highlight'>DEVELOPER, </span>I'd love to connect.
                  </div>


                </p><br></br>
              </div>
            </div>
          </div>
        </div>
        <div className='about__heading  second_part' >
          <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
            <h2>Qualifications</h2>
          </div>
          <div className='qualification'>
            <div className='qualification__experience'>
              <div className='qualification__experience-certificate' >
                <h3 className='heading'>
                  <div className={`shaking-icon ${isShaking ? 'shake' : ''}`}>
                    Course</div></h3>
                <h3 className='title'><FaBook className='calender' />Java Full Stack Development</h3>
                <h4 className='title'><GrTechnology className='calender' />Java | Web Technology | Reactjs | Sql </h4>
                <h4 className='place'><MdLocationPin className='calender' />Jspiders, Bangalore, Karantaka.</h4>
                <h4 className='year'><SlCalender className='calender' />March – October 2023</h4>
              </div>
              <div className='qualification__experience-internship'>
                <h3 className='heading'>
                  <div className={`shaking-icon ${isShaking ? 'shake' : ''}`}>
                  Internship</div></h3>
                <h3 className='title'><RiSuitcaseFill className='calender' />Shalom Web Solutions</h3>
                <h4 className='title'><GrTechnology className='calender' />Android Development using JAVA</h4>
                <h4 className='place'><MdLocationPin className='calender' />Coimbatore, Tamilnadu.</h4>
                <h4 className='year'><SlCalender className='calender' />April – May 2022</h4>
              </div>
            </div>
            <div className='qualification__education'>
              <div className='qualification__education-degree'>
                <h3 className='heading'>
                  <div className={`shaking-icon ${isShaking ? 'shake' : ''}`}>
                  Bachelor's of Computer Applications</div></h3>
                <h4 className='title'><FaBook className='calender' />Christ College of Science And Management, </h4>
                <h4 className='place'><MdLocationPin className='calender' />Malur, Karnataka </h4>
                <h4 className='year'><SlCalender className='calender' />June 2019 – November 2022</h4>


              </div>
              <div className='qualification__education-school'>
                <h3 className='heading'>
                  <div className={`shaking-icon ${isShaking ? 'shake' : ''}`}>
                    Senior Secondary School</div></h3>
                <h3 className='title'><FaBook className='calender' />Maharishi Vidya Mandir</h3>
                <h4 className='place'><MdLocationPin className='calender' />Sipcot, Hosur </h4>
                <h4 className='year'><SlCalender className='calender' />July 2004 – May 2019</h4>

              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default About