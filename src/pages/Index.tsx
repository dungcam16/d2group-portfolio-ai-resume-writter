import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, Sparkles, Zap, Shield, Star, TrendingUp, Users, Clock } from "lucide-react";
import { useEffect, useState } from "react";

// Feature illustrations
import heroBg from "@/assets/hero-background.jpg";
import imgResumeBuilder from "@/assets/ai-resume-builder.jpg";
import imgResumeChecker from "@/assets/resume-checker.jpg";
import imgTemplates from "@/assets/resume-templates.jpg";
import imgSkills from "@/assets/resume-skills.jpg";

const Index = () => {
  const [counter, setCounter] = useState(0);
  const targetCount = 29847;

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = targetCount / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setCounter(targetCount);
        clearInterval(timer);
      } else {
        setCounter(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      title: "AI Resume Builder",
      description: "Create professional resumes with AI-powered suggestions and templates",
      link: "/resume",
      image: imgResumeBuilder,
      alt: "AI Resume Builder illustration",
    },
    {
      title: "Resume Checker",
      description: "Get instant feedback and analysis on your existing resume",
      link: "/check",
      image: imgResumeChecker,
      alt: "Resume Checker illustration",
    },
    {
      title: "Resume Templates",
      description: "Browse 20+ professionally designed resume templates",
      link: "/examples",
      image: imgTemplates,
      alt: "Resume Templates gallery",
    },
    {
      title: "Resume Skills",
      description: "Discover industry-specific skills to boost your resume",
      link: "/skills",
      image: imgSkills,
      alt: "Resume Skills library",
    },
  ];

  const stats = [
    { value: "10K+", label: "Resumes Created", icon: Users },
    { value: "95%", label: "Success Rate", icon: TrendingUp },
    { value: "10min", label: "Average Time", icon: Clock },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      content: "Got 3 interviews within a week of using this platform. The AI suggestions were spot-on!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Marketing Manager",
      content: "Best resume builder I've used. Clean, professional, and incredibly easy to use.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Product Designer",
      content: "The templates are beautiful and ATS-friendly. Landed my dream job!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-hero py-16 md:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
          <img
            src={heroBg}
            alt="Professional hero background"
            className="absolute inset-0 h-full w-full object-cover opacity-5"
            loading="eager"
          />
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-bounce-in">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">AI-Powered Resume Builder</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in-up leading-tight">
                Create Your Perfect Resume
                <span className="block bg-gradient-primary bg-clip-text text-transparent mt-2">
                  Get Hired Faster
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Stand out from the crowd with professionally crafted resumes. 
                Our AI-powered platform helps you create, optimize, and perfect your resume in minutes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Link to="/resume">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-all hover:scale-105 text-base md:text-lg px-8 py-6 shadow-xl">
                    Create Your Resume
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/check">
                  <Button size="lg" variant="outline" className="text-base md:text-lg px-8 py-6 hover:border-primary hover:text-primary transition-all hover:scale-105">
                    Check My Resume
                  </Button>
                </Link>
              </div>

              {/* Animated Counter */}
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-card rounded-full shadow-lg animate-scale-in border" style={{ animationDelay: "0.6s" }}>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {counter.toLocaleString()}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">resumes created today</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-background border-y">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index} 
                    className="flex flex-col items-center text-center animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Powerful Features</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Everything You Need to Succeed
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Powerful AI-driven tools designed to help you create the perfect resume
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="group h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50 bg-gradient-card overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.alt}
                        className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                    </div>
                    <div className="p-6 md:p-8">
                      <h3 className="font-bold text-xl md:text-2xl mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                      <p className="text-muted-foreground mb-6">{feature.description}</p>
                      <Link to={feature.link} className="inline-block w-full">
                        <Button size="lg" className="bg-gradient-primary hover:opacity-90 w-full group-hover:scale-105 transition-transform shadow-lg">
                          Try It Now
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full mb-4">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span className="text-sm font-medium text-success">Simple Process</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Create your professional resume in just 3 simple steps
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Enter Your Information",
                  description: "Fill in your details, work experience, and skills in our intuitive form",
                  icon: Sparkles
                },
                {
                  step: "2",
                  title: "AI Enhancement",
                  description: "Our AI analyzes and optimizes your content for maximum impact",
                  icon: Zap
                },
                {
                  step: "3",
                  title: "Download & Apply",
                  description: "Get your polished resume and start applying to your dream jobs",
                  icon: CheckCircle2
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index} 
                    className="relative text-center animate-fade-in"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {index < 2 && (
                      <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-transparent" />
                    )}
                    <div className="relative mb-6 inline-block">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto shadow-xl hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                        <Icon className="w-10 h-10 text-primary-foreground" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shadow-lg">
                        {item.step}
                      </div>
                    </div>
                    <h3 className="font-bold text-xl md:text-2xl mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-base">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span className="text-sm font-medium text-primary">Loved by Users</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our Users Say</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Join thousands of professionals who have landed their dream jobs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-gradient-card animate-fade-in border-2 hover:border-primary/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 md:p-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                    <div>
                      <div className="font-bold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Why Choose Us</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Why Choose ResumeAI?
                </h2>
                <div className="space-y-4">
                  {[
                    "AI-powered content optimization for better results",
                    "20+ professional templates for every industry",
                    "Real-time resume analysis and suggestions",
                    "ATS-friendly formats that pass applicant tracking systems",
                    "Export to multiple formats (PDF, DOCX, HTML)",
                    "100% free to start, no credit card required"
                  ].map((benefit, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-3 animate-fade-in group hover:translate-x-2 transition-transform"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-success/30 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-success" />
                      </div>
                      <p className="text-base md:text-lg text-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative animate-fade-in lg:animate-slide-in-right">
                <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-3xl" />
                <Card className="relative border-2 border-primary/30 overflow-hidden shadow-2xl bg-gradient-card">
                  <CardContent className="p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center">
                        <Shield className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="font-bold text-2xl md:text-3xl">Trusted by Professionals</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-6 md:gap-8">
                      {[
                        { value: "10K+", label: "Resumes Created" },
                        { value: "95%", label: "Success Rate" },
                        { value: "4.9/5", label: "User Rating" },
                        { value: "24/7", label: "AI Support" }
                      ].map((stat, index) => (
                        <div 
                          key={index} 
                          className="text-center p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-colors"
                        >
                          <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                            {stat.value}
                          </div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-bounce-in">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Start Today</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in-up">
                Ready to Build Your Future?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Join thousands of professionals who have landed their dream jobs with ResumeAI
              </p>
              <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Link to="/resume">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-all hover:scale-105 text-base md:text-lg px-8 py-6 shadow-xl">
                    Create Your Resume Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
