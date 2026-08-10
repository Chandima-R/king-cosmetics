"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type SlideDirection =
    | "left"
    | "right"
    | "top"
    | "bottom";

type SlideInProps = {
    children: ReactNode;
    direction?: SlideDirection;
    distance?: number;
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
};

export default function SlideIn({
    children,
    direction = "bottom",
    distance = 40,
    delay = 0,
    duration = 0.7,
    className = "",
    once = true,
}: SlideInProps) {
    const getInitialPosition = () => {
        switch (direction) {
            case "left":
                return {
                    x: -distance,
                    y: 0,
                };

            case "right":
                return {
                    x: distance,
                    y: 0,
                };

            case "top":
                return {
                    x: 0,
                    y: -distance,
                };

            case "bottom":
            default:
                return {
                    x: 0,
                    y: distance,
                };
        }
    };

    const initialPosition =
        getInitialPosition();

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...initialPosition,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
            }}
            viewport={{
                once,
                amount: 0.2,
            }}
            transition={{
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}