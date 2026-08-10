"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type StaggerItemProps = {
    children: ReactNode;
    className?: string;
};

const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 24,
        scale: 0.98,
    },

    visible: {
        opacity: 1,
        y: 0,
        scale: 1,

        transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function StaggerItem({
    children,
    className = "",
}: StaggerItemProps) {
    return (
        <motion.div
            variants={itemVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
}