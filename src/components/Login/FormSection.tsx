import React, { useState, useCallback } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const FormSection: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      // Basic client-side validation
      return;
    }
    setIsSubmitting(true);
    console.log('Logging in with:', { email, password });
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1500);
  }, [email, password]);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email" className="text-secondary-foreground">Email Address</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-card border-0 border-b border-input rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password" className="text-secondary-foreground">Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="bg-card border-0 border-b border-input rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary"
        />
        <div className="text-right">
            <Button variant="link" type="button" className="p-0 h-auto text-xs font-normal text-secondary-foreground hover:text-primary">
                Forgot Password
            </Button>
        </div>
      </div>
      <Button type="submit" className="w-full !mt-8" disabled={isSubmitting}>
        {isSubmitting ? 'Logging in...' : 'Login'}
      </Button>
    </form>
  );
};

export default FormSection;
