import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide premium supplements that fuel your fitness journey and help you achieve your goals."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building a supportive community of fitness enthusiasts who inspire and motivate each other."
    },
    {
      icon: Award,
      title: "Quality Promise",
      description: "Every product is third-party tested and meets the highest standards of purity and potency."
    },
    {
      icon: Heart,
      title: "Your Success",
      description: "Your fitness success is our success. We're here to support you every step of the way."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-dark via-background to-brand-green/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-brand-accent bg-clip-text text-transparent">
              About Bill'sSupps
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Founded by fitness enthusiasts, for fitness enthusiasts. We understand the dedication it takes 
              to push your limits and achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Bill'sSupps was born in 2025 from a simple frustration: finding supplements you could trust. 
                As athletes ourselves, we were tired of products with questionable ingredients and 
                unrealistic promises.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We decided to create something different - supplements that are transparent, effective, 
                and backed by science. Every product in our lineup has been personally tested by our 
                team and meets our rigorous standards.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we're proud to serve thousands of athletes, from weekend warriors to professional 
                competitors, helping them fuel their performance and achieve their goals.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-brand-accent/20 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-4">1000+</div>
                  <div className="text-xl text-muted-foreground">Happy Athletes</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do, from product development to customer service.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of athletes who trust Bill's Supps to fuel their performance.
            </p>
            <motion.a
              href="/shop"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Shop Now
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;