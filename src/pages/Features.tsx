import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, CheckCircle, Layout, BookOpen, Sparkles, Zap, Shield, Globe } from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      icon: FileText,
      title: "AI Resume Builder",
      description: "Our advanced AI analyzes job descriptions and creates perfectly tailored resumes that highlight your strengths and match employer requirements. Choose from professional templates and let AI craft compelling content that gets you noticed.",
      benefits: [
        "AI-powered content generation",
        "Job description matching",
        "Multiple professional templates",
        "Multi-language support",
      ],
    },
    {
      icon: CheckCircle,
      title: "Resume Checker",
      description: "Get instant, comprehensive feedback on your existing resume. Our AI analyzes formatting, content, keywords, and structure to provide actionable recommendations that improve your chances of landing interviews.",
      benefits: [
        "Instant analysis and feedback",
        "Keyword optimization",
        "ATS compatibility check",
        "Formatting recommendations",
      ],
    },
    {
      icon: Layout,
      title: "Resume Templates",
      description: "Access our curated collection of 20+ professionally designed templates. Each template is crafted by career experts and optimized for different industries and career levels, ensuring you find the perfect match.",
      benefits: [
        "20+ professional templates",
        "Industry-specific designs",
        "Easy customization",
        "Modern and classic styles",
      ],
    },
    {
      icon: BookOpen,
      title: "Resume Skills Library",
      description: "Discover the most in-demand skills for your industry. Our comprehensive skills database helps you identify and highlight the competencies that employers are actively seeking.",
      benefits: [
        "Industry-categorized skills",
        "Trending competencies",
        "Skill descriptions",
        "Easy integration",
      ],
    },
  ];

  const additionalFeatures = [
    {
      icon: Sparkles,
      title: "Smart Suggestions",
      description: "Get intelligent recommendations to enhance your resume content",
    },
    {
      icon: Zap,
      title: "Quick Generation",
      description: "Create professional resumes in minutes, not hours",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data is encrypted and secure at all times",
    },
    {
      icon: Globe,
      title: "Multi-Language",
      description: "Create resumes in English, Vietnamese, Spanish, French, and German",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-hero py-20">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Powerful Features to Build Your Perfect Resume
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create, optimize, and perfect your professional resume
            </p>
          </div>
        </section>

        {/* Main Features */}
        <section className="py-20">
          <div className="container">
            <div className="space-y-16">
              {mainFeatures.map((feature, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className={index % 2 === 1 ? "md:order-2" : ""}>
                        <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                          <feature.icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                        <p className="text-muted-foreground mb-6">{feature.description}</p>
                        <ul className="space-y-2">
                          {feature.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className={`bg-muted/50 rounded-lg h-64 flex items-center justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                        <feature.icon className="h-32 w-32 text-muted-foreground/20" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">More Features You'll Love</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalFeatures.map((feature, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Features;
