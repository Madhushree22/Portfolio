import React from 'react'
import './home.css';
import madhu from '../Assets/madhu_rbg1.jpg'
import { CiLinkedin } from "react-icons/ci";
import { FaSquareGithub } from "react-icons/fa6";
import Typewriter from 'typewriter-effect';


const Home = () => {
  return (
    <div className='app'>
      <div className="app__home" id="home" >

        <div className='app__homee__'>
          <div className='app__home__'>
            <div className='app__home-conatiner'>
              <div className="home" id="home">

                <div className='app__home-info'>
                  <pre>
                    <h2><b>HELLO EVERYONE,</b></h2>
                    {/* <h3><b>I'M MADHUSHREE S</b></h3> */}

                    <div >
                      <Typewriter 
                        onInit={(typewriter) => {
                          typewriter
                            .pause(500)
                            .typeString(" I'M MADHUSHREE S ")
                            .pauseFor(1000)
                            .start()
                          
                        }}
                      />
                    </div>
                    {/* <div className='type'>
                      <Typewriter className="type"
                        onInit={(typewriter) => {
                          typewriter
                            .typeString(" BCA Graduate ")
                            .pauseFor(1000)
                            //.deleteAll()
                            .typeString("& Java Full Stack Developer")
                            .start()
                        }}
                      />
                    </div> */}
                    <div className='border'>
                    <h4 className='type'>BCA Graduate and Java Full Stack Developer </h4>
                    </div>
                  </pre>
                  <button
                    type="button"
                    className='custom__button'
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('https://drive.google.com/file/d/1SGRAMKuRHksOENj-xnqMKUY8iO8T_J0L/view?usp=sharing', '_blank')
                    }}
                  > Dowload CV</button>
                </div>

                <div className='app__home-img'>
                  <div className='app__home-img-containner'>
                    <img src={madhu} height={300} width={300} />
                  </div>
                </div>
              </div>
            </div>

            <div className='home__footer'>
              <div className='home__footer-icons'>
                <a href="https://in.linkedin.com/in/madhushrees22" target='blank'><CiLinkedin className='home__footer-linkedin' style={{ color: "#7f5539" }} /></a>
                <a href="https://github.com/Madhushree22" target='blank'><FaSquareGithub className='home__footer-github' style={{ color: "#7f5539" }} /></a>

              </div>
            </div>



          </div>
        </div>
      </div>
    </div>


  )
}

export default Home;