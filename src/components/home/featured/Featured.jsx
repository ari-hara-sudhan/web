import React from 'react';
import Heading from '../../common/Heading';
import FeaturedCard from './FeaturedCard';
import './Featured.css';

function Featured() {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured