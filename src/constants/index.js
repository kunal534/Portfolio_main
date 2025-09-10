import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  market,
  python,
  iocl,
  digimantra,
  goldenflitch,
  ciphor_bot,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: python,
  },
  {
    title: "Stock Market Trader",
    icon: market,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Business Development Executive",
    company_name: "Goldenflitch",
    company_website: "https://goldenflitch.com",
    icon: goldenflitch,
    iconBg: "#383E56",
    date: "Aug 2024 - Dec 2024",
    points: [
      "Directed project coordination and operations by managing client interactions.",
      "Served as a key point of contact between clients and the company.",
      "Developed strategic pitches and detailed proposals to drive lead generation through marketplaces.",
    ],
  },
  {
    title: "Business Development Intern",
    company_name: "DigiMantra Labs",
    company_website: "https://www.digimantralabs.com",
    icon: digimantra,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Aug 2024",
    points: [
      "Designed a WhatsApp Business API automation to auto-respond to client queries, capture idea details, generate summaries, and push updates to Slack enabling faster BDE allocation and improving client closure rate by 8%.",
      "Created tailored pitches and proposals on marketplaces and outsourcing platforms, leveraging market research to drive lead generation.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Indian Oil Corporation Limited (IOCL)",
    company_website: "https://www.iocl.com",
    icon: iocl,
    iconBg: "#383E56",
    date: "June 2022 - Aug 2022",
    points: [
      "Developed a machine learning model to predict solar power generation based on weather and temporal data.",
      "Leveraged LSTM networks to analyze energy consumption patterns, achieving a prediction accuracy of 92%.",
    ],
  },
];

const projects = [
  {
    name: "Cipher-Bot",
    description:
      "Developed a RAG-based chatbot using LangChain.js and Meta Llama to process user queries with real-time NLP, improving response accuracy and conversational flow. Integrated Redis for session-based caching to optimize response time, ensuring fast and efficient user interactions.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "pink-text-gradient",
      },
      {
        name: "Redis",
        color: "orange-text-gradient",
      },
    ],
    image: ciphor_bot,
    source_code_link: "https://ciphor-bot.vercel.app",
  },
  {
    name: "DOC-CRAWLER",
    description:
      "Developed a Python-based web document crawler with a Streamlit interface that extracts technical content from webpages, summarizes it using the OpenAI API, and organizes results in a structured directory to improve information retrieval efficiency.**",
    tags: [
      {
        name: "Python & Streamlit",
        color: "blue-text-gradient",
      },
      {
        name: "BeautifulSoup",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI API (via RapidAPI)",
        color: "pink-text-gradient",
      },
      {
        name: "Modular Design Pattern",
        color: "orange-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://doc-modular.streamlit.app",
  },
  {
    name: "Topic Tracker",
    description:
      "Built an AI-powered system that uses web crawlers to monitor user-defined topics across Reddit, YouTube, and Google, automatically summarizes updates with ChatGPT and Mistral AI, and stores results for efficient, context-based retrieval, reducing redundant browsing by 20–30%.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "LangChain",
        color: "pink-text-gradient",
      },
      {
        name:"Mistral AI API",
        color: "orange-text-gradient"
      },
      {
        name: "Task Scheduler",
        color: "yellow-text-gradient",
      }
    ],
    image: tripguide,
    source_code_link: "https://github.com/kunal534/Topic_Tracker",
  },
];

export { services, technologies, experiences, projects };
