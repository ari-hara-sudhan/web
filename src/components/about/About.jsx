import React from 'react';
import './about.css';
import Back from '../common/Back';
import img from "../images/about.jpg"
import Heading from '../common/Heading';

function About() {
  return (
    <>
      <section className='about'>
        <Back name="About Us" title="About Us - Who We Are?" cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />
            

            <button className='btn2'>More About Us</button>

          </div>
          <div className='right row'>
            <img src='./immio1.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About