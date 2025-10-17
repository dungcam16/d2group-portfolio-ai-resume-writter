import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { ResumeData } from "@/pages/Resume";
import { submitResume, fileToBase64 } from "@/utils/api";
import { Loader2, CheckCircle, Download } from "lucide-react";

interface Props {
  data: ResumeData;
  onBack: () => void;
}

const ReviewStep = ({ data, onBack }: Props) => {
  const [loading, setLoading] = useState(false);
  const [resumeHtml, setResumeHtml] = useState<string>("");
  const [success, setSuccess] = useState(false);
  const [downloadLoading, setDownloadLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const avatarBase64 = data.avatar ? await fileToBase64(data.avatar) : "";
      const skillsArray = data.skills.split(",").map((s) => s.trim()).filter(Boolean);

      const response = await submitResume({
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        targetRole: data.targetRole,
        jobDescription: data.jobDescription,
        tone: data.tone,
        template: data.template,
        language: data.language,
        avatar: avatarBase64,
        currentTitle: data.currentTitle,
        yearsOfExperience: data.yearsOfExperience,
        skills: skillsArray,
        education: data.education,
        professionalSummary: data.professionalSummary,
        flow: "create",
      });

      console.log("API Response:", response);
      
      // Handle different response formats
      let htmlContent = "";
      if (typeof response === "string") {
        htmlContent = response;
      } else if (response.resume_html) {
        htmlContent = response.resume_html;
      } else if (response.output) {
        htmlContent = response.output;
      } else if (response.html) {
        htmlContent = response.html;
      }

      if (htmlContent && htmlContent.trim()) {
        setResumeHtml(htmlContent);
        setSuccess(true);
        toast.success("Resume generated successfully!");
      } else {
        console.error("No HTML content found in response:", response);
        toast.error("Resume generated but no preview available");
      }
    } catch (error) {
      console.error("Error generating resume:", error);
      toast.error("Failed to generate resume. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!resumeHtml) return;
    
    setDownloadLoading(true);
    try {
      const avatarBase64 = data.avatar ? await fileToBase64(data.avatar) : "";
      const skillsArray = data.skills.split(",").map((s) => s.trim()).filter(Boolean);

      await submitResume({
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        targetRole: data.targetRole,
        jobDescription: data.jobDescription,
        tone: data.tone,
        template: data.template,
        language: data.language,
        avatar: avatarBase64,
        currentTitle: data.currentTitle,
        yearsOfExperience: data.yearsOfExperience,
        skills: skillsArray,
        education: data.education,
        professionalSummary: data.professionalSummary,
        flow: "download",
        resume_html: resumeHtml,
      });

      toast.success("Download initiated!");
    } catch (error) {
      console.error("Error downloading resume:", error);
      toast.error("Failed to download resume. Please try again.");
    } finally {
      setDownloadLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {!success ? (
        <>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Review Your Information</h2>
            <p className="text-muted-foreground">Make sure everything looks correct before generating</p>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Personal Information</h3>
                <dl className="grid grid-cols-2 gap-2 text-sm">
                  <dt className="text-muted-foreground">Name:</dt>
                  <dd>{data.fullName}</dd>
                  <dt className="text-muted-foreground">Email:</dt>
                  <dd>{data.email}</dd>
                  <dt className="text-muted-foreground">Phone:</dt>
                  <dd>{data.phone}</dd>
                  <dt className="text-muted-foreground">Target Role:</dt>
                  <dd>{data.targetRole}</dd>
                </dl>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Professional Details</h3>
                <dl className="grid grid-cols-2 gap-2 text-sm">
                  <dt className="text-muted-foreground">Current Title:</dt>
                  <dd>{data.currentTitle}</dd>
                  <dt className="text-muted-foreground">Experience:</dt>
                  <dd>{data.yearsOfExperience} years</dd>
                  <dt className="text-muted-foreground">Template:</dt>
                  <dd>{data.template}</dd>
                  <dt className="text-muted-foreground">Language:</dt>
                  <dd>{data.language}</dd>
                </dl>
              </CardContent>
            </Card>
          </div>

          <div className="flex gap-4">
            <Button onClick={onBack} variant="outline" className="w-full" disabled={loading}>
              Back
            </Button>
            <Button 
              onClick={handleGenerate} 
              className="w-full bg-gradient-primary hover:opacity-90"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                "Generate Resume"
              )}
            </Button>
          </div>
        </>
      ) : (
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h2 className="text-2xl font-semibold">Resume Generated Successfully!</h2>
          
          {resumeHtml && (
            <div className="border rounded-lg p-4 max-h-96 overflow-auto bg-white">
              <div dangerouslySetInnerHTML={{ __html: resumeHtml }} />
            </div>
          )}

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
                Download Resume
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ReviewStep;
