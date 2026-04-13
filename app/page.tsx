"use client";

import * as React from "react";
import { AdSlot } from "adkit-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Particles } from "@/components/ui/particles";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BorderBeam } from "@/components/ui/border-beam";
import { SparklesText } from "@/components/ui/sparkles-text";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-glass-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className="font-heading text-xl italic">
            Acme Finance
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Login
            </a>
          </div>
        </div>
        <Button size="sm">Get Started</Button>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <Particles
        className="absolute inset-0"
        quantity={80}
        staticity={30}
        ease={80}
        color="#ffffff"
        size={0.5}
      />
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-white/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-white/[0.02] rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center space-y-8">
        <Badge variant="outline" className="mb-4 backdrop-blur-sm">
          Trusted by 50,000+ clients worldwide
        </Badge>
        
        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl font-heading italic tracking-tight leading-tight">
            Your finances,
          </h1>
          <SparklesText
            className="text-5xl md:text-7xl font-heading italic tracking-tight"
            colors={{ first: "#ffffff", second: "#888888" }}
            sparklesCount={6}
          >
            simplified.
          </SparklesText>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Acme Finance gives you complete visibility into your money. Track spending, 
          set budgets, and grow your wealth — all in one elegant platform.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <ShimmerButton
            shimmerColor="#ffffff"
            shimmerSize="0.1em"
            background="rgba(255, 255, 255, 0.95)"
            className="text-black font-medium"
          >
            Start Free Trial
          </ShimmerButton>
          <Button variant="ghost" size="lg" className="min-w-[160px]">
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { value: "$2.4B", label: "Assets Managed" },
    { value: "50k+", label: "Active Clients" },
    { value: "99.9%", label: "Uptime" },
    { value: "4.9★", label: "App Store Rating" },
  ];

  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-6 md:p-8 relative overflow-hidden">
          <BorderBeam
            size={120}
            duration={8}
            colorFrom="#ffffff"
            colorTo="#444444"
            borderWidth={1}
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-heading italic">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesWithAd() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
      title: "Smart Budgeting",
      description: "AI-powered budgets that adapt to your spending patterns. Set it once, and let Acme do the rest.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
        </svg>
      ),
      title: "Real-Time Analytics",
      description: "Watch your money move in real time. Instant notifications, live charts, and actionable insights.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: "Bank-Grade Security",
      description: "256-bit encryption, biometric login, and SOC 2 compliance. Your data stays yours.",
    },
  ];

  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading italic mb-4">
            Everything you need to thrive
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Powerful tools designed for the modern investor. No complexity, just clarity.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <Card key={i} className="glass">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-lg italic mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="glass rounded-xl p-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
                <AdSlot slot="Test" aspectRatio="1:1" price={200} styles={{ borderColor: "red", backgroundColor: "blue" }}/>
              </div>
            </div>
          </div>
          
        </div>
        <p className="text-[10px] text-right mt-2 text-muted-foreground/60 tracking-widest mb-2">
                Sponsored
              </p>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote: "Acme Finance completely changed how I think about money. I've saved more in 6 months than I did in 3 years.",
      name: "Sarah Chen",
      role: "Product Designer",
    },
    {
      quote: "The real-time analytics are incredible. I finally understand where every dollar goes.",
      name: "Marcus Johnson",
      role: "Startup Founder",
    },
    {
      quote: "Simple, beautiful, and actually useful. This is what finance apps should be.",
      name: "Emily Rodriguez",
      role: "Freelance Writer",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading italic mb-4">
            Loved by thousands
          </h2>
          <p className="text-muted-foreground">
            Join the community of people taking control of their financial future.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="glass">
              <CardContent className="pt-6">
                <p className="text-sm leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium">
                    {testimonial.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="glass-strong rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
          <BorderBeam
            size={150}
            duration={10}
            colorFrom="#ffffff"
            colorTo="#666666"
            borderWidth={1}
          />
          <h2 className="text-3xl md:text-4xl font-heading italic mb-4">
            Ready to take control of your finances?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Join 50,000+ people who have already transformed their relationship with money.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ShimmerButton
              shimmerColor="#ffffff"
              shimmerSize="0.1em"
              background="rgba(255, 255, 255, 0.95)"
              className="text-black font-medium"
            >
              Get Started Free
            </ShimmerButton>
            <Button variant="outline" size="lg" className="min-w-[180px]">
              Talk to Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="font-heading text-lg italic mb-4">Acme Finance</div>
            <p className="text-sm text-muted-foreground">
              Making personal finance simple, beautiful, and accessible to everyone.
            </p>
          </div>
          <div>
            <div className="text-sm font-medium mb-3">Product</div>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Security</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Integrations</a>
            </div>
          </div>
          <div>
            <div className="text-sm font-medium mb-3">Company</div>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Press</a>
            </div>
          </div>
          <div>
            <div className="text-sm font-medium mb-3">Legal</div>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
        <Separator className="mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© 2025 Acme Finance, Inc. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <FeaturesWithAd />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  );
}
