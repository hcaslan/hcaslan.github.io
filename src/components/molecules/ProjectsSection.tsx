import React, { forwardRef } from 'react';
import ThemeElement from "../atoms/ThemeElement";
import { Container, Typography, Grid } from "@mui/material";
import ProjectCard from "../atoms/ProjectCard";

interface IProject {
    name: string;
    description: string;
    logo: string;
    github: string;
    website: string;
}

const projects: IProject[] = [
    {
        name: 'EasyHR',
        description: 'Human Resources App',
        logo: 'easyhr-logo.png',
        github: 'https://github.com/hcaslan/EasyHR.git',
        website: 'https://easyhr.store/',
    },
    // Add more projects here
];

const ProjectsSection = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <ThemeElement>
            <Container ref={ref} sx={{ py: 8, minHeight: '100vh' }} maxWidth="lg">
                <Typography variant="h4" gutterBottom align="center">
                    Projects
                </Typography>
                <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <ProjectCard
                                projectName={project.name}
                                projectLogo={project.logo}
                                github={project.github}
                                website={project.website}
                                description={project.description}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </ThemeElement>
    );
});

export default ProjectsSection;
