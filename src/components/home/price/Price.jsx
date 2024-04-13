import React from 'react';
import Heading from '../../common/Heading';
import PriceCard from './PriceCard';
import './price.css';

function Price() {
  return (
    <>
    <section className='price padding'>
      <div className='container'>
        <Heading title = 'Select Your Package'  />
      </div>
      <PriceCard />
    </section>
    </>
  )
}

export default Price