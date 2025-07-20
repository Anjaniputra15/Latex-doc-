import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Heart, Trophy, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ProductCard } from '@/components/product-card';
import { useToast } from '@/hooks/use-toast';
import productsData from '@/data/products.json';
// Footer imported globally via App.tsx

const topSellers = productsData.slice(0, 4);

const benefits = [
  {
    icon: Trophy,
    title: 'Protein for Growth',
    description: 'Build lean muscle mass with our premium protein supplements'
  },
  {
    icon: Zap,
    title: 'Creatine for Power',
    description: 'Increase strength and explosive power for better performance'
  },
  {
    icon: Heart,
    title: 'Recovery Support',
    description: 'Reduce soreness and speed up recovery between workouts'
  }
];

export default function Home() {
  const { toast } = useToast();
  const emailRef = useRef<HTMLInputElement>(null);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    if (email) {
      toast({
        title: "Welcome to Bill'sSupps !",
        description: "Check your email for your 10% discount code.",
      });
      if (emailRef.current) emailRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/80 to-primary/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Video first */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full rounded-lg overflow-hidden shadow-lg border border-white/20 order-1 md:order-none"
            >
              <video
                src="/Video_Background_Color_Change.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Text content after video */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white flex flex-col items-start justify-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
                Fuel Your Performance
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Premium supplements to unlock your potential and achieve your fitness goals
              </p>
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/shop">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top Sellers */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Sellers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our most popular supplements trusted by athletes worldwide
            </p>
          </div>

          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
              {topSellers.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-none w-72 snap-center"
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/shop">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose GymSupps?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Science-backed supplements for every aspect of your fitness journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8 text-center">
                    <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <Mail className="h-12 w-12 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get 10% Off Your First Order</h2>
            <p className="text-lg mb-8 opacity-90">
              Join our newsletter for exclusive deals, workout tips, and nutrition advice
            </p>

            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                ref={emailRef}
                type="email"
                placeholder="Enter your email"
                required
                className="bg-primary-foreground text-foreground"
              />
              <Button type="submit" variant="secondary" className="sm:flex-shrink-0">
                Get Discount
              </Button>
            </form>

            <p className="text-sm mt-4 opacity-75">
              No spam, unsubscribe anytime. Terms apply.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer removed to avoid duplication */}
    </div>
  );
}