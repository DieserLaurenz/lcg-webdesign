import React, { useEffect, useRef, useState } from 'react';

export default function StaticPhoneMockup() {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const hasInteracted = useRef(false);
  const exactScrollPos = useRef(0);
  const currentSpeed = useRef(0);
  const delayPassed = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const updateViewport = (event) => {
      setIsMobileViewport(event.matches);
    };

    setIsMobileViewport(mediaQuery.matches);
    mediaQuery.addEventListener('change', updateViewport);

    return () => {
      mediaQuery.removeEventListener('change', updateViewport);
    };
  }, []);

  useEffect(() => {
    let timeoutId;

    if (isVisible) {
      if (isMobileViewport) {
        delayPassed.current = true;
      } else {
        timeoutId = setTimeout(() => {
          delayPassed.current = true;
        }, 2000);
      }
    } else {
      delayPassed.current = false;
    }

    return () => clearTimeout(timeoutId);
  }, [isVisible, isMobileViewport]);

  useEffect(() => {
    let animationFrameId;
    const scrollContainer = scrollRef.current;

    const scrollStep = () => {
      if (hasInteracted.current) return;

      if (scrollContainer && isVisible && delayPassed.current) {
        if (currentSpeed.current < 0.35) {
          currentSpeed.current += 0.002;
        }

        exactScrollPos.current += currentSpeed.current;
        scrollContainer.scrollTop = exactScrollPos.current;

        if (scrollContainer.scrollTop >= scrollContainer.scrollHeight - scrollContainer.clientHeight - 1) {
          exactScrollPos.current = 0;
          scrollContainer.scrollTop = 0;
          currentSpeed.current = 0;
        }
      } else {
        currentSpeed.current = 0;
        if (scrollContainer) {
          exactScrollPos.current = scrollContainer.scrollTop;
        }
      }

      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible]);

  const handleUserInteraction = () => {
    hasInteracted.current = true;
  };

  return (
    <div ref={containerRef} className="relative mx-auto w-[280px] h-[580px] bg-slate-900 rounded-[3rem] p-2 shadow-2xl ring-1 ring-slate-900/50">
      <div className="absolute top-24 -left-1 w-1 h-10 bg-slate-800 rounded-l-md"></div>
      <div className="absolute top-36 -left-1 w-1 h-10 bg-slate-800 rounded-l-md"></div>
      <div className="absolute top-32 -right-1 w-1 h-14 bg-slate-800 rounded-r-md"></div>

      <div className="relative w-full h-full bg-slate-50 rounded-[2.5rem] overflow-hidden border-[3px] border-slate-950">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-20 pointer-events-none flex items-center justify-end px-2">
          <div className="w-2.5 h-2.5 bg-slate-800 rounded-full border border-slate-700/50"></div>
        </div>

        <div
          ref={scrollRef}
          className="absolute inset-0 bg-white overflow-y-scroll no-scrollbar"
          onWheel={handleUserInteraction}
          onTouchStart={handleUserInteraction}
          onMouseDown={handleUserInteraction}
        >
          <img
            src="/webdesign-berlin-bodywork-praxis-beispiel-mobile.webp"
            alt="Bodywork Berlin Mobile Screenshot"
            className="w-full h-auto block pointer-events-none select-none"
          />
        </div>
      </div>
    </div>
  );
}
