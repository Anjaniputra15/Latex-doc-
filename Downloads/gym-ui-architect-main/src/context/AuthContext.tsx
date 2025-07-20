import React, { createContext, useContext, useReducer, useEffect, useCallback, ReactNode } from 'react';
import { useErrorHandler } from '@/hooks/use-error-handler';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'user' | 'admin';
  emailVerified: boolean;
  createdAt: string;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  sessionExpiry: number | null;
}

type AuthAction =
  | { type: 'AUTH_START' }
  | { type: 'AUTH_SUCCESS'; payload: { user: User; sessionExpiry: number } }
  | { type: 'AUTH_FAILURE' }
  | { type: 'LOGOUT' }
  | { type: 'UPDATE_USER'; payload: Partial<User> }
  | { type: 'SESSION_REFRESH'; payload: { sessionExpiry: number } };

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => Promise<void>;
  refreshSession: () => Promise<boolean>;
  updateProfile: (data: Partial<User>) => Promise<boolean>;
  resetPassword: (email: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const initialState: AuthState = {
  user: null,
  isLoading: true,
  isAuthenticated: false,
  sessionExpiry: null,
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'AUTH_START':
      return { ...state, isLoading: true };
    
    case 'AUTH_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        isLoading: false,
        isAuthenticated: true,
        sessionExpiry: action.payload.sessionExpiry,
      };
    
    case 'AUTH_FAILURE':
      return {
        ...state,
        user: null,
        isLoading: false,
        isAuthenticated: false,
        sessionExpiry: null,
      };
    
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        sessionExpiry: null,
        isLoading: false,
      };
    
    case 'UPDATE_USER':
      return {
        ...state,
        user: state.user ? { ...state.user, ...action.payload } : null,
      };
    
    case 'SESSION_REFRESH':
      return {
        ...state,
        sessionExpiry: action.payload.sessionExpiry,
      };
    
    default:
      return state;
  }
};

// Simulate API calls - replace with actual API endpoints
class AuthAPI {
  private static readonly BASE_URL = process.env.VITE_API_URL || 'http://localhost:3001/api';
  private static readonly TOKEN_KEY = 'gymSupps_auth_token';
  private static readonly REFRESH_TOKEN_KEY = 'gymSupps_refresh_token';

  static async login(email: string, password: string): Promise<{ user: User; token: string; refreshToken: string; expiresIn: number }> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Demo user for development
    if (email === 'demo@gymsupps.com' && password === 'demo123') {
      const expiresIn = 24 * 60 * 60 * 1000; // 24 hours
      return {
        user: {
          id: '1',
          email: 'demo@gymsupps.com',
          name: 'Demo User',
          role: 'user',
          emailVerified: true,
          createdAt: new Date().toISOString(),
        },
        token: 'demo-jwt-token',
        refreshToken: 'demo-refresh-token',
        expiresIn,
      };
    }
    
    throw new Error('Invalid credentials');
  }

  static async register(email: string, password: string, name: string): Promise<{ user: User; token: string; refreshToken: string; expiresIn: number }> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const expiresIn = 24 * 60 * 60 * 1000; // 24 hours
    return {
      user: {
        id: Math.random().toString(36).substr(2, 9),
        email,
        name,
        role: 'user',
        emailVerified: false,
        createdAt: new Date().toISOString(),
      },
      token: 'new-user-jwt-token',
      refreshToken: 'new-user-refresh-token',
      expiresIn,
    };
  }

  static async refreshToken(): Promise<{ token: string; expiresIn: number }> {
    const refreshToken = localStorage.getItem(this.REFRESH_TOKEN_KEY);
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const expiresIn = 24 * 60 * 60 * 1000; // 24 hours
    return {
      token: 'refreshed-jwt-token',
      expiresIn,
    };
  }

  static async getCurrentUser(): Promise<User> {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (!token) {
      throw new Error('No token available');
    }
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Return demo user for development
    return {
      id: '1',
      email: 'demo@gymsupps.com',
      name: 'Demo User',
      role: 'user',
      emailVerified: true,
      createdAt: new Date().toISOString(),
    };
  }

  static async updateProfile(data: Partial<User>): Promise<User> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const currentUser = await this.getCurrentUser();
    return { ...currentUser, ...data };
  }

  static async resetPassword(email: string): Promise<void> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Password reset email sent to: ${email}`);
  }

  static setTokens(token: string, refreshToken: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.REFRESH_TOKEN_KEY, refreshToken);
  }

  static clearTokens(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
  }

  static getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const { handleError } = useErrorHandler();

  const logout = useCallback(async (): Promise<void> => {
    try {
      // Call logout endpoint if needed
      AuthAPI.clearTokens();
      dispatch({ type: 'LOGOUT' });
    } catch (error) {
      handleError(error, { toastTitle: 'Logout error' });
    }
  }, [handleError]);

  // Check for existing session on mount
  useEffect(() => {
    const initAuth = async () => {
      try {
        dispatch({ type: 'AUTH_START' });
        const user = await AuthAPI.getCurrentUser();
        const sessionExpiry = Date.now() + (24 * 60 * 60 * 1000); // 24 hours
        dispatch({ type: 'AUTH_SUCCESS', payload: { user, sessionExpiry } });
      } catch (error) {
        dispatch({ type: 'AUTH_FAILURE' });
        AuthAPI.clearTokens();
      }
    };

    initAuth();
  }, []);

  // Auto-refresh session before expiry
  useEffect(() => {
    if (!state.sessionExpiry || !state.isAuthenticated) return;

    const timeUntilExpiry = state.sessionExpiry - Date.now();
    const refreshTime = Math.max(timeUntilExpiry - (5 * 60 * 1000), 60000); // Refresh 5 minutes before expiry, minimum 1 minute

    const timer = setTimeout(async () => {
      try {
        const result = await AuthAPI.refreshToken();
        const newExpiry = Date.now() + result.expiresIn;
        dispatch({ type: 'SESSION_REFRESH', payload: { sessionExpiry: newExpiry } });
      } catch (error) {
        handleError(error, { toastTitle: 'Session expired', showToast: false });
        logout();
      }
    }, refreshTime);

    return () => clearTimeout(timer);
  }, [state.sessionExpiry, state.isAuthenticated, handleError, logout]);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      dispatch({ type: 'AUTH_START' });
      const result = await AuthAPI.login(email, password);
      
      AuthAPI.setTokens(result.token, result.refreshToken);
      const sessionExpiry = Date.now() + result.expiresIn;
      
      dispatch({ type: 'AUTH_SUCCESS', payload: { user: result.user, sessionExpiry } });
      return true;
    } catch (error) {
      dispatch({ type: 'AUTH_FAILURE' });
      handleError(error, { toastTitle: 'Login failed' });
      return false;
    }
  };

  const register = async (email: string, password: string, name: string): Promise<boolean> => {
    try {
      dispatch({ type: 'AUTH_START' });
      const result = await AuthAPI.register(email, password, name);
      
      AuthAPI.setTokens(result.token, result.refreshToken);
      const sessionExpiry = Date.now() + result.expiresIn;
      
      dispatch({ type: 'AUTH_SUCCESS', payload: { user: result.user, sessionExpiry } });
      return true;
    } catch (error) {
      dispatch({ type: 'AUTH_FAILURE' });
      handleError(error, { toastTitle: 'Registration failed' });
      return false;
    }
  };

  const refreshSession = async (): Promise<boolean> => {
    try {
      const result = await AuthAPI.refreshToken();
      const sessionExpiry = Date.now() + result.expiresIn;
      dispatch({ type: 'SESSION_REFRESH', payload: { sessionExpiry } });
      return true;
    } catch (error) {
      handleError(error, { toastTitle: 'Session refresh failed' });
      logout();
      return false;
    }
  };

  const updateProfile = async (data: Partial<User>): Promise<boolean> => {
    try {
      const updatedUser = await AuthAPI.updateProfile(data);
      dispatch({ type: 'UPDATE_USER', payload: updatedUser });
      return true;
    } catch (error) {
      handleError(error, { toastTitle: 'Profile update failed' });
      return false;
    }
  };

  const resetPassword = async (email: string): Promise<boolean> => {
    try {
      await AuthAPI.resetPassword(email);
      return true;
    } catch (error) {
      handleError(error, { toastTitle: 'Password reset failed' });
      return false;
    }
  };

  const value: AuthContextType = {
    ...state,
    login,
    register,
    logout,
    refreshSession,
    updateProfile,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};