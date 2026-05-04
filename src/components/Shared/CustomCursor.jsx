import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const mouseX = useSpring(0, { stiffness: 500, damping: 50 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 50 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isVisible) setIsVisible(true);
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const isClickable = 
                target.tagName === 'A' || 
                target.tagName === 'BUTTON' || 
                target.closest('button') || 
                target.closest('a') ||
                window.getComputedStyle(target).cursor === 'pointer';
            
            setIsHovering(isClickable);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY, isVisible]);

    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null; // Don't show on touch devices
    }

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999]">
            {/* Outer Ring */}
            <motion.div
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isHovering ? 2 : 1,
                    opacity: isVisible ? 1 : 0,
                }}
                className="w-8 h-8 border border-brand-primary rounded-full transition-colors duration-300"
            />
            {/* Inner Dot */}
            <motion.div
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isHovering ? 0 : 1,
                    opacity: isVisible ? 1 : 0,
                }}
                className="w-1.5 h-1.5 bg-brand-primary rounded-full absolute top-0 left-0"
            />
        </div>
    );
};

export default CustomCursor;
