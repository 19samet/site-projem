import { useEffect, useState, useRef } from 'react';

/**
 * Custom hook for parallax scrolling effect
 * @param {number} speed - Parallax speed multiplier (0.5 = slow, 2 = fast)
 */
export const useParallax = (speed = 0.5) => {
    const [offsetY, setOffsetY] = useState(0);
    const elementRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (elementRef.current) {
                const rect = elementRef.current.getBoundingClientRect();
                const scrolled = window.pageYOffset;
                const rate = scrolled * speed;

                // Only apply parallax when element is in viewport
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    setOffsetY(rate);
                }
            }
        };

        // Use requestAnimationFrame for smooth 60fps animation
        let rafId;
        const smoothScroll = () => {
            handleScroll();
            rafId = requestAnimationFrame(smoothScroll);
        };

        rafId = requestAnimationFrame(smoothScroll);

        return () => {
            if (rafId) {
                cancelAnimationFrame(rafId);
            }
        };
    }, [speed]);

    return [elementRef, offsetY];
};
