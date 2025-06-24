import React from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * MainAppLayout provides the top-level layout structure for the application.
 * It creates a full-screen, centered container for its children, ideal for pages
 * like login, sign-up, or error pages.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'dark flex min-h-screen w-full items-center justify-center bg-background p-4 sm:p-6',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;