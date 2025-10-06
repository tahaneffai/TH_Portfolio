import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className, id }: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        "py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto",
        "relative overflow-hidden",
        className
      )}
    >
      {children}
    </section>
  );
}