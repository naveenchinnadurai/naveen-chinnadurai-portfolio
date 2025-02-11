import collegeDuesOff from '../assets/projectThumbnail/collegeDuesOff.png';
import jobBoard from '../assets/projectThumbnail/jobBoard.png';
import bookStore from '../assets/projectThumbnail/bookstore.png';
import whiteBoard from '../assets/projectThumbnail/whiteBoard.png';
import ageCalculator from '../assets/projectThumbnail/ageCalci.png';
import webCalci from '../assets/projectThumbnail/calci.png';
import cgpaCalci from '../assets/projectThumbnail/cgpaCalci.png';
import flames from '../assets/projectThumbnail/flames.png';
import greenBite from '../assets/projectThumbnail/greenBite.png';
import jobSearch from '../assets/projectThumbnail/jobSearch.png';
import symposium from '../assets/projectThumbnail/symposium.png';
import travorZween from '../assets/projectThumbnail/travorZween.png';
import ZweenEdu from '../assets/projectThumbnail/zweenEdu.png';
import zmail from '../assets/projectThumbnail/zmail.png';
import marketing from '../assets/projectThumbnail/marketing.png';
import zweenTextiles from '../assets/projectThumbnail/zweenTextiles.png';

import { ProjectType } from './types';


export const certifications = [
    { name: "Core Java Specialization", issuer: "Learn Quest (Coursera)", date: "Dec 2023" },
    { name: "Front-End Development Libraries", issuer: "Free Code Camp", date: "Dec 2023" },
    { name: "Python Essentials", issuer: "Kaggle", date: "October 2022" },
    { name: "Google AI Essentials", issuer: "Google (Coursera)", date: "June 2024" },
    { name: "AI creation Studio", issuer: "Yugam", date: "March 2023" },
    { name: "ChatGPT for Everyone", issuer: "Guvi", date: "Sept 2023" },
    { name: "Modern Javascript for Beginners", issuer: "Udemy", date: "July 2024" },
]

export const awards = [
    {
        title: "College Symposiums and Events",
        description:
            "Earned awards for securing 1st, 2nd, and 3rd positions in various categories such as Paper Presentations, Coding Competitions, and Web Development Challenges.",
    },
    {
        title: "HackerRank Skill Test",
        description: "Successfully passed the HackerRank skill test for the React Frontend Developer domain.",
    },
]

export const education = [
    {
        degree: "B.E. Computer Science & Engineering",
        institution: "Sengunthar Engineering College",
        location: "Tiruchengode, Tamilnadu",
        duration: "Expected Graduation, May 2025",
        details: [
            "CGPA: 8.25 (until 6th semester)",
            // "Related Coursework: Data Structures & Algorithms, Objects & Design, Computer Organization & Programming, Machine Learning, Artificial Intelligence, Object-Oriented Programming, Statistics & Applications.",
        ],
    },
    {
        degree: "Higher Secondary Education",
        institution: "Vidya Mandir Public School (CBSE)",
        location: "Ariyalur, Tamilnadu",
        duration: "2020-2021",
        details: [
            "Percentage: 80%",
            // "Related Coursework: Computer Science, Maths, Physics, Chemistry, English",
        ],
    },
    {
        degree: "Senior Secondary Education",
        institution: "Varadha Vikas Public School (CBSE)",
        location: "Perambalur, Tamilnadu",
        duration: "2018-2019",
        details: [
            "Percentage: 86%",
            // "Related Coursework: Computer Science, Maths, Physics, Chemistry, English",
        ],
    }
]

export const projects: ProjectType[] = [
    {
        name: "College Dues Off",
        description: "A mobile app to streamline college processes, enabling students to track dues, access internal marks, download mark-sheets, and request certificates.",
        techStack: ["reactNative", "typescript", "tailwindcss", "expogo", "postgresql"],
        repo: "https://github.com/naveenchinnadurai/college-dues-off",
        liveSite: null,
        image: collegeDuesOff
    },
    {
        name: "Job Board",
        description: "A full-stack application for job seekers and employers. Employees can search and apply for jobs, while employers can post job openings and manage applications.",
        techStack: ["react", "typescript", "tailwindcss", "nodejs"],
        repo: "https://github.com/NaveenChinnadurai/job-board",
        liveSite: null,
        image: jobBoard
    },
    {
        name: "Book Store Web App",
        description: "A multi-page website using Google Books API to fetch and display book details including author, rating, price, and purchase links.",
        techStack: ["react", "typescript", "tailwindcss", "supabase"],
        repo: "https://github.com/NaveenChinnadurai/bookstore-react-web",
        liveSite: 'https://zween-book-store.vercel.app/',
        image: bookStore
    },
    {
        name: "White Board",
        description: "A full-stack application for job seekers and employers. Employees can search and apply for jobs, while employers can post job openings and manage applications.",
        techStack: ["react", "typescript", "tailwindcss", "postgresql", "drizzleorm"],
        repo: "https://github.com/NaveenChinnadurai/job-board",
        liveSite: null,
        image: whiteBoard
    },
    {
        name: "Travel Website",
        description: "A responsive website for a travel agency with a multi-page interface showcasing over 10 tourist destinations, categorized sections, and detailed offers.",
        techStack: ["react", "tailwindcss", "javascript"],
        liveSite: "https://travor-zween-travel.vercel.app/",
        repo: "https://github.com/NaveenChinnadurai/Travor_Zween-Travel-web",
        image: travorZween
    },
    {
        name: "CGPA Calculator Web",
        description: "A web application that follows Anna University's grading system, allowing students to track their semester-wise and cumulative CGPA efficiently.",
        techStack: ["nextjs", "tailwindcss", "typescript"],
        repo: "https://github.com/naveenchinnadurai/cgpa_calculator",
        liveSite: "https://zween-cgpa-calculator.vercel.app/",
        image: cgpaCalci
    },
    {
        name: "Job-Seeking Website",
        description: "A one-page React application that streamlines job searching with real-time job updates, filtering options, and a responsive interface.",
        techStack: ["react", "html", "css", "javascript"],
        repo: "https://github.com/naveenchinnadurai/techHolic-react-web-app",
        liveSite: "https://naveenchinnadurai.github.io/techHolic-react-web-app",
        image: jobSearch
    },
    {
        name: "Symposium Event Details Web",
        description: "A multi-page website offering detailed descriptions of departmental events for a college symposium, deployed and hosted on Vercel.",
        techStack: ["react", "css", "html"],
        repo: 'https://github.com/naveenchinnadurai/Clg-Symposium-web',
        liveSite: "https://techsym-sarayu-2k23.vercel.app/",
        image: symposium
    },
    {
        name: "Zween Educational Website",
        description: "A multi-page website showcasing an educational organization, its courses, and relevant details with a seamless user experience.",
        techStack: ["react", "javascript", "css"],
        repo: "https://github.com/naveenchinnadurai/Zween-Education-WebApp",
        liveSite: "https://zween-education-web.vercel.app/",
        image: ZweenEdu
    },
    {
        name: "GreenBite Restaurant ",
        description: "A React-based restaurant landing page displaying the restaurant’s menu and details, designed with an elegant UI.",
        techStack: ["react", "tailwindcss", "typescript"],
        repo: "https://github.com/naveenchinnadurai/greenBite-reactWeb",
        liveSite: "https://green-bite-react-web.vercel.app/",
        image: greenBite
    }, {
        name: "Zween Textiles",
        description: "A multipage landing page designed for a textile company, showcasing their products, features, and services to potential clients and visitors.",
        techStack: ["react", "bootstrap", "javascript"],
        repo: "https://github.com/naveenchinnadurai/zween_textile",
        liveSite: "https://zween-textile.vercel.app/",
        image: zweenTextiles
    },
    {
        name: "Calculator Web App",
        description: "Simple Arithmetic Calculator that performs operations such as Addition, Subraction, Multiplication and Division is developed using reactjs and deployed in gh-pages.",
        techStack: ["react", "css", "javascript"],
        repo: "https://github.com/naveenchinnadurai/Calculator_using_ReactJs",
        liveSite: "https://naveenchinnadurai.github.io/Calculator_using_ReactJs/",
        image: webCalci
    },
    {
        name: "Calculator Mobile App",
        description: "Developed a Mobile Application with Expo to perform arithmatic calculations in mobile devices",
        techStack: ["reactNative", "expoGo", "javascript"],
        repo: "https://github.com/naveenchinnadurai/calculator-reactNativeApp",
        liveSite: null,
        image: webCalci
    },
    {
        name: "Age Calculator",
        description: "Calculate your age and the day of the week by entering your date of birth and selected date, month, and year.",
        techStack: ["react", "css", "javascript"],
        repo: "https://github.com/naveenchinnadurai/age-calculator-react-app",
        liveSite: "https://naveenchinnadurai.github.io/age-calculator-react-app/",
        image: ageCalculator
    },
    {
        name: "Flames Felationship Finder",
        description: " The Flames Relationship Calculator is a Python desktop app built with Kivy, determining relationship status using the traditional 'FLAMES' method.",
        techStack: ["python", "kivy"],
        repo: "https://github.com/naveenchinnadurai/flames_python_kivy_project",
        liveSite: null,
        image: flames
    },
    {
        name: "Zmail - A Mail Platform",
        description: "Building a full-stack Gmail-like interface for sending and receiving emails, with both front-end and back-end functionality.",
        techStack: ["nextjs", "typescript", "tailwindcss", "postgresql", "drizzleorm"],
        repo: "https://github.com/naveenchinnadurai/zmail",
        liveSite: "https://naveenchinnadurai.github.io/age-calculator-react-app/",
        image: zmail
    },
    {
        name: "Marketing Landing Page",
        description: "landing page for a sales automation and marketing company, showcasing key features, customer testimonials, and seamless engagement tools.",
        techStack: ["react", "javascript", "tailwindcss"],
        repo: "https://github.com/naveenchinnadurai/zween_marketing_landing_page",
        liveSite: "https://zween-landing-page.vercel.app/",
        image: marketing
    }
];


