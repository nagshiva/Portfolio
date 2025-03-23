export interface Project {
  id: number;
  title: string;
  description: string;
  githubLink: string;
  demoLink: string;
  techStack: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  year: string;
  description: string;
}

export interface JourneyItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
}

export interface Interest {
  id: number;
  name: string;
  icon: string;
}

export interface Achievement {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}