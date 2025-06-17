import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { GitHub, Language, Description } from "@mui/icons-material";
import ThemeElement from "./ThemeElement";
import { useNavigate } from "react-router-dom";
import { IProject } from "../molecules/ProjectsSection";
import { useDispatch } from "react-redux";
import { setDisableScroll } from "../../store/feature/scrollSlice";

const ProjectCard = (props: IProject) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState<IProject | null>(
    null
  );

  const handleClick = (destination: string) => {
    window.open(destination, "_blank"); // Opens in a new tab
  };

  const handleNavigate = (destination: string) => {
    navigate(destination);
  };

  const handleOpen = (project: IProject) => {
    setSelectedProject(project);
    setOpen(true);
    dispatch(setDisableScroll(true)); // Disable scrolling
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
    dispatch(setDisableScroll(false));
  };

  return (
    <ThemeElement>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              component="div"
              variant="h5"
              sx={{ minHeight: "3em", lineHeight: "1em" }}
            >
              {props.name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{
                minHeight: "4em",
                maxHeight: "4em",
                lineHeight: "1em",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {props.description}
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <Tooltip
              title={props.githubButton ? "GitHub" : ""}
              disableHoverListener={!props.githubButton}
            >
              <IconButton
                aria-label="GitHub"
                onClick={() => handleClick(props.github)}
                disabled={!props.githubButton}
                sx={{
                  color: props.githubButton
                    ? "paletteThirdColour.main"
                    : "gray",
                  "&:hover": {
                    color: "paletteFirstColour.main",
                  },
                }}
              >
                <GitHub />
              </IconButton>
            </Tooltip>

            <Tooltip
              title={props.websiteButton ? "Website" : ""}
              disableHoverListener={!props.websiteButton}
            >
              <IconButton
                aria-label="Website"
                onClick={() => handleClick(props.website)}
                disabled={!props.websiteButton}
                sx={{
                  color: props.websiteButton
                    ? "paletteThirdColour.main"
                    : "gray",
                  "&:hover": {
                    color: "paletteFirstColour.main",
                  },
                }}
              >
                <Language />
              </IconButton>
            </Tooltip>

            <Tooltip
              title={props.descriptionButton ? "Description" : ""}
              disableHoverListener={!props.descriptionButton}
            >
              <IconButton
                aria-label="Description"
                onClick={() => handleOpen(props)}
                disabled={!props.descriptionButton}
                sx={{
                  color: props.descriptionButton
                    ? "paletteThirdColour.main"
                    : "gray",
                  "&:hover": {
                    color: "paletteFirstColour.main",
                  },
                }}
              >
                <Description />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{
            width: "auto",
            height: 150,
            objectFit: "cover",
            marginTop: 2,
            marginRight: 2,
          }}
          src={"/images/" + props.logo}
          alt={props.name}
        />
      </Card>

      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#252A34",
            color: "#EAEAEA",
          },
        }}
      >
        <DialogTitle color="paletteThirdColour.main">
          {selectedProject?.name}
        </DialogTitle>
        <DialogContent
          sx={{
            maxHeight: "60vh",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#FF2E63",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#252A34",
            },
            scrollbarWidth: "thin", // For Firefox
            scrollbarColor: "#FF2E63 #252A34",
          }}
        >
          <Typography color="paletteThirdColour.main">
            {selectedProject?.description}
          </Typography>
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <Typography>{selectedProject?.details}</Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            {selectedProject?.images?.map((image: string, index: number) => (
              <img
                key={index}
                src={image}
                alt="Project screenshot"
                style={{ width: "100%", height: "auto" }}
              />
            ))}
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{
              color: "paletteThirdColour.main",
              marginRight: "20px",
              "&:hover": {
                backgroundColor: "paletteFirstColour.main",
                color: "paletteFourthColour.main",
              },
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeElement>
  );
};

export default ProjectCard;
