import * as React from 'react';
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { GitHub, Language, Description } from '@mui/icons-material';
import ThemeElement from "./ThemeElement";
import { useNavigate } from 'react-router-dom';
import {IProject} from "../molecules/ProjectsSection";

const ProjectCard = (props:IProject) => {
    const navigate = useNavigate();

    const handleClick = (destination: string) => {
        window.open(destination, '_blank'); // Opens in a new tab
    };

    const handleNavigate = (destination: string) => {
        navigate(destination);
    };

    return (
        <ThemeElement>
            <Card sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5" sx={{ minHeight: '3em', lineHeight: '1em' }}>
                            {props.name}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="div"
                            sx={{ minHeight: '4em', maxHeight: '4em', lineHeight: '1em', overflow: 'hidden', textOverflow: 'ellipsis' }}
                        >
                            {props.description}
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <IconButton
                            aria-label="GitHub"
                            onClick={() => handleClick(props.github)}
                            disabled={!props.githubButton}
                            sx={{
                                color: props.githubButton ? 'paletteThirdColour.main' : 'gray',
                            }}
                        >
                            <GitHub />
                        </IconButton>

                        <IconButton
                            aria-label="Website"
                            onClick={() => handleClick(props.website)}
                            disabled={!props.websiteButton}
                            sx={{
                                color: props.websiteButton ? 'paletteThirdColour.main' : 'gray',
                            }}
                        >
                            <Language />
                        </IconButton>

                        <IconButton
                            aria-label="Description"
                            onClick={() => handleNavigate(props.name)}
                            disabled={!props.descriptionButton}
                            sx={{
                                color: props.descriptionButton ? 'paletteThirdColour.main' : 'gray',
                            }}
                        >
                            <Description />
                        </IconButton>
                    </Box>

                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 'auto', height: 150, objectFit: 'cover', marginTop: 2, marginRight: 2 }}
                    src={'/images/' + props.logo}
                    alt={props.name}
                />
            </Card>
        </ThemeElement>
    );
}

export default ProjectCard;
