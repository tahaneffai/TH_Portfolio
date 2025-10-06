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
        "py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </section>
  );
}