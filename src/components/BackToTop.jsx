import React from 'react';

const BackToTop = ({ scrollToTop }) => {

  return (
    <div className={`back-to-top`} >
      <button id="back-to-top-btn" onClick={scrollToTop}>
        ↑
      </button>
      <div className='flex-basis'></div>
      <p>Back to top</p>
    </div>
  );
};

export default BackToTop;
