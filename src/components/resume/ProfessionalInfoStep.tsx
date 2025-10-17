import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ResumeData } from "@/pages/Resume";

interface Props {
  data: Partial<ResumeData>;
  updateData: (data: Partial<ResumeData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const ProfessionalInfoStep = ({ data, updateData, onNext, onBack }: Props) => {
  const handleNext = () => {
    if (!data.currentTitle?.trim()) {
      toast.error("Please enter your current title");
      return;
    }
    if (data.yearsOfExperience === undefined || data.yearsOfExperience < 0) {
      toast.error("Please enter valid years of experience");
      return;
    }
    if (!data.skills?.trim()) {
      toast.error("Please enter your skills");
      return;
    }
    if (!data.education?.trim()) {
      toast.error("Please enter your education");
      return;
    }
    if (!data.professionalSummary?.trim()) {
      toast.error("Please enter your professional summary");
      return;
    }
    onNext();
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Professional Information</h2>
        <p className="text-muted-foreground">Tell us about your experience and skills</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="currentTitle">Current Title *</Label>
        <Input
          id="currentTitle"
          value={data.currentTitle || ""}
          onChange={(e) => updateData({ currentTitle: e.target.value })}
          placeholder="Software Engineer"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="yearsOfExperience">Years of Experience *</Label>
        <Input
          id="yearsOfExperience"
          type="number"
          min="0"
          value={data.yearsOfExperience || 0}
          onChange={(e) => updateData({ yearsOfExperience: parseInt(e.target.value) || 0 })}
          placeholder="5"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="skills">Skills * (comma-separated)</Label>
        <Textarea
          id="skills"
          value={data.skills || ""}
          onChange={(e) => updateData({ skills: e.target.value })}
          placeholder="JavaScript, React, Node.js, Python, AWS"
          rows={3}
          maxLength={500}
        />
        <p className="text-xs text-muted-foreground">Separate each skill with a comma</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="education">Education *</Label>
        <Textarea
          id="education"
          value={data.education || ""}
          onChange={(e) => updateData({ education: e.target.value })}
          placeholder="Bachelor of Science in Computer Science, University Name, 2018"
          rows={3}
          maxLength={500}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="professionalSummary">Professional Summary *</Label>
        <Textarea
          id="professionalSummary"
          value={data.professionalSummary || ""}
          onChange={(e) => updateData({ professionalSummary: e.target.value })}
          placeholder="Experienced software engineer with a passion for building scalable web applications..."
          rows={4}
          maxLength={1000}
        />
      </div>

      <div className="flex gap-4">
        <Button onClick={onBack} variant="outline" className="w-full">
          Back
        </Button>
        <Button onClick={handleNext} className="w-full bg-gradient-primary hover:opacity-90">
          Review & Generate
        </Button>
      </div>
    </div>
  );
};

export default ProfessionalInfoStep;
