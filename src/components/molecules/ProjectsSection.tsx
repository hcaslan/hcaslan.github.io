import { forwardRef } from "react";
import ThemeElement from "../atoms/ThemeElement";
import { Container, Typography, Grid, Box } from "@mui/material";
import ProjectCard from "../atoms/ProjectCard";

export interface IProject {
  name: string;
  description: string;
  details?: string;
  logo: string;
  github: string;
  website: string;
  images?: string[];
  githubButton: boolean;
  websiteButton: boolean;
  descriptionButton: boolean;
  status: boolean;
}

const projects: IProject[] = [
  {
    name: "EasyHR",
    description: "Human Resources App",
    details:
      "The EasyHR Website is a comprehensive platform designed to streamline and simplify human resources management for organizations of all sizes. This web application provides a centralized hub for managing employee data, tracking attendance, processing payroll, and automating various HR tasks. It utilizes Java for the backend, and React with TypeScript for the frontend.",
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
  },
  {
    name: "HCA Car Rental",
    description: "Simple Car Rental App",
    logo: "hca.png",
    github: "https://github.com/hcaslan/CarRentalMicroService.git",
    website: "",
    githubButton: true,
    websiteButton: false,
    descriptionButton: false,
    status: false,
  },
  {
    name: "RBCDD Algorithm",
    description: "Rule Based Door Detection Algorithm",
    logo: "rbcdd.png",
    details:
      "The closed-door detection problem is a significant area of research in fields like robotics and building information modeling, primarily due to the importance of door locations in delineating spaces such as rooms and corridors. Traditional methods have relied on visual data, which can be hindered by varying lighting conditions and the camera's angle and distance from the door. In this study, we utilized point cloud data to address these challenges and leverage the 3D characteristics of the scene. Our approach was implemented using C++, the Point Cloud Library, and Ubuntu 22.04. We proposed a rule-based method to identify closed doors and determine their positions, extracting rules based on the relationship between walls and hinged doors. Experiments conducted with the ESOGU DOORS dataset demonstrated the effectiveness of our method, achieving a door detection rate of 95.93%.",
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
  },
  {
    name: "IBOM",
    description:
      "Integrated Business Operations Management (IBOM) SaaS Platform",
    logo: "bilgeadam-logo.png",
    details:
      "IBOM is a multi-tenant SaaS platform aimed at small to medium-sized enterprises (SMEs) that require a modular, integrated solution for managing their business operations. The platform will include modules for project management, customer relationship management (CRM), inventory management, human resources (HR), finance & accounting, and analytics.",
    github: "https://github.com/hcaslan/IBOM.git",
    website: "",
    githubButton: true,
    websiteButton: false,
    descriptionButton: true,
    status: true,
  },
  {
    name: "Pastry Delight",
    description: "A simple pastry shop website",
    logo: "hca.png",
    github: "https://github.com/hcaslan/patisserie-website.git",
    website: "https://www.patisserie.live/",
    githubButton: true,
    websiteButton: true,
    descriptionButton: false,
    status: false,
  },
  {
    name: "hc-axios Package",
    description: "A Powerful Wrapper Around Axios",
    logo: "hca.png",
    details:
      "hc-axios is a powerful wrapper around Axios that simplifies token management, adds retry logic, provides useful debugging features, and eliminates common boilerplate patterns with advanced utilities.",
    github: "https://github.com/hcaslan/hc-axios.git",
    website: "https://www.npmjs.com/package/hc-axios",
    images: [
      "https://i.imgur.com/j572OqF.png",
      "https://i.imgur.com/CT6Ue3H.png",
      "https://i.imgur.com/ZmfNfOH.png",
    ],
    githubButton: true,
    websiteButton: true,
    descriptionButton: true,
    status: true,
  },
  // Add more projects here
];

const ProjectsSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <ThemeElement>
      <Container ref={ref} sx={{ py: 8, minHeight: "100vh" }} maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 4,
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              borderBottom: "2px solid",
              borderColor: "paletteThirdColour.main",
            }}
          />
          <Typography
            variant="h4"
            sx={{ mx: 2, color: "paletteThirdColour.main" }}
          >
            Projects
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              borderBottom: "2px solid",
              borderColor: "paletteThirdColour.main",
            }}
          />
        </Box>
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
          {projects
            .filter((project) => project.status)
            .map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ProjectCard
                  name={project.name}
                  logo={project.logo}
                  details={project.details}
                  github={project.github}
                  images={project.images}
                  website={project.website}
                  description={project.description}
                  githubButton={project.githubButton}
                  websiteButton={project.websiteButton}
                  descriptionButton={project.descriptionButton}
                  status={project.status}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
    </ThemeElement>
  );
});

export default ProjectsSection;
