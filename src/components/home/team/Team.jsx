import React from 'react';
import Heading from '../../common/Heading';
import { team } from '../../data/Data';
import './team.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faLocationDot, faEnvelope, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";

function Team() {
  return (
    <>
    <section className='team background'>
      <div className='container'>
        
        <div className='content mtop grid3'>
          {team.map((val, index) => {
            return (
            <div className='box' key = {index}>
              <button className='btn3'>{val.list}Listings</button>
              <div className='details'>
                <div className='img'>
                  <img src = {val.cover} alt = '' />
                  <i className='fa fa-circle-check'><FontAwesomeIcon icon={faCircleCheck} /></i>
                </div>
                <i className='fa fa-location-dot'><FontAwesomeIcon icon={faLocationDot} /></i>
                <label htmlFor=''>{val.address}</label>
                <h4></h4>
                <ul>
                  {/* {val.icon.map((icon, index) => (
                    <li key={index}>{icon}</li>
                  ))} */}
                </ul>
                <div className='button flex'>
                  <button><i className='fa fa-envelope'><FontAwesomeIcon icon={faEnvelope} /></i>Message</button>
                </div>
                  <button className='btn4'><i className='fa fa-phone-alt'><FontAwesomeIcon icon={faPhoneFlip} className='white-icon' /></i></button>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
    </>
  )
}

export default Team