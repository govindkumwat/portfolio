"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function MouseFollower() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Detect if device supports touch
        const checkTouchDevice = () => {
            setIsTouchDevice(
                'ontouchstart' in window ||
                navigator.maxTouchPoints > 0 ||
                window.matchMedia("(pointer: coarse)").matches
            );
        };

        checkTouchDevice();

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, [cursorX, cursorY]);

    // Don't render on touch devices
    if (isTouchDevice) {
        return null;
    }

    return (
        <>
            {/* Main Cursor Dot */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-cyan-400 rounded-full pointer-events-none z-[60] mix-blend-difference"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    x: "-50%",
                    y: "-50%",
                }}
            />

            {/* Trailing Glow */}
            <motion.div
                className="fixed top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none z-0"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    x: "-50%",
                    y: "-50%",
                }}
                transition={{
                    type: "spring",
                    damping: 50,
                    stiffness: 200,
                    mass: 2
                }}
            />
        </>
    );
}
