import { useCallback, useEffect, useRef, useState } from 'react';
import { PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import '../assets/styles/FeatureCarousel.scss';

// Must match the `transition` duration on .feature-carousel__slides.
const SLIDE_MS = 450;

const FeatureCarousel = ({ features }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  // Hover and focus are tracked apart: pulling the mouse away must not
  // restart autoplay while the keyboard is still inside the controls.
  const [isHovered, setIsHovered] = useState(false);
  const [isFocusWithin, setIsFocusWithin] = useState(false);
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
    }, SLIDE_MS);

    return () => clearTimeout(timer);
  }, [isTransitioning]);

  useEffect(() => {
    // Autoplay stops while the reader is hovering, focused inside, or has
    // asked the OS for reduced motion.
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (slideCount <= 1 || isHovered || isFocusWithin || prefersReducedMotion) {
      return undefined;
    }

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide, slideCount, isHovered, isFocusWithin]);

  return (
    <div
      className="feature-carousel"
      role="group"
      aria-roledescription="carousel"
      aria-label={`${features.title} feature screenshots`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocusWithin(true)}
      onBlurCapture={() => setIsFocusWithin(false)}
    >
      <div className="feature-carousel__content">
        <div className="feature-carousel__slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }} >
          {screenshots.map((feature, index) => (
            <div
              className="feature-carousel__slide"
              key={feature}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slideCount}: ${features.features[index]}`}
              aria-hidden={index !== currentIndex}
            >
              <div className="feature-spotlight">
                <div>
                  <div className="feature-spotlight__image">
                    <PhotoView key={feature} src={feature}>
                      <img
                        src={feature}
                        alt={`${features.title}: ${features.features[index]}`}
                        loading="lazy"
                      />
                    </PhotoView>
                  </div>
                  <p className="feature-spotlight__note">Click the image to preview it full size.</p>
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
        <button type="button" className="feature-carousel__arrow feature-carousel__arrow--prev" onClick={prevSlide} aria-label="Previous feature"> &#8592; </button>

        <div className="feature-carousel__indicators">
          {screenshots.map((shot, index) => (
            <button
              key={shot}
              type="button"
              className={`feature-carousel__indicator ${index === currentIndex ? 'active' : ''}`}
              aria-label={`Go to feature ${index + 1}: ${features.features[index]}`}
              aria-current={index === currentIndex}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <button type="button" className="feature-carousel__arrow feature-carousel__arrow--next" onClick={nextSlide} aria-label="Next feature"> &#8594; </button>
      </div>
    </div>
  );
};

export default FeatureCarousel;
