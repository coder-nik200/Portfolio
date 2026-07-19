import {
  Project,
  SkillCategory,
  Experience,
  Certification,
  Service,
  Testimonial,
} from "./types";

export const personalData = {
  name: "Nitish Bharti",
  roleTitle: "Full Stack & AI Developer",
  roles: [
    "Full Stack Developer",
    "Frontend Developer",
    "AI Workflow Developer",
  ],
  shortIntro:
    "Passionate developer focused on building modern web applications, AI-powered platforms, and premium user experiences. Interested in scalable systems, clean UI/UX, automation, and real-world problem solving.",
  aboutMe:
    "Started as a curious learner exploring technology and programming, and now growing into a passionate developer focused on building modern web applications, AI-based platforms, and creative digital experiences. Constantly learning, improving, and turning ideas into real-world projects through hands-on development.",

  education: {
    qualification: "BCA (Bachelor of Computer Applications)",
    currentlyLearning: [
      "Data Structures and Algorithms",
      "DevOps",
      "Full Stack Development",
      "AI Integrations",
      "Cloud and Deployment",
    ],
  },

  skills: [
    {
      category: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Tailwind CSS",
        "Responsive Design",
        "Motion / Animations",
      ],
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "Firebase",
        "REST APIs",
        "Serverless Functions",
      ],
    },
    {
      category: "Database",
      skills: ["MongoDB", "Firebase Firestore", "Local Storage", "IndexDB"],
    },
    {
      category: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Netlify",
        "Vercel",
        "Vite",
        "npm/pnpm",
      ],
    },
    {
      category: "Other Skills",
      skills: [
        "Problem Solving",
        "Team Collaboration",
        "Technical Support",
        "Communication Skills",
        "UI/UX Prototyping",
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "medicity",
      name: "Medicity",
      description:
        "Medicity is an online pharmacy that lets users browse medicines, upload prescriptions, and order healthcare products with ease.",
      features: [
        "Medicine browsing",
        "Prescription uploads",
        "Shopping cart",
        "Secure authentication",
        "Order management",
        "Responsive interface",
        "Admin dashboard",
      ],
      techStack: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      liveDemo: "https://medicity-frontend-zysc.vercel.app/",
      githubUrl: "https://github.com/coder-nik200/Medicity.git",
      imageUrl: "/image.png",
    },
    {
      id: "study-hub",
      name: "StudyHub",
      description:
        "A modern online learning and study management platform designed for students to improve productivity and learning experience.",
      features: [
        "Course management system",
        "Modern responsive UI",
        "Student dashboard",
        "Notes and resource section",
        "Authentication system",
        "Smooth user experience",
        "Mobile responsive design",
      ],
      techStack: ["React", "Tailwind CSS", "Firebase", "JavaScript", "Node.js"],
      liveDemo: "https://study-frontend-pi.vercel.app/",
      githubUrl: "https://github.com/coder-nik200/Study-Hub.git",
      imageUrl: "/image2.png",
    },
    {
      id: "book-mart",
      name: "BookMart",
      description:
        "BookMart is an online bookstore that allows users to discover books, manage their cart, save favorites, and place orders through a clean and user-friendly shopping experience.",
      features: [
        "Book browsing",
        "Advanced search & filters",
        "Shopping cart",
        "Wishlist",
        "Secure authentication",
        "Order management",
        "Responsive design",
      ],
      techStack: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      liveDemo: "https://book-mart-frontend.vercel.app/",
      githubUrl: "https://github.com/coder-nik200/Book-Mart.git",
      imageUrl: "/image3.png",
    },
  ] as Project[],

  certifications: [
    {
      name: "Full Stack Software Development",
      issuer: "Architech Labs Training",
      date: "Dec 2025",
    },
    {
      name: "AI & Modern Workflow Automation Specialist",
      issuer: "Nexora AI Systems",
      date: "Mar 2026",
    },
    {
      name: "Advanced Responsive Frontend & Motion Design",
      issuer: "Dev Alliance Org",
      date: "Oct 2025",
    },
  ] as Certification[],

  services: [
    {
      icon: "code",
      title: "Interactive Frontend Crafting",
      description:
        "Delivering cinematic, fluid, and responsive user interfaces using React, TypeScript, and high-performance motion layers.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      icon: "cloud",
      title: "Backend & Serverless Architectures",
      description:
        "Configuring robust Node.js APIs, Firebase database schemas, and clean Firestore security rule validations.",
      tags: ["Node.js", "Express", "Firebase", "REST APIs"],
    },
    {
      icon: "smart_toy",
      title: "AI Workflows & Automations",
      description:
        "Integrating LLM interfaces, automated work pipelines, smart system agents, and productivity metrics.",
      tags: ["Gemini AI SDK", "Prompt Engineering", "API Proxy Routing"],
    },
  ] as Service[],

  testimonials: [
    {
      name: "Anand Verma",
      role: "Lead Developer",
      company: "Architech Labs",
      text: "Nitish demonstrated outstanding dedication during his 6-month internship. He picked up complex React and Firebase integration patterns at lightning speed and was instrumental in debugging critical deployment code.",
    },
    {
      name: "Elena Rostova",
      role: "Product Owner",
      company: "Nexora Solutions",
      text: "Nitish's passion for fine-grained motion design and robust system architectures sets him apart. He turned our initial concept into a highly responsive, polished interface that our clients absolutely love.",
    },
    {
      name: "Rajesh Malhotra",
      role: "Technical Advisor",
      company: "StudyHub Creator Team",
      text: "Nitish worked untiringly to ensure StudyHub had flawless responsiveness on smaller viewports. His attention to neat code organization and client-side logic optimization is pristine.",
    },
  ] as Testimonial[],

  languages: [
    { name: "English", level: "Professional Working" },
    { name: "Hindi", level: "Native / Bilingual" },
  ],

  hobbies: [
    "Watching cinema",
    "Building Web Applications",
    "Exploring AI Tools",
    "Learning New Technologies",
    "UI/UX Designing",
    "Gaming",
    "Problem Solving",
    "Cricket",
  ],

  careerGoals: [
    "Become a professional full stack developer",
    "Master DSA and problem solving",
    "Learn advanced DevOps and cloud technologies",
    "Build scalable AI products",
    "Work on real-world impactful projects",
  ],

  contacts: {
    email: "codesnippet17@gmail.com",
    location: "Amritsar / Remote",
    github: "https://github.com/coder-nik200",
    linkedin: "https://www.linkedin.com/in/nitish-kumar-bharti-631a37359/",
    twitter: "https://x.com/code_Bharti07",
    instagram: "https://www.instagram.com/wohh.nitish",
  },
};
