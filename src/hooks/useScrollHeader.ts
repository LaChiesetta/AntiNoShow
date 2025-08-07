// src/hooks/useScrollHeader.ts

'use client';

import { useState, useEffect } from 'react';

interface UseScrollHeaderOptions {
  threshold?: number;
}

export const useScrollHeader = ({ threshold = 50 }: UseScrollHeaderOptions = {}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
};