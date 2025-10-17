const API_ENDPOINT = "https://n8n.d2group.co/webhook/resume";

export interface ResumeFormData {
  fullName: string;
  email: string;
  phone: string;
  targetRole: string;
  jobDescription: string;
  tone: string;
  template: string;
  language: string;
  avatar?: string; // base64
  currentTitle: string;
  yearsOfExperience: number;
  skills: string[];
  education: string;
  professionalSummary: string;
  flow: "create" | "download";
  resume_html?: string;
}

export interface ResumeCheckData {
  resume: string; // base64
  flow: "check";
}

export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      // Remove the data URL prefix to get pure base64
      const base64 = result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = (error) => reject(error);
  });
};

export const submitResume = async (data: ResumeFormData) => {
  const payload = {
    ...data,
    utm_source: "landing_page",
    campaign_id: "default",
    submitted_at: new Date().toISOString(),
  };

  // No timeout - AI processing can take a long time
  const controller = new AbortController();
  
  const response = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    signal: controller.signal,
    // Remove default timeout by not setting it
    keepalive: true,
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  return response.json();
};

export const checkResume = async (data: ResumeCheckData) => {
  const payload = {
    ...data,
    utm_source: "landing_page",
    campaign_id: "default",
    submitted_at: new Date().toISOString(),
  };

  // No timeout - AI processing can take a long time
  const controller = new AbortController();

  const response = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    signal: controller.signal,
    keepalive: true,
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  return response.json();
};
