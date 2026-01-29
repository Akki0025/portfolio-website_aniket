
import { Github, Linkedin, Mail } from "lucide-react";

export const data = {
    hero: {
        name: "Aniket Kumar",
        role: "Frontend Developer",
        subtitle: "Frontend Developer",
        description: "Frontend Developer focused on building clean, scalable interfaces used by real users in production.",
        cta: {
            primary: "View Experience",
            secondary: "Download Resume (PDF)",
        },
    },
    about: {
        description: "Open to discussing new projects, creative ideas, or opportunities to contribute to your vision.",
    },
    experience: [
        {
            role: "Full Stack Developer",
            company: "MyTarari",
            project: "Digital Voting & Public Engagement Platform", // New field
            client: "Client: Vishal Prashant, MLA – Tarari, Bihar", // New field
            date: "Sep 2022 – Present",
            description: "A civic engagement platform built for the current MLA of Tarari to help citizens participate in surveys, opinion polls, and share constituency feedback. Designed to be simple, transparent, and mobile-friendly, enabling inclusive public participation across urban and rural communities.",
            details: [],
            tech: ["React", "Node.js", "MySQL", "System Design", "Security"],
            link: "https://www.mytarari.com",
            // github removed
        },
    ],
    projects: [
        {
            title: "High-Performance E-Commerce Platform",
            role: "Lead Frontend Engineer",
            context: "B2C Retail Platform",
            year: "2024",
            description: "Engineered a fully responsive e-commerce platform with dynamic filtering, real-time cart management, and a custom admin dashboard.",
            tech: ["Next.js", "Tailwind CSS", "MySQL", "Stripe"],
            links: {
                github: "https://github.com/Akki0025",
                demo: null,
            },
        },
        {
            title: "Intelligent Health – AI-Powered Telemedicine",
            role: "Full Stack Developer",
            context: "Telemedicine Startup",
            year: "2023",
            description: "Real-time video consultation platform with AI-powered smart prescription generation. Handles encrypted medical records for 500+ patients.",
            tech: ["WebRTC", "AI / ML", "MERN Stack", "HIPAA"],
            links: {
                github: "https://github.com/Akki0025",
                demo: null,
            },
        },
    ],
    // "Technical Arsenal"
    skills: {
        frontend: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS", "CSS Modules"],
        backend: ["Node.js", "Express.js", "REST APIs", "Auth & Security"],
        database: ["MySQL", "MongoDB", "Prisma"], // Redis removed
    },
    education: [
        {
            school: "Bennett University",
            degree: "Bachelor of Technology – Computer Science & Engineering",
            gpa: "GPA: 7.7/10",
        },
        {
            school: "Maharaja College",
            degree: "Class XII (Senior Secondary) – Science (PCM)",
            marks: "82.4%",
        },
    ],
    achievements: [
        {
            title: "Data Structures",
            issuer: "University of California San Diego",
            link: "https://www.coursera.org/account/accomplishments/verify/NQ2T6FULV8QS",
        },
        {
            title: "Algorithmic Toolbox",
            issuer: "University of California San Diego",
            link: "https://www.coursera.org/account/accomplishments/verify/RQLTE7EJKLP3",
        },
        {
            title: "Improving Deep Neural Networks",
            issuer: "DeepLearning.AI",
            link: "https://www.coursera.org/account/accomplishments/verify/AR1HH656OI42",
        },
    ],
    contact: {
        title: "Let's build something\ntogether.",
        description: "Open to discussing new projects, creative ideas, or opportunities to contribute to your vision.",
        email: "akki620182@gmail.com",
        phone: "+91-9728012810",
        social: {
            github: "https://github.com/Akki0025",
            linkedin: "https://linkedin.com/",
        },
    },
    social: [
        {
            name: "GitHub",
            url: "https://github.com/Akki0025",
            icon: Github,
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/",
            icon: Linkedin,
        },
    ],
    footer: {
        copyright: "© 2026 Aniket Kumar",
    }
};
