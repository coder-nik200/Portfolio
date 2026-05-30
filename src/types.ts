/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  name: string;
  description: string;
  features: string[];
  techStack: string[];
  liveDemo?: string;
  githubUrl?: string;
  imageAlt?: string;
  imageUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  workDone: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  avatarUrl?: string;
}

export interface MessageSubmission {
  name: string;
  email: string;
  message: string;
  timestamp: string;
}
