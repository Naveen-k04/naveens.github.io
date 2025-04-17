import { diffProps } from "@react-three/fiber/dist/declarations/src/core/utils";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  java,
  dp,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projetcs",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Creative Coder",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "redux",
    icon: redux,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "java",
    icon: java,
  }
];

const experiences = [
  {
    title: "ExcelR-Raising Excellence",
    company_name: "Java Full Stack Developer",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Aug 2024 - March 2025",
    points: [
      "Successfully completed the Java Full Stack Development course at ExcelR Institute, covering end-to-end software development with a strong focus on real-world application building.",
      "Developed a solid foundation in front-end technologies including HTML, CSS, JavaScript, and React.js, creating responsive and user-friendly web interfaces.",
      "Gained practical experience in back-end development using Core Java, JDBC, and Spring Boot, along with database integration using SQL and MySQL.",
      "Strengthened skills in Git, GitHub, and database management using MySQL.",
    ],
  },
  {
    title: "Arignar Anna College",
    company_name: "Bachelor of Computer Applications(BCA)",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - June 2024",
    points: [
      "Completed Bachelor of Computer Applications (BCA) from Arignar Anna College, affiliated with Periyar University.",
      "Gained strong foundational knowledge in programming languages including Python, C, C++, and Java.",
      "Studied essential computer science subjects such as Data Structures & Algorithms (DSA), DBMS, and implemented database operations using JDBC.",
      "Applied learning through academic projects and hands-on practice, improving logical thinking, coding, and problem-solving skills.",
    ],
  },
  {
    title: "Concordia Higher Secondary School",
    company_name: "Computer commerce",
    icon: shopify,
    iconBg: "#383E56",
    date: "2021",
    points: [
      "Completed Higher Secondary Education (HSC) with a specialization in Computer Commerce at Concordia Higher Secondary School, Bargur.",
      "Studied key subjects including Commerce, Accountancy, Economics, and Computer Science.",
      "Gained foundational knowledge in computer applications, programming basics, and office automation tools.",
      "Developed analytical and logical thinking skills through computer theory and practical lab sessions.",
    ],
  },
  {
    title: "Concordia Higher Secondary School",
    company_name: "SSLC",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2018",
    points: [
      "Completed Secondary School Leaving Certificate (SSLC) at Concordia Higher Secondary School, Bargur.",
      "Studied core subjects including Mathematics, Science, Social Science, English, and Tamil.",
      "Built a strong academic foundation and developed disciplined study habits.",
      "Actively participated in school activities and maintained a good academic record.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "3D_Portfolio",
    description:
      "This 3D portfolio utilizes Three.js for immersive 3D graphics and React Three Fiber for seamless integration with React. Styled with TailwindCSS for fast, responsive design and enhanced with Framer Motion for smooth animations and interactive transitions, this project showcases a dynamic, modern, and visually engaging user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
    ],
    image: dp,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
