import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { checkResume, fileToBase64 } from "@/utils/api";
import { Upload, Loader2, CheckCircle, Download } from "lucide-react";

const Check = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [downloadLoading, setDownloadLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(selectedFile.type)) {
        toast.error("Please upload a PDF or DOCX file");
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      toast.error("Please upload your resume");
      return;
    }

    setLoading(true);
    try {
      const resumeBase64 = await fileToBase64(file);
      const response = await checkResume({
        resume: resumeBase64,
        flow: "check",
      });

      setResult(response);
      toast.success("Resume analyzed successfully!");
    } catch (error) {
      console.error("Error checking resume:", error);
      toast.error("Failed to analyze resume. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!result || !file) return;
    
    setDownloadLoading(true);
    try {
      const resumeBase64 = await fileToBase64(file);
      await checkResume({
        resume: resumeBase64,
        flow: "download",
      });

      toast.success("Download initiated!");
    } catch (error) {
      console.error("Error downloading results:", error);
      toast.error("Failed to download results. Please try again.");
    } finally {
      setDownloadLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 bg-gradient-hero">
        <div className="container max-w-3xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Resume Checker</h1>
            <p className="text-muted-foreground">
              Upload your resume and get instant feedback to improve it
            </p>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              {!result ? (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="resume">Upload Resume (PDF or DOCX) *</Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="resume"
                        type="file"
                        accept=".pdf,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label htmlFor="resume" className="cursor-pointer flex-1">
                        <div className="flex items-center justify-center gap-2 px-4 py-8 border-2 border-dashed rounded-lg hover:bg-muted transition-colors">
                          <Upload className="h-6 w-6" />
                          <span>{file ? file.name : "Click to upload your resume"}</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <Button 
                    onClick={handleSubmit}
                    className="w-full bg-gradient-primary hover:opacity-90"
                    disabled={loading || !file}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      "Check My Resume"
                    )}
                  </Button>
                </div>
              ) : (
                <div className="text-center space-y-6">
                  <div className="flex justify-center">
                    <CheckCircle className="h-16 w-16 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-semibold">Analysis Complete!</h2>
                  
                  <div 
                    className="text-left bg-white p-8 rounded-lg shadow-inner max-h-[600px] overflow-auto"
                    dangerouslySetInnerHTML={{ __html: result }}
                  />

                  <div className="flex gap-4 justify-center">
                    <Button 
                      onClick={handleDownload}
                      className="bg-gradient-primary hover:opacity-90"
                      disabled={downloadLoading}
                    >
                      {downloadLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Downloading...
                        </>
                      ) : (
                        <>
                          <Download className="mr-2 h-4 w-4" />
                          Download Results
                        </>
                      )}
                    </Button>
                    
                    <Button 
                      onClick={() => {
                        setFile(null);
                        setResult(null);
                      }}
                      variant="outline"
                    >
                      Check Another Resume
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Check;
