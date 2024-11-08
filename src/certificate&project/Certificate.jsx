import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './certificate.css';
import images from '../Constants/images'


function CarouselFadeExample() {
    return (
        <div className='app__certificate' id='certificate' >
            <div className='certpro'>
                <div className='app__certificate-alone' >    <h2> <center>Certificates</center></h2>
                    <div className='app__certificate__'>

                        <Carousel fade interval={2000} pause="false">
                            <Carousel.Item className='item'>
                                <img src={images.java} height={500} width={800} className='img' />

                                <Carousel.Caption className='caption'>
                                    <p className="caption">
                                        SKILLS: Java | Sql | Web Technology | React js
                                    </p>
                                    <button className='custom__buttonn' onClick={(e) => {
                                        e.preventDefault();
                                        window.open('https://drive.google.com/file/d/1KQqscczNu5fhA3ozQ9murlEYL0TQIN-F/view?usp=sharing', '_blank')
                                    }}>View Certificate! </button>
                                </Carousel.Caption>
                            </Carousel.Item>



                            <Carousel.Item className='item'>
                                <img src={images.acc_java_js} height={500} width={800} className='img' />

                                <Carousel.Caption className='caption'>
                                    <p className="caption">
                                        <p className='job_sim'> Coding:	Development	& Advanced Engineering Job Simulation ( Accenture ) </p> <br></br>
                                        SKILLS: Object Oriented Programming | Code Refactoring | Continuous Integration | Agile	Planning
                                    </p>
                                    <button className='custom__buttonn' onClick={(e) => {
                                        e.preventDefault();
                                        window.open('https://drive.google.com/file/d/1BoJpUBBm9FnykPvaqi0EErhU-dOpeg2i/view?usp=drive_link', '_blank')
                                    }}>View Certificate! </button>
                                </Carousel.Caption>
                            </Carousel.Item>


                            <Carousel.Item className='item'>
                                <img src={images.acc_prdt_js} height={500} width={800} className='img' />

                                <Carousel.Caption className='caption'>
                                    <p className="caption">
                                        <p className='job_sim'>  Product	Design	Job	Simulation ( Accenture ) </p><br />
                                        SKILLS: Product Design | Design Rationale
                                    </p>
                                    <button className='custom__buttonn' onClick={(e) => {
                                        e.preventDefault();
                                        window.open('https://drive.google.com/file/d/1K3xtkkw9tjtGuECnHhq--F7VWX0hTbWt/view?usp=drive_link', '_blank')
                                    }}>View Certificate! </button>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item className='item'>
                                <img src={images.bp_prdt_js} height={500} width={800} className='img' />

                                <Carousel.Caption className='caption'>
                                    <p className="caption">
                                        <p className='job_sim'>   Digital	Design	&	UX	Job	Simulation ( bp ) </p><br />
                                        SKILLS: Personas for User Research | Wireframing | High-Fidelity Designs | Prototyping
                                    </p>
                                    <button className='custom__buttonn' onClick={(e) => {
                                        e.preventDefault();
                                        window.open('https://drive.google.com/file/d/1K3xtkkw9tjtGuECnHhq--F7VWX0hTbWt/view?usp=drive_link', '_blank')
                                    }}>View Certificate! </button>
                                </Carousel.Caption>
                            </Carousel.Item>


                            <Carousel.Item className='item'>
                                <img src={images.web_design} height={500} width={800} className='img' />
                                <Carousel.Caption className='caption'>
                                    {/* <h3>Third slide label</h3> */}
                                    <p className="caption" >
                                        SKILLS: HTML| CSS
                                    </p>
                                    <button className='custom__buttonn' onClick={(e) => {
                                        e.preventDefault();
                                        window.open('https://drive.google.com/file/d/12nNZz92fRUPda4DYUjJxub3ua24G0tlM/view?usp=drive_link', '_blank')
                                    }}>View Certificate! </button>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item className='item'>
                                <img src={images.html} height={500} width={800} className='img' />
                                <Carousel.Caption className='caption'>
                                    {/* <h3>Third slide label</h3> */}
                                    <p className="caption">
                                        SKILLS: HTML5
                                    </p>
                                    <button className='custom__buttonn' onClick={(e) => {
                                        e.preventDefault();
                                        window.open('https://drive.google.com/file/d/12wt7CB8bREQbfbZL680AmNKBmpvfz2KD/view?usp=sharing', '_blank')
                                    }}>View Certificate! </button>
                                </Carousel.Caption>
                            </Carousel.Item>


                            <Carousel.Item className='item'>
                                <img src={images.css} height={500} width={800} className='img' />
                                <Carousel.Caption className='caption'>
                                    {/* <h3>Third slide label</h3> */}
                                    <p className="caption">
                                        SKILLS: CSS3
                                    </p>
                                    <button className='custom__buttonn' onClick={(e) => {
                                        e.preventDefault();
                                        window.open('https://drive.google.com/file/d/1MTfmNeUUpB5v4OZ5aw2Na-jxP-HTc5Zp/view?usp=sharing', '_blank')
                                    }}>View Certificate! </button>
                                </Carousel.Caption>
                            </Carousel.Item>


                            <Carousel.Item className='item'>
                                <img src={images.angular} height={500} width={800} className='img' />
                                <Carousel.Caption className='caption'>
                                    {/* <h3>Third slide label</h3> */}
                                    <p className="caption">
                                        SKILLS: Angular Js | Angular7
                                    </p>
                                    <button className='custom__buttonn' onClick={(e) => {
                                        e.preventDefault();
                                        window.open('https://drive.google.com/file/d/1HEww5JHFEnXsWSRZ5XR-grD81EKC7oH5/view?usp=sharing', '_blank')
                                    }}>View Certificate! </button>
                                </Carousel.Caption>
                            </Carousel.Item>


                            <Carousel.Item className='item'>
                                <img src={images.ui} height={500} width={800} className='img' />
                                <Carousel.Caption className='caption'>
                                    {/* <h3>Third slide label</h3> */}
                                    <p className="caption">
                                        SKILLS: User Experience | User Interface
                                    </p>
                                    <button className='custom__buttonn' onClick={(e) => {
                                        e.preventDefault();
                                        window.open('https://drive.google.com/file/d/1u_Os14P3Lq-FBvBKVViwe6EPw4t0Nbi6/view?usp=sharing', '_blank')
                                    }}>View Certificate! </button>
                                </Carousel.Caption>
                            </Carousel.Item>


                            <Carousel.Item className='item'>
                                <img src={images.sql} height={500} width={800} className='img' />
                                <Carousel.Caption className='caption'>
                                    {/* <h3>Third slide label</h3> */}
                                    <p className="caption">
                                        SKILLS: SQL Database
                                    </p>
                                    <button className='custom__buttonn' onClick={(e) => {
                                        e.preventDefault();
                                        window.open('https://drive.google.com/file/d/1TIhvvCuZrhgzEljf_OCI_oUF0IsvqMxz/view?usp=sharing', '_blank')
                                    }}>View Certificate! </button>
                                </Carousel.Caption>
                            </Carousel.Item>


                            <Carousel.Item className='item'>
                                <img src={images.virtual} height={500} width={800} className='img' />
                                <Carousel.Caption className='caption'>
                                    {/* <h3>Third slide label</h3> */}
                                    <p className="caption">
                                        <p className='job_sim'> Developer Virtual Experience Program ( Accenture )</p> <br />
                                        SKILLS: Software Development LifeCycle (SDLC) | Debugging algorithms
                                    </p>
                                    <button className='custom__buttonn' onClick={(e) => {
                                        e.preventDefault();
                                        window.open('https://drive.google.com/file/d/14Yn5w6sjqtpIT6dnOrkMx7BO5zuNSWam/view?usp=sharing', '_blank')
                                    }}>View Certificate! </button>
                                </Carousel.Caption>
                            </Carousel.Item>


                            <Carousel.Item className='item'>
                                <img src={images.cloud} height={500} width={800} className='img' />
                                <Carousel.Caption className='caption'>
                                    {/* <h3>Third slide label</h3> */}
                                    <p className="caption">
                                        SKILLS: Cloud Computing Basics (cloud 101)
                                    </p>
                                    <button className='custom__buttonn' onClick={(e) => {
                                        e.preventDefault();
                                        window.open('https://drive.google.com/file/d/14Yn5w6sjqtpIT6dnOrkMx7BO5zuNSWam/view?usp=sharing', '_blank')
                                    }}>View Certificate! </button>
                                </Carousel.Caption>
                            </Carousel.Item>



                        </Carousel>

                    </div>
                </div>

                <div className='app__projects' >
                    <h2>Projects</h2>
                    <div className='app__project__'>

                        <Carousel fade interval={2000} pause="false">
                            <Carousel.Item className='item'>
                                <img src={images.show} height={500} width={800} className='img2' />

                                <Carousel.Caption className='caption'>
                                    <p className="headingg">
                                        Show_booking Clone ( back-end )
                                        <p> Using SpringBoot</p>
                                    </p>

                                    <button className='custom__buttonn' onClick={(e) => {
                                        e.preventDefault();
                                        window.open('https://github.com/Madhushree22/ShowBooking_clone-back-end.git', '_blank')
                                    }}>Source Code!  </button>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item className='item'>
                                <img src={images.travel} height={500} width={800} className='img2' />

                                <Carousel.Caption className='caption'>

                                    <p className="headingg">
                                        Travelling_landing Page ( front-end )
                                        <p> Using React Js</p>
                                    </p>
                                    <button className='custom__buttonn' onClick={(e) => {
                                        e.preventDefault();
                                        window.open('https://github.com/Madhushree22/Landing_Page-travelling-.git', '_blank')
                                    }}>Source Code! </button>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item className='item'>
                                <img src={images.task_manager} height={500} width={800} className='img2' />

                                <Carousel.Caption className='caption'>

                                    <p className="headingg">
                                        Task_Manager ( Website )
                                        <p> Using React Js</p>
                                    </p>
                                    <button className='custom__buttonn' onClick={(e) => {
                                        e.preventDefault();
                                        window.open('https://github.com/Madhushree22/Task_Manager.git', '_blank')
                                    }}>Source Code! </button>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item className='item'>
                                <img src={images.chat_media} height={500} width={800} className='img2' />

                                <Carousel.Caption className='caption'>

                                    <p className="headingg">
                                        Snap_Media (Social media website)
                                        <p> Using Vite | React Js| Type Js</p>
                                    </p>
                                    <button className='custom__buttonn' onClick={(e) => {
                                        e.preventDefault();
                                        window.open('https://github.com/Madhushree22/Snap_media.git', '_blank')
                                    }}>Source Code! </button>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item className='item'>
                                <img src={images.payment_integration} height={500} width={800} className='img2' />

                                <Carousel.Caption className='caption'>

                                    <p className="headingg">
                                        Payment_Integration Project
                                        <p> Using Java Spring boot framework</p>
                                    </p>
                                    <button className='custom__buttonn' >
                                        Internship Project! </button>
                                </Carousel.Caption>
                            </Carousel.Item>



                        </Carousel>

                    </div>
                </div>
            </div>
        </div>


    );
}

export default CarouselFadeExample;
