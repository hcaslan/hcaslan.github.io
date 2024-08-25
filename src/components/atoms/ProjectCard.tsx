import * as React from 'react';
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { GitHub, Language, Description } from '@mui/icons-material';
import ThemeElement from "./ThemeElement";
import { useNavigate } from 'react-router-dom';

const ProjectCard = (props: { projectName: string, projectLogo: string, github: string, website: string, description: string }) => {
    const navigate = useNavigate();

    const handleClick = (destination: string) => {
        window.open(destination, '_blank'); // Opens in a new tab
    };

    return (
        <ThemeElement>
            <Card sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {props.projectName}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {props.description}
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <IconButton aria-label="GitHub" onClick={() => handleClick(props.github)}>
                            {<GitHub />}
                        </IconButton>
                        <IconButton aria-label="Website" onClick={() => handleClick(props.website)}>
                            {<Language />}
                        </IconButton>
                        <IconButton aria-label="Description">
                            {<Description />}
                        </IconButton>
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 'auto', height: 150, objectFit: 'cover', marginTop: 2, marginRight: 2 }}
                    src={'/images/' + props.projectLogo}
                    alt={props.projectName}
                />
            </Card>
        </ThemeElement>
    );
}

export default ProjectCard;
