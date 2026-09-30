import { useCallback, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import Zoomable from './Zoomable';
import 'react-photo-view/dist/react-photo-view.css';
import '../assets/styles/FeatureCarousel.scss';
import Icon from './Icon';

// Must match the `transition` duration on .feature-carousel__slides.
const SLIDE_MS = 450;

const FeatureCarousel = ({ features }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  // Hover and focus are tracked apart: pulling the mouse away must not
  // restart autoplay while the keyboard is still inside the controls.
  const [isHovered, setIsHovered] = useState(false);
  const [isFocusWithin, setIsFocusWithin] = useState(false);
  // An explicit pause the reader controls. Hover and focus pause it only
  // while they last, which a touch or screen-reader user cannot rely on.
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useReducedMotion();
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
    // Autoplay stops while the reader is hovering, focused inside, has
    // pressed pause, or has asked the OS for reduced motion.
    if (slideCount <= 1 || isHovered || isFocusWithin || isPaused || reduceMotion) {
      return undefined;
    }

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide, slideCount, isHovered, isFocusWithin, isPaused, reduceMotion]);

  // Nothing plays on its own under reduced motion, so there is nothing to
  // pause and the button would only be noise.
  const showPlayback = slideCount > 1 && !reduceMotion;

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
              // Off-screen slides now hold a focusable zoom button; inert keeps
              // Tab from landing on an image nobody can see. (React 18 has no
              // boolean inert prop, so it goes through as an empty attribute.)
              inert={index !== currentIndex ? '' : undefined}
            >
              <div className="feature-spotlight">
                <div>
                  <div className="feature-spotlight__image">
                    <Zoomable
                      key={feature}
                      src={feature}
                      alt={`${features.title}: ${features.features[index]}`}
                      sizes="(min-width: 1025px) 760px, 100vw"
                      loading="lazy"
                    />
                  </div>
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
        <button type="button" className="feature-carousel__arrow feature-carousel__arrow--prev" onClick={prevSlide} aria-label="Previous feature"><Icon name="arrow-left" /></button>

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

        <button type="button" className="feature-carousel__arrow feature-carousel__arrow--next" onClick={nextSlide} aria-label="Next feature"><Icon name="arrow-right" /></button>

        {showPlayback && (
          <button
            type="button"
            className="feature-carousel__playback"
            onClick={() => setIsPaused((paused) => !paused)}
          >
            <Icon name={isPaused ? 'play' : 'pause'} />
            {isPaused ? 'Play' : 'Pause'}
            <span className="sr-only"> slideshow</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default FeatureCarousel;
