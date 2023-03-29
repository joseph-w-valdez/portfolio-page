import React from 'react';

const BackToTop = ({ scrollToTop }) => {

  return (
    <div className={`back-to-top`} onClick={scrollToTop}>
      <button id="back-to-top-btn" >
        ↑
      </button>
      <div className='flex-basis'></div>
      <p>Back to top</p>
    </div>
  );
};

export default BackToTop;
