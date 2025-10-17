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
  flow: "check" | "download";
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

  const response = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    const resClone = response.clone();
    try {
      return await response.json();
    } catch {
      return await resClone.text();
    }
  }
  return await response.text();
};

export const checkResume = async (data: ResumeCheckData) => {
  const payload = {
    ...data,
    utm_source: "landing_page",
    campaign_id: "default",
    submitted_at: new Date().toISOString(),
  };

  const response = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    const resClone = response.clone();
    try {
      return await response.json();
    } catch {
      return await resClone.text();
    }
  }
  return await response.text();
};
