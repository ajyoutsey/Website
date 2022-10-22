import React from 'react';
import './App.css';

function App() {
  return (
    <div className='view'>
      <div className='name'>
        Alex Youtsey
      </div>
      <div className='content'>
        <div className='education'>
          <div className='education-header'>Education</div>
          <div className='education-content'>
            <div className='col'>
              University of Illinois Urbana-Champaign 
              <br/>
              B.S. in Computer Science and Economics
            </div>
            <div className='col'>
              August 2019 - May 2023
            </div>
          </div>
        </div>
        <div className='experience'>
          <div className='experience-header'>Experience</div>
          <div className='experience-content'>
            <div className='col'>
              Amazon Pharmacy
              <br/>
              Software Development Engineer Intern
            </div>
            <div className='col'>
              August 2022 - November 2022
            </div>
          </div>
          <div className='experience-content'>
            <div className='col'>
              b.well Connected Health
              <br/>
              Data Engineering Intern
            </div>
            <div className='col'>
              June 2021 - August 2021
            </div>
          </div>
        </div>
        <div className='projects'>
          <div className='projects-header'>Projects</div>
          <p>
            Sequence
          </p>
          <p>
            Real Estate Buddy
          </p>
          <p>
            Pokedex
          </p>
        </div>
        <div className='skills'>
          <div className='skills-header'>Skills</div>
          <ul>
            <li>C++</li>
            <li>Java</li>
            <li>TypeScript</li>
            <li>Git</li>
            <li>Linux/Unix</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
