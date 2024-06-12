import React from 'react'
import './home.css';
import madhu from '../Assets/madhu.png'
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

                    {/* <div >
                      <Typewriter
                        onInit={(typewriter) => {
                          typewriter
                            .pause(500)
                            .typeString(" I'M MADHUSHREE S ")
                            .pauseFor(1000)
                            .start()

                        }}
                      />
                    </div> */}



                    <button class="button" data-text="Awesome">
                      <span class="actual-text">&nbsp;Madhushree S&nbsp;</span>
                      <span aria-hidden="true" class="hover-text">&nbsp;Madhushree S&nbsp;</span>
                    </button>


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

                  {/* <button
                    type="button"
                    className='custom__button'
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('https://drive.google.com/file/d/1SGRAMKuRHksOENj-xnqMKUY8iO8T_J0L/view?usp=sharing', '_blank')
                    }}
                  > Dowload CV</button> */}


                  <button class="download-button">
                    <div class="docs"> Dowload CV</div>
                    <div class="download" onClick={(e) => {
                      e.preventDefault();
                      window.open('https://drive.google.com/file/d/1SGRAMKuRHksOENj-xnqMKUY8iO8T_J0L/view?usp=sharing', '_blank')
                    }}>
                      <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24" color='white'><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line y2="3" x2="12" y1="15" x1="12"></line></svg>
                    </div>
                  </button>
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