import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, Sparkles, Zap, Shield } from "lucide-react";

// Feature illustrations
import heroBg from "@/assets/hero-background.jpg";
import imgResumeBuilder from "@/assets/ai-resume-builder.jpg";
import imgResumeChecker from "@/assets/resume-checker.jpg";
import imgTemplates from "@/assets/resume-templates.jpg";
import imgSkills from "@/assets/resume-skills.jpg";

const Index = () => {
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="relative bg-gradient-hero py-20 md:py-32 overflow-hidden">
          <img
            src={heroBg}
            alt="Professional hero background"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
            loading="eager"
          />
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Create Your Perfect Resume with AI
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Stand out from the crowd with professionally crafted resumes. 
                Our AI-powered platform helps you create, optimize, and perfect your resume in minutes.
              </p>
              <Link to="/resume">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Everything You Need to Succeed
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Powerful AI-driven tools designed to help you create the perfect resume
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="group h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50 bg-gradient-to-br from-background to-muted/20 overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="relative mb-6 overflow-hidden rounded-lg">
                      <img
                        src={feature.image}
                        alt={feature.alt}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground mb-6">{feature.description}</p>
                    <Link to={feature.link} className="inline-block">
                      <Button size="lg" className="bg-gradient-primary hover:opacity-90 w-full group-hover:scale-105 transition-transform">
                        TRY IT NOW
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Create your professional resume in just 3 simple steps
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                    className="text-center animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="relative mb-6 inline-block">
                      <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto shadow-lg hover:scale-110 transition-transform duration-300">
                        <Icon className="w-10 h-10 text-primary-foreground" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                        {item.step}
                      </div>
                    </div>
                    <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
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
                      className="flex items-start gap-3 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-lg">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative animate-fade-in" style={{ animationDelay: "300ms" }}>
                <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl" />
                <Card className="relative border-2 border-primary/30 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-2 mb-6">
                      <Shield className="w-8 h-8 text-primary" />
                      <h3 className="font-bold text-2xl">Trusted by Professionals</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                        <div className="text-muted-foreground">Resumes Created</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">95%</div>
                        <div className="text-muted-foreground">Success Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
                        <div className="text-muted-foreground">User Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                        <div className="text-muted-foreground">AI Support</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Your Future?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of professionals who have landed their dream jobs with ResumeAI
              </p>
              <Link to="/resume">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                  Create Your Resume Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
