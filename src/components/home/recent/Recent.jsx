import React from 'react';
import Heading from '../../common/Heading';
import './recent.css';
import RecentCard from './RecentCard';

function Recent() {
  return (
    <>
    <section className='recent padding'>
      <div className='container'>
     
        <RecentCard />
      </div>
    </section>
    </>
  )
}

export default Recent