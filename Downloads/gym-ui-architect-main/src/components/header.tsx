import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, Search, Dumbbell, User, LogOut, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { AuthDialog } from '@/components/auth/auth-dialog';
import { Container } from "@/components/ui/container";
import { DarkModeToggle } from "@/components/dark-mode-toggle";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export const Header: React.FC = () => {
  const { toggleCart, itemCount } = useCart();
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  const getUserInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-7 w-7 bg-primary rounded-lg flex items-center justify-center">
            <Dumbbell className="h-4 w-4 text-primary-foreground dumbbell-bounce" />
          </div>
          <span className="font-bold text-xl">Bills Supplements</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <DarkModeToggle />
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="h-4 w-4" />
          </Button>
          
          <Button variant="ghost" size="icon" onClick={toggleCart} className="relative">
            <ShoppingBag className="h-4 w-4" />
            {itemCount > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
              >
                {itemCount}
              </Badge>
            )}
          </Button>

          {/* Authentication */}
          {isAuthenticated && user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{getUserInitials(user.name)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/orders" className="flex items-center">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Orders
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/settings" className="flex items-center">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden sm:flex items-center space-x-2">
              <AuthDialog defaultMode="login">
                <Button variant="ghost" size="sm">
                  Sign in
                </Button>
              </AuthDialog>
              <AuthDialog defaultMode="register">
                <Button size="sm">
                  Sign up
                </Button>
              </AuthDialog>
            </div>
          )}
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 space-y-4">
                <Link to="/" className="block font-medium" onClick={() => {}}>
                  Home
                </Link>
                <Link to="/shop" className="block font-medium" onClick={() => {}}>
                  Shop
                </Link>
                <Link to="/about" className="block font-medium" onClick={() => {}}>
                  About
                </Link>
                <Link to="/contact" className="block font-medium" onClick={() => {}}>
                  Contact
                </Link>
                
                {/* Mobile Authentication */}
                <div className="pt-4 border-t">
                  {isAuthenticated && user ? (
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 mb-4">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>{getUserInitials(user.name)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{user.name}</p>
                          <p className="text-xs text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                      <Link to="/profile" className="block font-medium" onClick={() => {}}>
                        Profile
                      </Link>
                      <Link to="/orders" className="block font-medium" onClick={() => {}}>
                        Orders
                      </Link>
                      <Link to="/settings" className="block font-medium" onClick={() => {}}>
                        Settings
                      </Link>
                      <Button variant="ghost" className="w-full justify-start p-0 h-auto font-medium" onClick={handleLogout}>
                        Log out
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <AuthDialog defaultMode="login">
                        <Button variant="ghost" className="w-full justify-start p-0 h-auto font-medium">
                          Sign in
                        </Button>
                      </AuthDialog>
                      <AuthDialog defaultMode="register">
                        <Button variant="ghost" className="w-full justify-start p-0 h-auto font-medium">
                          Sign up
                        </Button>
                      </AuthDialog>
                    </div>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
};