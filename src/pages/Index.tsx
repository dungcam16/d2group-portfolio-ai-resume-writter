import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Everything You Need to Succeed
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <img
                      src={feature.image}
                      alt={feature.alt}
                      className="w-full h-36 object-cover rounded-md mb-4"
                      loading="lazy"
                    />
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{feature.description}</p>
                    <Link to={feature.link} className="inline-block">
                      <Button size="sm" className="bg-gradient-primary hover:opacity-90">TRY IT</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
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
