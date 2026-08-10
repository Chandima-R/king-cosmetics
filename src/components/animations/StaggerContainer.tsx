"use client";

import {
    motion,
    type Variants,
} from "motion/react";
import type { ReactNode } from "react";

type StaggerContainerProps = {
    children: ReactNode;
    className?: string;
    stagger?: number;
    delayChildren?: number;
    once?: boolean;
};

export default function StaggerContainer({
    children,
    className = "",
    stagger = 0.08,
    delayChildren = 0,
    once = true,
}: StaggerContainerProps) {
    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: stagger,
                delayChildren,
            },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once,
                amount: 0.1,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}