'use client'

import { useState, useEffect } from 'react'
import { Card, CardProps } from "@/components/ui/card"

interface AnimatedCardProps extends CardProps {
  delay?: number;
}

export function AnimatedCard({ children, className, delay = 0, ...props }: AnimatedCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Card 
      className={`transition-all duration-500 ease-out bg-gray-800 border-gray-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${className}`}
      {...props}
    >
      {children}
    </Card>
  );
}

