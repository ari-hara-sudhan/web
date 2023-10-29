import React from 'react';
import Heading from '../../common/Heading';
import PriceCard from './PriceCard';
import './price.css';

function Price() {
  return (
    <>
    <section className='price padding'>
      <div className='container'>
        <Heading title = 'Select Your Package' 
        subtitle = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui 
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores' />
      </div>
      <PriceCard />
    </section>
    </>
  )
}

export default Price