"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type FadeInProps = {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
};

export default function FadeIn({
    children,
    delay = 0,
    duration = 0.6,
    className = "",
    once = true,
}: FadeInProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
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