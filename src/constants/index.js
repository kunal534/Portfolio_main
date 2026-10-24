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
  jobit,
  threejs,
  orderbook,
  market,
  python,
  americanExpress,
  iocl,
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
    title: "Software Development Apprentice",
    company_name: "American Express",
    company_website: "https://www.americanexpress.com",
    company_location: "Gurugram, India",
    icon: americanExpress,
    iconBg: "#006FCF",
    date: "Jan 2026 - Present",
    points: [
      "Consolidated multiple micro-frontend projects into a single monolithic deployment, eliminating dependency conflicts and release coordination overhead across 8 interdependent repositories.",
      "Built reusable UI components and custom logic layers using React and Apollo Client (GraphQL) for dashboards serving 1,000+ internal users across multiple business units.",
      "Maintained and improved existing CI/CD pipelines, wrote technical documentation and migration guides, and kept test coverage around 90% through code reviews and active sprint participation.",
    ],
  },
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
    name: "CIPHER-BOT",
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
    name: "ORDERBOOK ENGINE",
    description:
      "Built an in-progress low-latency limit order book and matching engine in C++17/20 with price-time priority. Uses std::map, std::list, and unordered_map with stored iterators for O(1) order lookup and cancellation. Supports Market, GTC, FillAndKill, FillOrKill, and GFD orders, uses std::mutex and std::scoped_lock for thread safety, and emits trade events and aggregated market-depth data.",
    tags: [
      {
        name: "C++17/20",
        color: "blue-text-gradient",
      },
      {
        name: "STL",
        color: "green-text-gradient",
      },
      {
        name: "Multithreading",
        color: "pink-text-gradient",
      },
      {
        name: "RAII",
        color: "orange-text-gradient",
      },
      {
        name: "Move Semantics",
        color: "yellow-text-gradient",
      },
      {
        name: "Smart Pointers",
        color: "yellow-text-gradient",
      },
    ],
    image: orderbook,
    source_code_link: "https://github.com/kunal534/Quant",
  },
];

export { services, technologies, experiences, projects };
