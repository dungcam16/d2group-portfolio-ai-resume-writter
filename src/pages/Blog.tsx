import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "10 Resume Tips That Will Get You Hired in 2025",
      excerpt: "Learn the latest strategies and best practices for creating a resume that stands out to recruiters and passes ATS systems.",
      date: "2025-01-15",
      category: "Tips & Tricks",
    },
    {
      id: 2,
      title: "How to Tailor Your Resume for Different Industries",
      excerpt: "Discover how to customize your resume for specific industries and increase your chances of landing interviews.",
      date: "2025-01-10",
      category: "Career Advice",
    },
    {
      id: 3,
      title: "The Power of Keywords in Your Resume",
      excerpt: "Understand how applicant tracking systems work and how to optimize your resume with the right keywords.",
      date: "2025-01-05",
      category: "ATS Optimization",
    },
    {
      id: 4,
      title: "Common Resume Mistakes to Avoid",
      excerpt: "Avoid these critical errors that could cost you your dream job opportunity.",
      date: "2024-12-28",
      category: "Tips & Tricks",
    },
    {
      id: 5,
      title: "How to Write a Compelling Professional Summary",
      excerpt: "Master the art of writing a professional summary that captures attention and highlights your value.",
      date: "2024-12-20",
      category: "Writing Guide",
    },
    {
      id: 6,
      title: "The Role of AI in Modern Resume Building",
      excerpt: "Explore how artificial intelligence is revolutionizing the way we create and optimize resumes.",
      date: "2024-12-15",
      category: "Technology",
    },
    {
      id: 7,
      title: "Resume Design: Finding the Perfect Balance",
      excerpt: "Learn how to create a visually appealing resume that is both professional and easy to read.",
      date: "2024-12-10",
      category: "Design",
    },
    {
      id: 8,
      title: "How to Showcase Your Skills Effectively",
      excerpt: "Discover the best ways to present your skills and competencies to potential employers.",
      date: "2024-12-05",
      category: "Tips & Tricks",
    },
    {
      id: 9,
      title: "Career Change Resume: A Complete Guide",
      excerpt: "Successfully transition to a new career with a resume that highlights transferable skills.",
      date: "2024-11-28",
      category: "Career Change",
    },
    {
      id: 10,
      title: "The Future of Resume Writing",
      excerpt: "Stay ahead of the curve with insights into emerging trends in resume writing and job applications.",
      date: "2024-11-20",
      category: "Trends",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 bg-gradient-hero">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Career Advice & Tips</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert insights to help you succeed in your job search
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-primary">{post.category}</span>
                    <Button variant="ghost" size="sm" className="group">
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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

export default Blog;
