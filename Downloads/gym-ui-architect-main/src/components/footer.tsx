import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/container";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-muted py-12 border-t">
      <Container>
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">GS</span>
              </div>
              <span className="font-bold text-xl">GymSupps</span>
            </div>
            <p className="text-muted-foreground">
              Premium supplements for serious athletes and fitness enthusiasts.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/shop?category=protein" className="hover:text-foreground">Protein</Link></li>
              <li><Link to="/shop?category=performance" className="hover:text-foreground">Performance</Link></li>
              <li><Link to="/shop?category=recovery" className="hover:text-foreground">Recovery</Link></li>
              <li><Link to="/shop?category=vitamins" className="hover:text-foreground">Vitamins</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
              <li><Link to="/shipping" className="hover:text-foreground">Shipping</Link></li>
              <li><Link to="/returns" className="hover:text-foreground">Returns</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/faq" className="hover:text-foreground">FAQ</Link></li>
              <li><Link to="/help" className="hover:text-foreground">Help Center</Link></li>
              <li><Link to="/track" className="hover:text-foreground">Track Order</Link></li>
              <li><Link to="/account" className="hover:text-foreground">My Account</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} GymSupps. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}; 