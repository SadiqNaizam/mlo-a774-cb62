import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ActionLinksProps {
    className?: string;
}

const ActionLinks: React.FC<ActionLinksProps> = ({ className }) => {
  return (
    <div className={cn("text-center", className)}>
      <p className="text-sm text-muted-foreground">
        Don't have an account?{' '}
        <Button variant="link" className="p-0 h-auto text-primary font-semibold">
          SignUp
        </Button>
      </p>
    </div>
  );
};

export default ActionLinks;
