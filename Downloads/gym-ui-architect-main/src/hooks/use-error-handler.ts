import { useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';

interface ErrorHandlerOptions {
  showToast?: boolean;
  toastTitle?: string;
  logToConsole?: boolean;
  logToService?: boolean;
}

export const useErrorHandler = () => {
  const { toast } = useToast();

  const handleError = useCallback((
    error: Error | unknown,
    options: ErrorHandlerOptions = {}
  ) => {
    const {
      showToast = true,
      toastTitle = 'An error occurred',
      logToConsole = true,
      logToService = process.env.NODE_ENV === 'production'
    } = options;

    // Convert unknown errors to Error objects
    const errorObj = error instanceof Error 
      ? error 
      : new Error(typeof error === 'string' ? error : 'Unknown error occurred');

    // Log to console in development
    if (logToConsole && process.env.NODE_ENV === 'development') {
      console.error('Error handled:', errorObj);
    }

    // Log to external service in production
    if (logToService && process.env.NODE_ENV === 'production') {
      // Replace with your error reporting service
      // Example: Sentry.captureException(errorObj);
      console.error('Production error:', errorObj);
    }

    // Show toast notification
    if (showToast) {
      toast({
        variant: 'destructive',
        title: toastTitle,
        description: errorObj.message || 'Something went wrong. Please try again.',
      });
    }

    return errorObj;
  }, [toast]);

  // Specific handlers for common scenarios
  const handleAsyncError = useCallback(async <T>(
    asyncFn: () => Promise<T>,
    options?: ErrorHandlerOptions
  ): Promise<T | null> => {
    try {
      return await asyncFn();
    } catch (error) {
      handleError(error, options);
      return null;
    }
  }, [handleError]);

  const handleAPIError = useCallback((
    error: unknown,
    context?: string
  ) => {
    const contextMessage = context ? `${context}: ` : '';
    
    if (error instanceof Error) {
      // Handle network errors
      if (error.message.includes('fetch')) {
        handleError(error, {
          toastTitle: 'Connection Error'
        });
        return;
      }
      
      // Handle API errors
      if (error.message.includes('404')) {
        handleError(error, {
          toastTitle: 'Not Found'
        });
        return;
      }
      
      if (error.message.includes('401') || error.message.includes('403')) {
        handleError(error, {
          toastTitle: 'Access Denied'
        });
        return;
      }
      
      if (error.message.includes('500')) {
        handleError(error, {
          toastTitle: 'Server Error'
        });
        return;
      }
    }
    
    // Default error handling
    handleError(error, {
      toastTitle: 'Request Failed'
    });
  }, [handleError]);

  return {
    handleError,
    handleAsyncError,
    handleAPIError
  };
};