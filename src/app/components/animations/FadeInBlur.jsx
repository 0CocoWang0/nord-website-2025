// components/animations/FadeInBlur.jsx
'use client';

import { useEffect, useState, useRef } from 'react';

export function FadeInBlur({
    children,
    delay = 0,
    duration = 1000,
    className = '',
    blur = 'sm',
    slideDirection = 'up',
    slideDistance = 4,
    threshold = 0.1, // How much of the element should be visible to trigger
    rootMargin = '0px 0px -50px 0px', // Trigger animation 50px before element enters viewport
    triggerOnce = true, // Whether to animate only once or every time it enters view
    ...props
}) {
    const [isVisible, setIsVisible] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (!triggerOnce || !hasTriggered) {
                            const timer = setTimeout(() => {
                                setIsVisible(true);
                                if (triggerOnce) {
                                    setHasTriggered(true);
                                }
                            }, delay);
                            return () => clearTimeout(timer);
                        }
                    } else if (!triggerOnce) {
                        // Reset animation if triggerOnce is false
                        setIsVisible(false);
                    }
                });
            },
            {
                threshold,
                rootMargin
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [delay, threshold, rootMargin, triggerOnce, hasTriggered]);

    // Define slide directions
    const slideClasses = {
        up: `translate-y-${slideDistance}`,
        down: `-translate-y-${slideDistance}`,
        left: `translate-x-${slideDistance}`,
        right: `-translate-x-${slideDistance}`,
        none: ''
    };

    const initialTransform = slideClasses[slideDirection] || slideClasses.up;

    return (
        <div
            ref={elementRef}
            className={`transition-all ease-out ${isVisible
                ? 'opacity-100 blur-0 transform translate-y-0 translate-x-0'
                : `opacity-0 blur-${blur} transform ${initialTransform}`
                } ${className}`}
            style={{
                transitionDuration: `${duration}ms`,
            }}
            {...props}
        >
            {children}
        </div>
    );
}

// Hook-based approach with intersection observer
export function useFadeInBlur(delay = 0, threshold = 0.1, rootMargin = '0px 0px -50px 0px') {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const timer = setTimeout(() => {
                            setIsVisible(true);
                        }, delay);
                        return () => clearTimeout(timer);
                    }
                });
            },
            {
                threshold,
                rootMargin
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [delay, threshold, rootMargin]);

    return { isVisible, elementRef };
}

// Wrapper component for staggered animations with intersection observer
export function StaggeredFadeIn({
    children,
    staggerDelay = 200,
    className = '',
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true
}) {
    return (
        <div className={className}>
            {Array.isArray(children)
                ? children.map((child, index) => (
                    <FadeInBlur
                        key={index}
                        delay={index * staggerDelay}
                        threshold={threshold}
                        rootMargin={rootMargin}
                        triggerOnce={triggerOnce}
                    >
                        {child}
                    </FadeInBlur>
                ))
                : <FadeInBlur
                    threshold={threshold}
                    rootMargin={rootMargin}
                    triggerOnce={triggerOnce}
                >
                    {children}
                </FadeInBlur>
            }
        </div>
    );
}