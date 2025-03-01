import React, { useState, useEffect } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import '../assets/styles/FeatureCarousel.scss';
import 'react-photo-view/dist/react-photo-view.css';

const FeatureCarousel = ({ features }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex === features.screenshots.length - 1 ? 0 : prevIndex + 1));
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? features.screenshots.length - 1 : prevIndex - 1));
    }
  };

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="feature-carousel">
      <div className="feature-carousel__content">
        <div className="feature-carousel__slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }} >
          {features.screenshots.map((feature, index) => (
            <div className="feature-carousel__slide" key={index}>
              <div className="feature-spotlight">
                <div>
                  <div className="feature-spotlight__image">
                    <PhotoProvider maskOpacity={0.5}>
                      <PhotoView key={index} src={feature}>
                        <img src={feature} alt={feature} height={'320px'}/>
                      </PhotoView>
                    </PhotoProvider>
                  </div>
                  <p className="feature-spotlight__note">*click the image to preview</p>
                </div>
                <div className="feature-spotlight__content">
                  <h3 className="feature-spotlight__title">{features.features[index]}</h3>
                  <p className="feature-spotlight__description">{features.featureDescription[index]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="feature-carousel__controls">
        <button className="feature-carousel__arrow feature-carousel__arrow--prev" onClick={prevSlide}> &#8592; </button>
        
        <div className="feature-carousel__indicators">
          {features.screenshots.map((_, index) => (
            <button key={index} className={`feature-carousel__indicator ${index === currentIndex ? 'active' : ''}`} onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        
        <button className="feature-carousel__arrow feature-carousel__arrow--next" onClick={nextSlide}> &#8594; </button>
      </div>
    </div>
  );
};

export default FeatureCarousel;