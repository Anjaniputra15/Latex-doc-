import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { LoginForm } from './login-form';
import { RegisterForm } from './register-form';
import { ForgotPasswordForm } from './forgot-password-form';

type AuthMode = 'login' | 'register' | 'forgot-password';

interface AuthDialogProps {
  children: React.ReactNode;
  defaultMode?: AuthMode;
  onSuccess?: () => void;
}

export const AuthDialog: React.FC<AuthDialogProps> = ({
  children,
  defaultMode = 'login',
  onSuccess,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<AuthMode>(defaultMode);

  const handleSuccess = () => {
    setIsOpen(false);
    setMode('login'); // Reset to login mode
    onSuccess?.();
  };

  const handleClose = () => {
    setIsOpen(false);
    setMode('login'); // Reset to login mode when closing
  };

  const renderForm = () => {
    switch (mode) {
      case 'login':
        return (
          <LoginForm
            onSuccess={handleSuccess}
            onSwitchToRegister={() => setMode('register')}
            onForgotPassword={() => setMode('forgot-password')}
          />
        );
      case 'register':
        return (
          <RegisterForm
            onSuccess={handleSuccess}
            onSwitchToLogin={() => setMode('login')}
          />
        );
      case 'forgot-password':
        return (
          <ForgotPasswordForm
            onSuccess={() => setMode('login')}
            onBackToLogin={() => setMode('login')}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild onClick={() => setIsOpen(true)}>
        {children}
      </DialogTrigger>
      <DialogContent 
        className="sm:max-w-md border-0 p-0" 
        onInteractOutside={handleClose}
        onEscapeKeyDown={handleClose}
      >
        {renderForm()}
      </DialogContent>
    </Dialog>
  );
};