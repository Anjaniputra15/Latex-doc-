import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { AuthProvider } from '@/context/AuthContext';
import { CartProvider } from '@/context/CartContext';
import { ErrorBoundary } from '@/components/error-boundary';

// Create a custom render function that includes providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        cacheTime: 0,
      },
      mutations: {
        retry: false,
      },
    },
  });

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <AuthProvider>
            <CartProvider>
              <BrowserRouter>
                {children}
              </BrowserRouter>
            </CartProvider>
          </AuthProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

// Mock data for testing
export const mockUser = {
  id: '1',
  email: 'test@example.com',
  name: 'Test User',
  role: 'user' as const,
  emailVerified: true,
  createdAt: '2024-01-01T00:00:00Z',
};

export const mockProduct = {
  id: 1,
  slug: 'test-protein',
  name: 'Test Protein',
  category: 'Protein',
  price: 4999,
  image: 'https://example.com/protein.jpg',
  description: 'Test protein description',
  rating: 4.5,
  reviews: 100,
  nutrition: {
    servingSize: '30g',
    calories: 120,
    protein: '25g',
    carbs: '2g',
    fat: '1g',
  },
  ingredients: 'Test ingredients',
};

export const mockCartItem = {
  id: 1,
  name: 'Test Protein',
  price: 4999,
  quantity: 2,
  image: 'https://example.com/protein.jpg',
  slug: 'test-protein',
};

// Mock implementations
export const mockAuthContext = {
  user: null,
  isLoading: false,
  isAuthenticated: false,
  sessionExpiry: null,
  login: jest.fn(),
  register: jest.fn(),
  logout: jest.fn(),
  refreshSession: jest.fn(),
  updateProfile: jest.fn(),
  resetPassword: jest.fn(),
};

export const mockCartContext = {
  cartItems: [],
  isOpen: false,
  addItem: jest.fn(),
  removeItem: jest.fn(),
  updateQuantity: jest.fn(),
  clearCart: jest.fn(),
  toggleCart: jest.fn(),
  openCart: jest.fn(),
  closeCart: jest.fn(),
  subtotal: 0,
  itemCount: 0,
};

// Re-export everything
export * from '@testing-library/react';
export { customRender as render };