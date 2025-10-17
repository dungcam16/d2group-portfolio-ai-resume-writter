import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillsByIndustry = [
    {
      industry: "Technology",
      skills: ["JavaScript", "Python", "React", "Node.js", "AWS", "Docker", "Kubernetes", "Git", "SQL", "MongoDB", "TypeScript", "GraphQL"],
    },
    {
      industry: "Marketing",
      skills: ["SEO", "Content Marketing", "Social Media", "Google Analytics", "PPC", "Email Marketing", "Marketing Automation", "Copywriting", "Brand Strategy", "Market Research"],
    },
    {
      industry: "Sales",
      skills: ["CRM", "Salesforce", "Lead Generation", "Negotiation", "Pipeline Management", "Customer Relationship", "Cold Calling", "Presentation", "B2B Sales", "Account Management"],
    },
    {
      industry: "Design",
      skills: ["Adobe Creative Suite", "Figma", "Sketch", "UI/UX Design", "Prototyping", "Wireframing", "User Research", "Design Systems", "Illustration", "Animation"],
    },
    {
      industry: "Finance",
      skills: ["Financial Modeling", "Excel", "QuickBooks", "Accounting", "Financial Analysis", "Budgeting", "Forecasting", "Tax Preparation", "Audit", "Risk Management"],
    },
    {
      industry: "Healthcare",
      skills: ["Patient Care", "Medical Records", "HIPAA Compliance", "Clinical Documentation", "EMR Systems", "Medical Billing", "Healthcare Administration", "CPR", "Pharmacy", "Telemedicine"],
    },
    {
      industry: "Project Management",
      skills: ["Agile", "Scrum", "JIRA", "Risk Management", "Stakeholder Management", "Budget Planning", "Resource Allocation", "Timeline Management", "PMP", "Lean Six Sigma"],
    },
    {
      industry: "Human Resources",
      skills: ["Recruitment", "Onboarding", "Employee Relations", "Performance Management", "HRIS", "Compensation", "Benefits Administration", "Training & Development", "Labor Law", "Conflict Resolution"],
    },
    {
      industry: "Customer Service",
      skills: ["Customer Support", "Zendesk", "Conflict Resolution", "Communication", "Problem Solving", "Active Listening", "Empathy", "CRM Software", "Live Chat", "Phone Support"],
    },
    {
      industry: "Data Science",
      skills: ["Machine Learning", "Python", "R", "TensorFlow", "Data Visualization", "Statistical Analysis", "SQL", "Big Data", "Pandas", "Scikit-learn", "Tableau", "Power BI"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 bg-gradient-hero">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Resume Skills Library</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the most in-demand skills for your industry
            </p>
          </div>

          <div className="space-y-6">
            {skillsByIndustry.map((category, index) => (
              <Card key={index} className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-2xl">{category.industry}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="text-sm py-1.5 px-3 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Skills;
