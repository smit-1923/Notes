import React from 'react';
import './HeroSection.css';

function Home() {
  return (
    <>
      <div
        className='home__hero-section darkBg'
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: 'start'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>EASY SETUP</div>
                <h1 className='heading'>
                Gather your thoughts, then make them even better
                </h1>
                <p
                  className='home__hero-subtitle'
                >
                  Quickly capture what’s on your mind and get a reminder later at the right place or time. Great minds don’t always think alike, but they can share ideas and create together in Keeper.
                </p>
                
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src='images/product.png' alt='Keep Notes' className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
