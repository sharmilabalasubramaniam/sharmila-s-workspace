'use client';

import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: custom * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

interface MotionDivProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
}

export default function MotionDiv({ children, delay = 0, className, as = 'div' }: MotionDivProps) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      variants={variants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
