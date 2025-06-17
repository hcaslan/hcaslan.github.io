import { IEnhancedProject } from "../components/atoms/ProjectCard";

export const enhancedProjects: IEnhancedProject[] = [
  {
    name: "EasyHR",
    description: "Human Resources App",
    details: "The EasyHR Website is a comprehensive platform designed to streamline and simplify human resources management for organizations of all sizes. This web application provides a centralized hub for managing employee data, processing payroll, and automating various HR tasks. It utilizes Java for the backend, and React with TypeScript for the frontend.",
    logo: "easyhr-logo.png",
    github: "https://github.com/hcaslan/EasyHR.git",
    website: "https://easyhr.store/",
    images: [
      "https://github.com/user-attachments/assets/c88341cb-ce2c-4286-8bcb-d279dedbd6ed",
      "https://github.com/user-attachments/assets/c4120f4a-7ac2-459f-a82c-597c1600458c",
      "https://github.com/user-attachments/assets/eadc4c2e-2e81-415c-9f55-9eddd6730a2e",
    ],
    githubButton: true,
    websiteButton: true,
    descriptionButton: true,
    status: true,
    
    // Enhanced fields
    tagline: "Human Resources Management",
    category: "Enterprise Software",
    projectStatus: "completed",
    startDate: "2024-07",
    endDate: "2024-09",
    duration: "2 months",
    team: {
      size: 5,
      role: "Full Stack Developer",
    },
    technologies: {
      frontend: ["React", "TypeScript", "Material-UI", "Redux"],
      backend: ["Java", "Spring Boot", "Spring Security"],
      database: ["PostgreSQL", "Redis"],
      tools: ["Docker", "AWS", "Git"]
    },
    features: [
      "Employee Data Management",
      "Payroll Processing",
      "Leave Management",
      "Report Generation",
      "Multi-tenant Architecture",
      "Role-based Access Control"
    ],
    challenges: [
      "Designing scalable multi-tenant architecture", 
    ],
  },
  {
    name: "RBCDD Algorithm",
    description: "Rule Based Door Detection Algorithm",
    logo: "rbcdd.png",
    details: "The closed-door detection problem is a significant area of research in fields like robotics and building information modeling, primarily due to the importance of door locations in delineating spaces such as rooms and corridors. Traditional methods have relied on visual data, which can be hindered by varying lighting conditions and the camera's angle and distance from the door. In this study, we utilized point cloud data to address these challenges and leverage the 3D characteristics of the scene. Our approach was implemented using C++, the Point Cloud Library, and Ubuntu 22.04. We proposed a rule-based method to identify closed doors and determine their positions, extracting rules based on the relationship between walls and hinged doors. Experiments conducted with the ESOGU DOORS dataset demonstrated the effectiveness of our method, achieving a door detection rate of 95.93%.",
    github: "https://github.com/hcaslan/RBCDD.git",
    website: "",
    images: [
      "https://i.imgur.com/Q1wez0G.png",
      "https://i.imgur.com/E4YNvw0.png", 
      "https://i.imgur.com/giSofTP.png",
    ],
    githubButton: true,
    websiteButton: false,
    descriptionButton: true,
    status: true,
    
    // Enhanced fields
    tagline: "Rule-Based Algorithm",
    category: "Computer Vision",
    projectStatus: "completed",
    startDate: "2021-02",
    endDate: "2022-01", 
    duration: "11 months",
    team: {
      size: 2,
      role: "Student Researcher"
    },
    technologies: {
      frontend: [],
      backend: ["C++", "Point Cloud Library (PCL)"],
      database: [],
      tools: ["Ubuntu 22.04", "CMake", "OpenCV", "Git"]
    },
    features: [
      "3D Point Cloud Processing",
      "Rule-based Pattern Recognition", 
      "Wall-Door Relationship Analysis",
      "Accuracy Validation System"
    ],
    challenges: [
      "Handling varying point cloud densities",
      "Distinguishing closed doors from walls",
      "Optimizing algorithm performance for real-time use",
      "Dealing with incomplete 3D scan data"
    ],
    achievements: [
      "Achieved 95.93% detection accuracy",
      "Published research findings",
      "Outperformed existing visual-based methods", 
      "Created robust algorithm for varying conditions"
    ],
    metrics: {
      performance: "95.93% accuracy rate"
    }
  },

  {
    name: "IBOM",
    description: "Integrated Business Operations Management (IBOM) SaaS Platform", 
    logo: "bilgeadam-logo.png",
    details: "IBOM is a multi-tenant SaaS platform aimed at small to medium-sized enterprises (SMEs) that require a modular, integrated solution for managing their business operations. The platform will include modules for project management, customer relationship management (CRM), inventory management, human resources (HR), finance & accounting, and analytics.",
    github: "https://github.com/hcaslan/IBOM.git",
    website: "",
    githubButton: true,
    websiteButton: false,
    descriptionButton: true,
    status: true,
    
    // Enhanced fields
    tagline: "All-in-One Business Management Suite",
    category: "SaaS Platform",
    projectStatus: "in-progress",
    startDate: "2024-09",
    duration: "Ongoing",
    team: {
      size: 12,
      role: "Full Stack Developer"
    },
    technologies: {
      frontend: ["React", "TypeScript", "Material-UI", "Redux Toolkit"],
      backend: ["Java", "Spring Boot", "Spring Security", "REST APIs"],
      database: ["PostgreSQL", "Redis", "Elasticsearch"],
      tools: ["Docker", "Kubernetes", "AWS", "Azure"]
    },
    features: [
      "Multi-tenant Architecture",
      "Project Management Module",
      "CRM Integration", 
      "Inventory Management",
      "HR Management",
      "Financial Accounting",
      "Analytics Dashboard",
      "Role-based Access Control"
    ],
    challenges: [
      "Designing scalable multi-tenant architecture",
      "Integrating multiple business modules seamlessly",
      "Ensuring data isolation between tenants",
      "Building flexible permission system"
    ],
    achievements: [
      "Created flexible role-based permission system",
    ],
  },
  {
    name: "hc-axios Package",
    description: "A Powerful Wrapper Around Axios",
    logo: "hca.png",
    details: "hc-axios is a powerful wrapper around Axios that simplifies token management, adds retry logic, provides useful debugging features, and eliminates common boilerplate patterns with advanced utilities.",
    github: "https://github.com/hcaslan/hc-axios.git", 
    website: "https://www.npmjs.com/package/hc-axios",
    githubButton: true,
    websiteButton: true,
    descriptionButton: true,
    status: true,
    
    // Enhanced fields
    tagline: "Enhanced HTTP Client for Modern Applications",
    category: "Open Source Library",
    projectStatus: "in-progress",
    startDate: "2025-06",
    endDate: "ongoing",
    duration: "3 months",
    team: {
      size: 1,
      role: "Library Author & Maintainer"
    },
    technologies: {
      frontend: [],
      backend: ["TypeScript", "Node.js", "Axios"],
      database: [],
      tools: ["NPM", "TypeDoc"]
    },
    features: [
      "Automatic Token Management",
      "Smart Retry Logic",
      "Request/Response Interceptors",
      "Debug Mode",
      "TypeScript Support",
      "Configurable Timeout Handling"
    ],
    challenges: [
      "Implementing robust error handling",
      "Creating comprehensive TypeScript definitions",
      "Ensuring backward compatibility"
    ],
    achievements: [
      "Published to NPM registry",
      "100% TypeScript coverage",
      "Comprehensive test suite",
      "Detailed documentation"
    ],
  }
];