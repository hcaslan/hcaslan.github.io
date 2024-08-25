import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { Grid, Typography, Button, Box, Container, useMediaQuery, useTheme } from '@mui/material';
import { LinkedIn, Email, Description, GitHub, PictureAsPdf } from '@mui/icons-material';
import ThemeElement from "../atoms/ThemeElement";
import CV from '../../assets/HevalCanAslanOZEN.pdf';

// Define the props interface
interface AboutMeSectionProps {
    ref1?: React.RefObject<HTMLDivElement>;
    ref2?: React.RefObject<HTMLDivElement>;
}

// Use ForwardRefRenderFunction with your props interface
const AboutMeSection: ForwardRefRenderFunction<HTMLDivElement, AboutMeSectionProps> = (props, ref) => {
    const { ref1, ref2 } = props;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <ThemeElement>
            <Container ref={ref1} sx={{ py: 8, minHeight: '100vh' }} maxWidth="lg">
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 }}>
                    <Box sx={{ flexGrow: 1, borderBottom: '2px solid', borderColor: 'paletteThirdColour.main' }} />
                    <Typography variant="h4" sx={{ mx: 2, color: 'paletteThirdColour.main' }}>
                        About Me
                    </Typography>
                    <Box sx={{ flexGrow: 1, borderBottom: '2px solid', borderColor: 'paletteThirdColour.main' }} />
                </Box>
                <Box sx={{ padding: 4 }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={8}>
                            {isMobile ? (
                                <>
                                    <Typography variant="h4" component="h1" gutterBottom>
                                        Hi! <img src="https://media.giphy.com/media/mGcNjsfWAjY5AEZNw6/giphy.gif"
                                                 alt="wave gif" width="50"/>
                                    </Typography>
                                    <Typography variant="h4" component="h1" gutterBottom>
                                        I'm Aslan.
                                    </Typography>
                                </>
                            ) : (
                                <Typography variant="h4" component="h1" gutterBottom>
                                    Hi! I'm Aslan. <img src="https://media.giphy.com/media/mGcNjsfWAjY5AEZNw6/giphy.gif" alt="wave gif" width="50" />
                                </Typography>
                            )}
                            <Typography variant="body1" gutterBottom>
                                I am an engineer who aims to constantly improve himself and learn new things.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                I graduated from the department of electrical and electronics engineering in 2022. In the following period, I developed small-scale desktop applications with C++ and QT. Then I started a course on full-stack development with Java and finished this course in July 2024.
                            </Typography>
                            <Typography variant="body1" gutterBottom ref={ref2}>
                                Now I am actively seeking a job both to increase my experience and to make a living.
                            </Typography>
                            <Grid container spacing={2} sx={{mt:2}}>
                                <Grid item xs={isMobile && 12}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        startIcon={<LinkedIn />}
                                        href="https://www.linkedin.com/in/hcaslanozen/"
                                        fullWidth={isMobile}
                                    >
                                        LinkedIn
                                    </Button>
                                </Grid>
                                <Grid item xs={isMobile && 12}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        startIcon={<GitHub />}
                                        href="https://github.com/hcaslan"
                                        fullWidth={isMobile}
                                    >
                                        Github
                                    </Button>
                                </Grid>
                                <Grid item xs={isMobile && 12}>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        startIcon={<Email />}
                                        href="mailto:hcaslan.ozen@gmail.com"
                                        fullWidth={isMobile}
                                    >
                                        Gmail
                                    </Button>
                                </Grid>
                                <Grid item xs={isMobile && 12}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        startIcon={<Description />}
                                        href="https://medium.com/@hcaslan"
                                        fullWidth={isMobile}
                                    >
                                        Medium
                                    </Button>
                                </Grid>
                                <Grid item xs={isMobile && 12}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        startIcon={<PictureAsPdf />}
                                        href={CV}
                                        download="HevalCanAslanOZEN_CV.pdf"
                                        fullWidth={isMobile}
                                    >
                                        Resume
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <img
                                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzFvNTg4aXJlc3p2aGc3OTQ3bG5vZ2JxYnFnbXI5dzE4aGd6dTh4OCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/CuuSHzuc0O166MRfjt/giphy.gif"
                                alt="working gif"
                                style={{ width: '100%', borderRadius: 8 }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={6} >
                            <Typography variant="h6" component="h3" gutterBottom sx={{mt:4}}>
                                Programming Languages:
                            </Typography>
                            <Grid container spacing={1} sx={{mt:1}}>
                                <Grid item>
                                    <img
                                        src="https://img.shields.io/badge/-Java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"/>
                                </Grid>
                                <Grid item>
                                    <img
                                        src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black"/>
                                </Grid>
                                <Grid item>
                                    <img
                                        src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white"/>
                                </Grid>
                                <Grid item>
                                    <img
                                        src="https://img.shields.io/badge/C++-00599C.svg?style=for-the-badge&logo=C++&logoColor=white"/>
                                </Grid>
                                <Grid item>
                                    <img
                                        src="https://img.shields.io/badge/Python-3776AB.svg?style=for-the-badge&logo=Python&logoColor=white"/>
                                </Grid>
                                <Grid item>
                                    <img
                                        src="https://img.shields.io/badge/C-A8B9CC.svg?style=for-the-badge&logo=C&logoColor=black"/>
                                </Grid>
                            </Grid>
                            <Typography variant="h6" component="h3" gutterBottom sx={{mt:0.3}}>
                                Databases:
                            </Typography>
                            <Grid container spacing={1} sx={{mt:1}}>
                                <Grid item>
                                    <img
                                        src="https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white"/>
                                </Grid>
                                <Grid item>
                                    <img
                                        src="https://img.shields.io/badge/MongoDB-47A248.svg?style=for-the-badge&logo=MongoDB&logoColor=white"/>
                                </Grid>
                                <Grid item>
                                    <img
                                        src="https://img.shields.io/badge/Redis-FF4438.svg?style=for-the-badge&logo=Redis&logoColor=white"/>
                                </Grid>
                                <Grid item>
                                    <img
                                        src="https://img.shields.io/badge/Elasticsearch-005571.svg?style=for-the-badge&logo=Elasticsearch&logoColor=white"/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6" component="h3" gutterBottom sx={{mt:4}}>
                                Tools and Services:
                            </Typography>
                            <Grid container spacing={1} sx={{mt:1}}>
                                <Grid item>
                                    <img
                                        src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black"/>
                                </Grid>
                                <Grid item>
                                    <img
                                        src="https://img.shields.io/badge/Spring%20Boot-6DB33F.svg?style=for-the-badge&logo=Spring-Boot&logoColor=white"/>
                                </Grid>
                                <Grid item>
                                    <img
                                        src="https://img.shields.io/badge/Spring%20Security-6DB33F.svg?style=for-the-badge&logo=Spring-Security&logoColor=white"/>
                                </Grid>
                                <Grid item>
                                    <img
                                        src="https://img.shields.io/badge/Apache%20Maven-C71A36.svg?style=for-the-badge&logo=Apache-Maven&logoColor=white"/>
                                </Grid>
                                <Grid item>
                                    <img
                                        src="https://img.shields.io/badge/Docker-2496ED.svg?style=for-the-badge&logo=Docker&logoColor=white"/>
                                </Grid>
                                <Grid item>
                                    <img
                                        src="https://img.shields.io/badge/RabbitMQ-FF6600.svg?style=for-the-badge&logo=RabbitMQ&logoColor=white"/>
                                </Grid>
                                <Grid item>
                                    <img
                                        src="https://img.shields.io/badge/Swagger-85EA2D.svg?style=for-the-badge&logo=Swagger&logoColor=black"/>
                                </Grid>
                                <Grid item>
                                    <img
                                        src="https://img.shields.io/badge/Kubernetes-326CE5.svg?style=for-the-badge&logo=Kubernetes&logoColor=white"/>
                                </Grid>
                                <Grid item>
                                    <img
                                        src="https://img.shields.io/badge/Qt-41CD52.svg?style=for-the-badge&logo=Qt&logoColor=white"/>
                                </Grid>
                                <Grid item>
                                    <img
                                        src="https://img.shields.io/badge/OpenCV-5C3EE8.svg?style=for-the-badge&logo=OpenCV&logoColor=white"/>
                                </Grid>
                                <Grid item>
                                    <img
                                        src="https://img.shields.io/badge/NumPy-013243.svg?style=for-the-badge&logo=NumPy&logoColor=white"/>
                                </Grid>
                                <Grid item>
                                    <img
                                        src="https://img.shields.io/badge/pandas-150458.svg?style=for-the-badge&logo=pandas&logoColor=white"/>
                                </Grid>
                                <Grid item>
                                    <img
                                        src="https://img.shields.io/badge/Figma-F24E1E.svg?style=for-the-badge&logo=Figma&logoColor=white"/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </ThemeElement>
    );
};

export default forwardRef(AboutMeSection);
