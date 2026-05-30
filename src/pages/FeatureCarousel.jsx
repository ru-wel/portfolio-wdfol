import { useCallback, useEffect, useRef, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import '../assets/styles/FeatureCarousel.scss';

const FeatureCarousel = ({ features }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isTransitioningRef = useRef(false);
  const screenshots = features.screenshots;
  const slideCount = screenshots.length;

  const beginTransition = useCallback((getNextIndex) => {
    if (isTransitioningRef.current || slideCount <= 1) {
      return;
    }

    isTransitioningRef.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => getNextIndex(prevIndex));
  }, [slideCount]);

  const nextSlide = useCallback(() => {
    beginTransition((prevIndex) => (prevIndex === slideCount - 1 ? 0 : prevIndex + 1));
  }, [beginTransition, slideCount]);

  const prevSlide = useCallback(() => {
    beginTransition((prevIndex) => (prevIndex === 0 ? slideCount - 1 : prevIndex - 1));
  }, [beginTransition, slideCount]);

  const goToSlide = useCallback((index) => {
    if (index === currentIndex) {
      return;
    }

    beginTransition(() => index);
  }, [beginTransition, currentIndex]);

  useEffect(() => {
    if (!isTransitioning) {
      return undefined;
    }

    const timer = setTimeout(() => {
      isTransitioningRef.current = false;
      setIsTransitioning(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [isTransitioning]);

  useEffect(() => {
    if (slideCount <= 1) {
      return undefined;
    }

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide, slideCount]);

  return (
    <div className="feature-carousel">
      <div className="feature-carousel__content">
        <div className="feature-carousel__slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }} >
          {screenshots.map((feature, index) => (
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
          {screenshots.map((_, index) => (
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
