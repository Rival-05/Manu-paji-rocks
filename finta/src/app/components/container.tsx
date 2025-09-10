import React from 'react'
import { cn } from '@/lib/utils';

export const Container = ({children, className} : 
    {children: React.ReactNode;
    className? : string;
}) => {
  return (
    <div className={cn("w-full max-w-5xl px-4 md:py-3", className)}>
        {children}
    </div>
  )
}
