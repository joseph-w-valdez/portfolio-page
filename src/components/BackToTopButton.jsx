import React from 'react';

const BackToTop = ({ scrollToTop }) => {

  return (
    <nav className={`back-to-top`} onClick={scrollToTop}>
      <span role="button" aria-label="Back to Top" tabindex="0">
        <button id="back-to-top-btn">
          ↑
        </button>
        <div className='flex-basis'></div>
        <p>Back to top</p>
      </span>
    </nav>
  );
};

export default BackToTop;