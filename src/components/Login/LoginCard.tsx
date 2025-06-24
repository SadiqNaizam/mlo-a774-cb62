import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import CardHeader from './CardHeader';
import FormSection from './FormSection';
import ActionLinks from './ActionLinks';
import { cn } from '@/lib/utils';

interface LoginCardProps {
    className?: string;
}

const LoginCard: React.FC<LoginCardProps> = ({ className }) => {
  return (
    <Card className={cn("max-w-md w-full p-8 bg-card shadow-lg rounded-lg", className)}>
      <CardContent className="p-0 flex flex-col gap-8">
        <CardHeader />
        <FormSection />
        <ActionLinks />
      </CardContent>
    </Card>
  );
};

export default LoginCard;
