import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * Animated counter component
 * Counts from 0 to target value with smooth animation
 */
const AnimatedCounter = ({ end, duration = 2000, suffix = '', prefix = '', style = {} }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    useEffect(() => {
        if (!inView) return;

        let startTime;
        let animationFrame;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);

            const currentCount = Math.floor(end * easeOutQuart);
            setCount(currentCount);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [end, duration, inView]);

    return (
        <span ref={ref} style={style}>
            {prefix}{count}{suffix}
        </span>
    );
};

export default AnimatedCounter;
