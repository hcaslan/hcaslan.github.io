import React, { forwardRef } from "react";
import {
  Grid,
  Typography,
  Button,
  Box,
  Container,
  useMediaQuery,
  useTheme,
  Chip,
  Avatar,
  Card,
  CardContent,
  Fade,
  IconButton,
} from "@mui/material";
import {
  LinkedIn,
  Email,
  GitHub,
  PictureAsPdf,
  LocationOn,
  School,
  Work,
  Download,
} from "@mui/icons-material";
import ThemeElement from "../atoms/ThemeElement";
import CV from "../../assets/HevalCanAslanOZEN_CV.pdf";

const AboutMeSection = forwardRef<HTMLDivElement>((props, ref) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const skills = {
    languages: [
      { name: "Java", level: 90, color: "#ED8B00" },
      { name: "JavaScript", level: 85, color: "#F7DF1E" },
      { name: "TypeScript", level: 80, color: "#3178C6" },
      { name: "Python", level: 75, color: "#3776AB" },
      { name: "C++", level: 70, color: "#00599C" },
      { name: "C", level: 65, color: "#A8B9CC" },
    ],
    frameworks: [
      { name: "React", level: 88, color: "#61DAFB" },
      { name: "Spring Boot", level: 85, color: "#6DB33F" },
      { name: "Node.js", level: 80, color: "#339933" },
      { name: "Express.js", level: 75, color: "#000000" },
      { name: "Material-UI", level: 85, color: "#007FFF" },
    ],
    tools: [
      { name: "Docker", level: 80, color: "#2496ED" },
      { name: "Git", level: 90, color: "#F05032" },
      { name: "AWS", level: 70, color: "#FF9900" },
      { name: "PostgreSQL", level: 75, color: "#4169E1" },
      { name: "MongoDB", level: 70, color: "#47A248" },
    ],
  };

  const socialLinks = [
    {
      icon: <LinkedIn />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hcaslanozen/",
      color: "#0077B5",
    },
    {
      icon: <GitHub />,
      label: "GitHub",
      href: "https://github.com/hcaslan",
      color: "#333",
    },
    {
      icon: <Email />,
      label: "Email",
      href: "mailto:hcaslan.ozen@gmail.com",
      color: "#EA4335",
    },
  ];

  return (
    <ThemeElement>
      <Container ref={ref} sx={{ py: 8, minHeight: "100vh" }} maxWidth="lg">
        {/* Header Section - Matching Projects Style */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 6,
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              borderBottom: "3px solid",
              borderColor: "paletteThirdColour.main",
            }}
          />
          <Typography
            variant="h3"
            sx={{
              mx: 4,
              color: "paletteThirdColour.main",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            About Me
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              borderBottom: "3px solid",
              borderColor: "paletteThirdColour.main",
            }}
          />
        </Box>

        {/* Subtitle */}
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            color: "paletteSecondColour.main",
            mb: 6,
            maxWidth: "600px",
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          Passionate engineer dedicated to creating innovative solutions and
          continuously learning new technologies
        </Typography>

        {/* Main Content */}
        <Grid container spacing={4}>
          {/* Personal Info Card */}
          <Grid item xs={12} md={8}>
            <Fade in={true} timeout={600}>
              <Card
                sx={{
                  height: "100%",
                  background:
                    "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
                  border: "1px solid #e9ecef",
                  borderRadius: 3,
                  overflow: "visible",
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Avatar
                      src="https://media.giphy.com/media/mGcNjsfWAjY5AEZNw6/giphy.gif"
                      sx={{
                        width: 60,
                        height: 60,
                        mr: 2,
                        border: "3px solid",
                        borderColor: "paletteFirstColour.main",
                      }}
                    />
                    <Box>
                      <Typography
                        variant="h4"
                        sx={{
                          color: "paletteSecondColour.main",
                          fontWeight: "bold",
                          mb: 0.5,
                        }}
                      >
                        Hi! I'm Aslan
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "paletteThirdColour.main",
                          fontWeight: 500,
                        }}
                      >
                        Software Engineer & Problem Solver
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.1rem",
                      lineHeight: 1.8,
                      color: "text.primary",
                      mb: 3,
                    }}
                  >
                    I am an engineer who aims to constantly improve himself and
                    learn new things. I graduated from the Department of
                    Electrical and Electronics Engineering in 2022. Currently, I
                    am pursuing a Master's in Computer Engineering.
                  </Typography>

                  {/* Key Info Cards */}
                  <Grid
                    container
                    spacing={2}
                    sx={{ mb: 3 }}
                    alignItems="stretch"
                  >
                    <Grid item xs={12} sm={4}>
                      <Box
                        sx={{
                          p: 2,
                          backgroundColor: "#f8f9fa",
                          borderRadius: 2,
                          textAlign: "center",
                          border: "1px solid #e9ecef",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <School
                          sx={{ color: "paletteFirstColour.main", mb: 1 }}
                        />
                        <Typography variant="body2" color="textSecondary">
                          Education
                        </Typography>
                        <Typography
                          variant="body2"
                          fontWeight="bold"
                          sx={{ lineHeight: 1.2 }}
                        >
                          M.S. Computer Engineering
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                          B.S. EEE '22
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Box
                        sx={{
                          p: 2,
                          backgroundColor: "#f8f9fa",
                          borderRadius: 2,
                          textAlign: "center",
                          border: "1px solid #e9ecef",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <Work
                          sx={{ color: "paletteSecondColour.main", mb: 1 }}
                        />
                        <Typography variant="body2" color="textSecondary">
                          Focus
                        </Typography>
                        <Typography variant="body1" fontWeight="bold">
                          Full-Stack
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Box
                        sx={{
                          p: 2,
                          backgroundColor: "#f8f9fa",
                          borderRadius: 2,
                          textAlign: "center",
                          border: "1px solid #e9ecef",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <LocationOn
                          sx={{ color: "paletteThirdColour.main", mb: 1 }}
                        />
                        <Typography variant="body2" color="textSecondary">
                          Location
                        </Typography>
                        <Typography variant="body1" fontWeight="bold">
                          Turkey
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  {/* Action Buttons */}
                  <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                    <Button
                      variant="contained"
                      startIcon={<Download />}
                      href={CV}
                      download="HevalCanAslanOZEN_CV.pdf"
                      sx={{
                        backgroundColor: "paletteFirstColour.main",
                        color: "white",
                        px: 3,
                        py: 1.5,
                        borderRadius: 2,
                        fontWeight: "bold",
                        "&:hover": {
                          backgroundColor: "paletteSecondColour.main",
                          transform: "translateY(-2px)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      Download Resume
                    </Button>
                    {socialLinks.map((link, index) => (
                      <IconButton
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          backgroundColor: "#f8f9fa",
                          border: "1px solid #e9ecef",
                          "&:hover": {
                            backgroundColor: link.color,
                            color: "white",
                            transform: "translateY(-2px)",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        {link.icon}
                      </IconButton>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Fade>
          </Grid>

          {/* Animated Working GIF */}
          <Grid item xs={12} md={4}>
            <Fade in={true} timeout={800}>
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  minHeight: 300,
                }}
              >
                <img
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzFvNTg4aXJlc3p2aGc3OTQ3bG5vZ2JxYnFnbXI5dzE4aGd6dTh4OCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/CuuSHzuc0O166MRfjt/giphy.gif"
                  alt="working gif"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: 12,
                    border: "3px solid #e9ecef",
                  }}
                />
              </Box>
            </Fade>
          </Grid>
        </Grid>

        {/* Skills Section */}
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              mb: 4,
              fontWeight: "bold",
              color: "paletteSecondColour.main",
            }}
          >
            Technical Skills
          </Typography>

          <Grid container spacing={4}>
            {/* Programming Languages */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: "#f8f9fa",
                  border: "1px solid #e9ecef",
                  borderRadius: 3,
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "paletteThirdColour.main",
                      fontWeight: "bold",
                      mb: 3,
                      textAlign: "center",
                    }}
                  >
                    Programming Languages
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    {skills.languages.map((skill, index) => (
                      <Fade
                        in={true}
                        timeout={300 + index * 100}
                        key={skill.name}
                      >
                        <Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              mb: 0.5,
                            }}
                          >
                            <Typography variant="body2" fontWeight="medium">
                              {skill.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              {skill.level}%
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              width: "100%",
                              height: 8,
                              backgroundColor: "#e9ecef",
                              borderRadius: 4,
                              overflow: "hidden",
                            }}
                          >
                            <Box
                              sx={{
                                width: `${skill.level}%`,
                                height: "100%",
                                backgroundColor: skill.color,
                                borderRadius: 4,
                                transition: "width 1s ease-in-out",
                                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                              }}
                            />
                          </Box>
                        </Box>
                      </Fade>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Frameworks */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: "#f8f9fa",
                  border: "1px solid #e9ecef",
                  borderRadius: 3,
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "paletteThirdColour.main",
                      fontWeight: "bold",
                      mb: 3,
                      textAlign: "center",
                    }}
                  >
                    Frameworks & Libraries
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    {skills.frameworks.map((skill, index) => (
                      <Fade
                        in={true}
                        timeout={500 + index * 100}
                        key={skill.name}
                      >
                        <Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              mb: 0.5,
                            }}
                          >
                            <Typography variant="body2" fontWeight="medium">
                              {skill.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              {skill.level}%
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              width: "100%",
                              height: 8,
                              backgroundColor: "#e9ecef",
                              borderRadius: 4,
                              overflow: "hidden",
                            }}
                          >
                            <Box
                              sx={{
                                width: `${skill.level}%`,
                                height: "100%",
                                backgroundColor: skill.color,
                                borderRadius: 4,
                                transition: "width 1s ease-in-out",
                                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                              }}
                            />
                          </Box>
                        </Box>
                      </Fade>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Tools */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: "#f8f9fa",
                  border: "1px solid #e9ecef",
                  borderRadius: 3,
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "paletteThirdColour.main",
                      fontWeight: "bold",
                      mb: 3,
                      textAlign: "center",
                    }}
                  >
                    Tools & Technologies
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    {skills.tools.map((skill, index) => (
                      <Fade
                        in={true}
                        timeout={700 + index * 100}
                        key={skill.name}
                      >
                        <Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              mb: 0.5,
                            }}
                          >
                            <Typography variant="body2" fontWeight="medium">
                              {skill.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              {skill.level}%
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              width: "100%",
                              height: 8,
                              backgroundColor: "#e9ecef",
                              borderRadius: 4,
                              overflow: "hidden",
                            }}
                          >
                            <Box
                              sx={{
                                width: `${skill.level}%`,
                                height: "100%",
                                backgroundColor: skill.color,
                                borderRadius: 4,
                                transition: "width 1s ease-in-out",
                                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                              }}
                            />
                          </Box>
                        </Box>
                      </Fade>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Statistics Section - Matching Projects Style */}
        <Box sx={{ mt: 8, p: 4, backgroundColor: "#f8f9fa", borderRadius: 3 }}>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              mb: 4,
              fontWeight: "bold",
              color: "paletteSecondColour.main",
            }}
          >
            Professional Journey
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={6} sm={3}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", color: "paletteThirdColour.main" }}
                >
                  1+
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Years Coding
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", color: "paletteFirstColour.main" }}
                >
                  10+
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Projects Built
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", color: "success.main" }}
                >
                  8+
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Technologies
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", color: "primary.main" }}
                >
                  ∞
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Learning
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeElement>
  );
});

export default AboutMeSection;
