import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const Examples = () => {
  const templates = [
    { id: 1, name: "Classic Professional", category: "Professional" },
    { id: 2, name: "Modern Tech", category: "Technology" },
    { id: 3, name: "Creative Designer", category: "Creative" },
    { id: 4, name: "Executive Leader", category: "Professional" },
    { id: 5, name: "Marketing Specialist", category: "Marketing" },
    { id: 6, name: "Sales Professional", category: "Sales" },
    { id: 7, name: "Healthcare Expert", category: "Healthcare" },
    { id: 8, name: "Finance Analyst", category: "Finance" },
    { id: 9, name: "Software Engineer", category: "Technology" },
    { id: 10, name: "Project Manager", category: "Management" },
    { id: 11, name: "Data Scientist", category: "Technology" },
    { id: 12, name: "UX Designer", category: "Creative" },
    { id: 13, name: "Content Writer", category: "Creative" },
    { id: 14, name: "HR Manager", category: "Professional" },
    { id: 15, name: "Legal Advisor", category: "Professional" },
    { id: 16, name: "Teacher", category: "Education" },
    { id: 17, name: "Customer Success", category: "Sales" },
    { id: 18, name: "Business Analyst", category: "Business" },
    { id: 19, name: "Operations Manager", category: "Management" },
    { id: 20, name: "Startup Founder", category: "Business" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 bg-gradient-hero">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Resume Templates</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our collection of professionally designed resume templates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {templates.map((template) => (
              <Card key={template.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="aspect-[8.5/11] bg-muted rounded-lg mb-4 flex items-center justify-center group-hover:bg-muted/80 transition-colors">
                    <FileText className="h-16 w-16 text-muted-foreground/30" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">{template.name}</h3>
                    <p className="text-sm text-muted-foreground">{template.category}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Use Template
                    </Button>
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

export default Examples;
