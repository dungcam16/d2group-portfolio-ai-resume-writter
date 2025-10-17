import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BasicInfoStep from "@/components/resume/BasicInfoStep";
import ProfessionalInfoStep from "@/components/resume/ProfessionalInfoStep";
import ReviewStep from "@/components/resume/ReviewStep";
import { Progress } from "@/components/ui/progress";

export interface ResumeData {
  fullName: string;
  email: string;
  phone: string;
  targetRole: string;
  jobDescription: string;
  tone: string;
  template: string;
  language: string;
  avatar?: File;
  currentTitle: string;
  yearsOfExperience: number;
  skills: string;
  education: string;
  professionalSummary: string;
}

const Resume = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<ResumeData>>({
    tone: "Professional",
    template: "Classic",
    language: "EN",
    yearsOfExperience: 0,
  });

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const updateFormData = (data: Partial<ResumeData>) => {
    setFormData({ ...formData, ...data });
  };

  const nextStep = () => setStep(Math.min(step + 1, totalSteps));
  const prevStep = () => setStep(Math.max(step - 1, 1));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 bg-gradient-hero">
        <div className="container max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
              AI Resume Builder
            </h1>
            <Progress value={progress} className="h-2" />
            <p className="text-center text-sm text-muted-foreground mt-2">
              Step {step} of {totalSteps}
            </p>
          </div>

          <div className="bg-card rounded-lg shadow-lg p-6 md:p-8 animate-fade-in">
            {step === 1 && (
              <BasicInfoStep
                data={formData}
                updateData={updateFormData}
                onNext={nextStep}
              />
            )}
            {step === 2 && (
              <ProfessionalInfoStep
                data={formData}
                updateData={updateFormData}
                onNext={nextStep}
                onBack={prevStep}
              />
            )}
            {step === 3 && (
              <ReviewStep
                data={formData as ResumeData}
                onBack={prevStep}
              />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;
