import React, { useEffect, useState } from 'react'
import './skills.css'
const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 100); // Example: Trigger animation when scrolled 100px down
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className='skill_'>
      <div className='skills' id='skills'>
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <h2>Skills I Owe!!</h2>
        </div>
     <div className='animations'>
          <div class="loader">
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__ball"></div>
          </div>
     </div>
        <div className='app__skillss'>
          <div className='skills__subjects'>
            <div className='small_list-1'>
              <div className='skills__subjects-list1'>
                <div className='skills__subject-java'>
                  <label for="java" className='sub1'>JAVA</label>
                  <progress className="java" value="80" max="100"></progress>
                  <span style={{ color: " #7f5539" }}> 80%</span>
                </div>
                <div className='skills__subject-java'>
                  <label for="java" className='sub2'>SERVLET</label>
                  <progress className="java" value="50" max="100"></progress>
                  <span style={{ color: " #7f5539" }}> 50%</span>
                </div>
                <div className='skills__subject-java'>
                  <label for="java" className='sub3'>JDBC</label>
                  <progress className="java" value="50" max="100"></progress>
                  <span style={{ color: " #7f5539" }}> 50%</span>
                </div>
              </div>
              <div className='skills__subjects-list2'>
                <div className='skills__subject-java'>
                  <label for="java" className='sub4'>HIBERNATE</label>
                  <progress className="java" value="70" max="100"></progress>
                  <span style={{ color: " #7f5539" }}> 70%</span>
                </div>
                <div className='skills__subject-java'>
                  <label for="java" className='sub5'>SPRING</label>
                  <progress className="java" value="80" max="100"></progress>
                  <span style={{ color: " #7f5539" }}> 80%</span>
                </div>
                <div className='skills__subject-java'>
                  <label for="java" className='sub6'>C++</label>
                  <progress className="java" value="90" max="100"></progress>
                  <span style={{ color: " #7f5539" }}> 90%</span>
                </div>
              </div>
            </div>
            <div className='small_list-2'>
              <div className='skills__subjects-list3'>
                <div className='skills__subject-java'>
                  <label for="java" className='sub7'>SQL</label>
                  <progress className="java" value="90" max="100"></progress>
                  <span style={{ color: " #7f5539" }}> 90%</span>
                </div>
                <div className='skills__subject-java'>
                  <label for="java" className='sub8'>ORACLE</label>
                  <progress className="java" value="90" max="100"></progress>
                  <span style={{ color: " #7f5539" }}> 90%</span>
                </div>
                <div className='skills__subject-java'>
                  <label for="java" className='sub9'>GITHUB</label>
                  <progress className="java" value="80" max="100"></progress>
                  <span style={{ color: " #7f5539" }}> 80%</span>
                </div>
              </div>
              <div className='skills__subjects-list4'>
                <div className='skills__subject-java'>
                  <label for="java" className='sub10'>HTML</label>
                  <progress className="java" value="98" max="100"></progress>
                  <span style={{ color: " #7f5539" }}> 98%</span>
                </div>
                <div className='skills__subject-java'>
                  <label for="java" className='sub11'>CSS</label>
                  <progress className="java" value="98" max="100"></progress>
                  <span style={{ color: " #7f5539" }}> 98%</span>
                </div>
                <div className='skills__subject-java'>
                  <label for="java" className='sub12'>JAVA SCRIPT</label>
                  <progress className="java" value="70" max="100"></progress>
                  <span style={{ color: " #7f5539" }}> 70%</span>
                </div>
              </div>
            </div>
            <div className='small_list-3'>
              <div className='skills__subjects-list5'>
                <div className='skills__subject-java'>
                  <label for="java" className='sub13'>.XML</label>
                  <progress className="java" value="80" max="100"></progress>
                  <span style={{ color: " #7f5539" }}> 80%</span>
                </div>
                <div className='skills__subject-java'>
                  <label for="java" className='sub14'>REACT JS</label>
                  <progress className="java" value="60" max="100"></progress>
                  <span style={{ color: " #7f5539" }}> 60%</span>
                </div>
                <div className='skills__subject-java'>
                  <label for="java" className='sub15'>BOOTSTRAP</label>
                  <progress className="java" value="80" max="100"></progress>
                  <span style={{ color: " #7f5539" }}> 80%</span>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills