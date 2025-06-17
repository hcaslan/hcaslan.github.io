import { forwardRef, useState } from "react";
import ThemeElement from "../atoms/ThemeElement";
import {
  Container,
  Typography,
  Grid,
  Box,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  Fade,
} from "@mui/material";
import { Search, FilterList } from "@mui/icons-material";
import ProjectCard, { IEnhancedProject } from "../atoms/ProjectCard";
import { enhancedProjects } from "../../data/enhancedProjects";

const ProjectsSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  // Get unique categories from projects
  const categories = Array.from(
    new Set(enhancedProjects.map((p) => p.category).filter(Boolean))
  );
  const statuses = Array.from(
    new Set(enhancedProjects.map((p) => p.projectStatus).filter(Boolean))
  );

  // Filter projects based on search and filters
  const filteredProjects = enhancedProjects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (project.tagline &&
        project.tagline.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory =
      categoryFilter === "all" || project.category === categoryFilter;
    const matchesStatus =
      statusFilter === "all" || project.projectStatus === statusFilter;
    const isActive = project.status; // Only show active projects

    return matchesSearch && matchesCategory && matchesStatus && isActive;
  });

  return (
    <ThemeElement>
      <Container ref={ref} sx={{ py: 8, minHeight: "100vh" }} maxWidth="lg">
        {/* Header Section */}
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
            Featured Projects
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
          Explore my portfolio of innovative software solutions, from enterprise
          applications to cutting-edge research projects
        </Typography>

        {/* Filters Section */}
        <Box
          sx={{
            mb: 4,
            p: 3,
            backgroundColor: "#f8f9fa",
            color: "white",
            height: "100%",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: "linear-gradient(90deg, #08D9D6, #FF2E63, #08D9D6)",
            },
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search color="action" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                    "&:hover fieldset": {
                      borderColor: "paletteFirstColour.main",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "paletteThirdColour.main",
                    },
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={categoryFilter}
                  label="Category"
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  sx={{
                    backgroundColor: "white",
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "paletteFirstColour.main",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "paletteThirdColour.main",
                    },
                  }}
                >
                  <MenuItem value="all">All Categories</MenuItem>
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  value={statusFilter}
                  label="Status"
                  onChange={(e) => setStatusFilter(e.target.value)}
                  sx={{
                    backgroundColor: "white",
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "paletteFirstColour.main",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "paletteThirdColour.main",
                    },
                  }}
                >
                  <MenuItem value="all">All Status</MenuItem>
                  {statuses.map((status) => (
                    <MenuItem key={status} value={status}>
                      {status?.replace("-", " ").toUpperCase()}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={2}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <FilterList color="action" />
                <Typography variant="body2" color="textSecondary">
                  {filteredProjects.length} project
                  {filteredProjects.length !== 1 ? "s" : ""}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Projects Grid - Responsive layout */}
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 4 }}
          justifyContent="center"
          alignItems="stretch"
        >
          {filteredProjects.map((project, index) => (
            <Fade in={true} timeout={300 + index * 100} key={project.name}>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                sx={{
                  display: "flex",
                  "& > *": {
                    width: "100%",
                  },
                }}
              >
                <ProjectCard {...project} />
              </Grid>
            </Fade>
          ))}
        </Grid>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <Box
            sx={{
              textAlign: "center",
              py: 8,
              backgroundColor: "#f8f9fa",
              borderRadius: 2,
              border: "2px dashed #dee2e6",
            }}
          >
            <Typography variant="h6" color="textSecondary" gutterBottom>
              No projects found
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Try adjusting your search terms or filters
            </Typography>
          </Box>
        )}

        {/* Statistics Section */}
        <Box sx={{ mt: 8, p: 4, backgroundColor: "#f8f9fa", borderRadius: 2 }}>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              mb: 4,
              fontWeight: "bold",
              color: "paletteSecondColour.main",
            }}
          >
            Portfolio Overview
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={6} sm={3}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", color: "paletteThirdColour.main" }}
                >
                  {enhancedProjects.filter((p) => p.status).length}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Projects
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", color: "paletteFirstColour.main" }}
                >
                  {categories.length}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Categories
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", color: "success.main" }}
                >
                  {
                    enhancedProjects.filter(
                      (p) => p.projectStatus === "completed"
                    ).length
                  }
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Completed
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", color: "primary.main" }}
                >
                  {
                    enhancedProjects.filter(
                      (p) => p.projectStatus === "in-progress"
                    ).length
                  }
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  In Progress
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Technology Tags Cloud */}
        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Typography
            variant="h6"
            sx={{
              mb: 3,
              color: "paletteSecondColour.main",
              fontWeight: "bold",
            }}
          >
            Technologies I Work With
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              justifyContent: "center",
            }}
          >
            {Array.from(
              new Set(
                enhancedProjects.flatMap((p) => [
                  ...(p.technologies?.frontend || []),
                  ...(p.technologies?.backend || []),
                  ...(p.technologies?.database || []),
                  ...(p.technologies?.tools || []),
                ])
              )
            ).map((tech) => (
              <Chip
                key={tech}
                label={tech}
                variant="outlined"
                size="small"
                sx={{
                  "&:hover": {
                    backgroundColor: "paletteFirstColour.main",
                    color: "white",
                    borderColor: "paletteFirstColour.main",
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </ThemeElement>
  );
});

export default ProjectsSection;
