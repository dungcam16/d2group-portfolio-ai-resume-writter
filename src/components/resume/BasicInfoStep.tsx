import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { ResumeData } from "@/pages/Resume";
import { Upload } from "lucide-react";

interface Props {
  data: Partial<ResumeData>;
  updateData: (data: Partial<ResumeData>) => void;
  onNext: () => void;
}

const BasicInfoStep = ({ data, updateData, onNext }: Props) => {
  const [avatarPreview, setAvatarPreview] = useState<string>("");

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      updateData({ avatar: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleNext = () => {
    if (!data.fullName?.trim()) {
      toast.error("Please enter your full name");
      return;
    }
    if (!data.email?.trim() || !validateEmail(data.email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!data.phone?.trim()) {
      toast.error("Please enter your phone number");
      return;
    }
    if (!data.targetRole?.trim()) {
      toast.error("Please enter your target role");
      return;
    }
    if (!data.jobDescription?.trim()) {
      toast.error("Please enter the job description");
      return;
    }
    if (!data.avatar) {
      toast.error("Please upload your avatar");
      return;
    }
    onNext();
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Basic Information</h2>
        <p className="text-muted-foreground">Let's start with your personal details</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            value={data.fullName || ""}
            onChange={(e) => updateData({ fullName: e.target.value })}
            placeholder="John Doe"
            maxLength={100}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={data.email || ""}
            onChange={(e) => updateData({ email: e.target.value })}
            placeholder="john@example.com"
            maxLength={255}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone *</Label>
        <Input
          id="phone"
          type="tel"
          value={data.phone || ""}
          onChange={(e) => updateData({ phone: e.target.value })}
          placeholder="+1 (555) 123-4567"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="targetRole">Target Role *</Label>
        <Input
          id="targetRole"
          value={data.targetRole || ""}
          onChange={(e) => updateData({ targetRole: e.target.value })}
          placeholder="Senior Software Engineer"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="jobDescription">Job Description *</Label>
        <Textarea
          id="jobDescription"
          value={data.jobDescription || ""}
          onChange={(e) => updateData({ jobDescription: e.target.value })}
          placeholder="Paste the job description here..."
          rows={4}
          maxLength={2000}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="tone">Preferred Tone</Label>
          <Select value={data.tone} onValueChange={(value) => updateData({ tone: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Professional">Professional</SelectItem>
              <SelectItem value="Creative">Creative</SelectItem>
              <SelectItem value="Concise">Concise</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="template">Template</Label>
          <Select value={data.template} onValueChange={(value) => updateData({ template: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Classic">Classic</SelectItem>
              <SelectItem value="Modern">Modern</SelectItem>
              <SelectItem value="Creative">Creative</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="language">Language</Label>
          <Select value={data.language} onValueChange={(value) => updateData({ language: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="EN">English</SelectItem>
              <SelectItem value="VN">Vietnamese</SelectItem>
              <SelectItem value="ES">Spanish</SelectItem>
              <SelectItem value="FR">French</SelectItem>
              <SelectItem value="DE">German</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="avatar">Upload Avatar *</Label>
        <div className="flex items-center gap-4">
          <Input
            id="avatar"
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="hidden"
          />
          <label htmlFor="avatar" className="cursor-pointer">
            <div className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-muted transition-colors">
              <Upload className="h-4 w-4" />
              <span className="text-sm">Choose Image</span>
            </div>
          </label>
          {avatarPreview && (
            <img src={avatarPreview} alt="Avatar preview" className="h-16 w-16 rounded-full object-cover" />
          )}
        </div>
      </div>

      <Button onClick={handleNext} className="w-full bg-gradient-primary hover:opacity-90">
        Next Step
      </Button>
    </div>
  );
};

export default BasicInfoStep;
