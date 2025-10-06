'use client';

import { useState, useEffect } from 'react';
import SimpleLoader from './SimpleLoader';

interface SimpleLoaderProviderProps {
  children: React.ReactNode;
  duration?: number;
}

export default function SimpleLoaderProvider({ 
  children, 
  duration = 2000 
}: SimpleLoaderProviderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <>
      {isLoading && <SimpleLoader duration={duration} />}
      {!isLoading && children}
    </>
  );
}
