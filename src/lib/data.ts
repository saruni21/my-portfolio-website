import { PlaceHolderImages } from './placeholder-images';

function getImage(id: string) {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    // Return a default or throw an error
    return {
      imageUrl: 'https://picsum.photos/seed/default/600/400',
      imageHint: 'placeholder',
    };
  }
  return {
    imageUrl: image.imageUrl,
    imageHint: image.imageHint,
  };
}

export const profile = {
  name: "Saruni Martin",
  title: "Computer Science Student",
  introduction:
    "I'm a passionate CS student with a love for building innovative solutions. I thrive on turning complex problems into elegant, user-friendly applications. Currently exploring the world of AI, Cybersecurity and full-stack development.",
  profilePicture: getImage('profile'),
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/saruni-saning-o",
  github: "https://github.com/saruni21",
  whatsapp: "https://wa.me/+85290557671",
};

export const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "SQL", "C++"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    items: ["Node.js", "MongoDB", "Firebase", "PostgreSQL", "Supabase"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Docker", "Google Cloud", "n8n", "AWS", "Figma", "Visual Paradigm"],
  },
  {
    category: "AI & Machine Learning",
    items: ["HuggingFace", "LLM Development", "RAG", "Prompt Engineering", "LangChain", "LlamaIndex"],
  }
];

export const experience = [
    {
      title: "Associate Consultant on AI in Cybersecurity Development",
      company: "eWalker Consulting Ltd",
      dates: "September 2025 - Present (Expected finish date: May 2025)",
      description: "Researching and developing AI-powered solutions to automate and enhance offensive security operations and reporting workflows. Core responsibilities include evaluating AI models for penetration testing, and designing and implementing Retrieval-Augmented Generation (RAG) systems for accurate, automated security audit report generation.",
      skills: ["AI Development", "RAG Development", "Penetration Testing Automation", "Cybersecurity AI Research", "LLM Prompt Engineering", "Vector Databases"],
    },
    {
      title: "Creative Developer Intern (Remote)",
      company: "Huang He Consultancy, Singapore",
      dates: "June 2025 - August 2025 (8 weeks)",
      description: "Designed and developed a responsive website using Figma, Typescript and WordPress, focusing on UX/UI optimization and performance enhancements. Collaborated with stakeholders to transform business requirements into functional digital solutions, ensuring brand consistency and seamless operation. Conducted testing, debugging, and regular content and plugin updates, while proposing innovative improvements to advance user experience.",
      skills: ["Figma", "WordPress", "Responsive Web Development", "UX/UI Optimization", "TypeScript", "SEO Optimization", "Testing & Debugging"],
    },
    {
      "title": "Research and Investment Analyst",
      "company": "DF Group Ltd",
      "dates": "June 2025 - August 2025",
      "description": "Analyzed investment trends, risk factors, and performance metrics to inform investment decisions. Prepared research reports, infographics, financial models, and pitch decks. Conducted due diligence on potential investments through financial analysis, market research, and competitor analysis to identify risks. Monitored portfolio company performance and assisted in preparing Investment Committee reports. Used data visualization tools including Python, Power BI, and Tracxn to analyze trends.",
      "skills": ["Python", "Data Visualization", "Investment Due Diligence", "Market Research", "Risk Analysis", "AI Tools", "Tracxn"]
    },
  ];

export const projectCategories = ["All", "Web App", "Mobile", "AI"];

export const projects = [
  {
    title: "Plan-It",
    description:
      "My personal web application for organizing tasks across classwork, extracurriculars, job and internship applications, and personal projects. Designed to centralize planning and activity management in a single interface",
    image: getImage('project-1'),
    tags: ["Tailwind CSS", "Next.js", "Personal development", "Typescript"],
    category: "Web App",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const certifications = [
  {
    name: "Next.js: Creating and Hosting a Full-Stack Site",
    authority: "Shaun Wassell (LinkedIn Learning)",
    date: "January 2026",
    url: "https://www.linkedin.com/learning/certificates/a016b5a29a3ee0264ae938fea5d23ac523cba3012d05c83851ca3825671dde83?trk=share_certificate",
  },
  {
    name: "Learning Amazon Web Services(AWS) for Developers",
    authority: "LinkedIn Learning",
    date: "January 2026",
    url: "https://www.linkedin.com/learning/certificates/2759ba8fc8874218a18100502157f515061374d7c82907f895dbd8bf23442129?trk=share_certificate",
  },
  {
    name: "Fundamentals of AI Engineering: Principles and Practical Applications",
    authority: "LinkedIn Learning",
    date: "January 2026",
    url: "https://www.linkedin.com/learning/certificates/4b2bfb1da7ab86536885b467db330662dd35d4d30cb9d1f6cc18599b4dcb8bd6?trk=share_certificate",
  },
];

export const hobbies = [
  {
    name: "Photography",
    image: getImage('hobby-photography'),
  },
  {
    name: "Hiking",
    image: getImage('hobby-hiking'),
  },
  {
    name: "Music",
    image: getImage('hobby-music'),
  },
  {
    name: "Reading",
    image: getImage('hobby-reading'),
  },
];

export const navLinks = [
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
