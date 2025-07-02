import React, { useEffect, useState, useCallback } from 'react';
import '../Css/Imageslidegreen.css';

function ImageSliderGreen() {
  const imgs = [
    { id: 0, value: '../images/1.jpg' },
    { id: 1, value: '../images/3.jpg' },
    { id: 2, value: '../images/4.jpg' },
    { id: 3, value: '../images/5.jpg' },
  ];
  const [val, setVal] = useState(0);

  const handleNext = useCallback(() => {
    const index = val < imgs.length - 1 ? val + 1 : 0; // Loop back to the first image.
    setVal(index);
  }, [val, imgs.length]);

  const handlePrev = useCallback(() => {
    const index = val > 0 ? val - 1 : imgs.length - 1; // Loop back to the last image.
    setVal(index);
  }, [val, imgs.length]);

  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [handleNext]);

  return (
    <div className="main">
      {imgs[val] && imgs[val].type === 'video/mp4' ? (
        <video className="slidevideo" autoPlay loop muted>
          <source src={imgs[val].value} type="video/mp4" />
        </video>
      ) : (
        <img className="slideimg" src={imgs[val].value} alt="Eco-friendly carousel" />
      )}

      <div className="slider-controls">
        <button onClick={handlePrev} className="prev-buttong">
          <img className="arrowg" src="../images/prev.png" alt="Previous"/> 
        </button>
        <button onClick={handleNext} className="next-buttong">
          <img className="arrowg" src="../images/next.png" alt="Next"/>
        </button>
      </div>
    </div>
  );
}

export default ImageSliderGreen;