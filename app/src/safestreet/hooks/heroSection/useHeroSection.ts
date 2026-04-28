"use client";

import { useState, useEffect, useCallback } from "react";

interface UseHeroSectionProps {
  slidesCount: number;
  autoPlayInterval?: number;
}

export function useHeroSection({ slidesCount, autoPlayInterval = 5000 }: UseHeroSectionProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slidesCount);
  }, [slidesCount]);

  const goToSlide = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, autoPlayInterval);
    return () => clearInterval(timer);
  }, [next, autoPlayInterval]);

  return {
    current,
    next,
    goToSlide,
  };
}
