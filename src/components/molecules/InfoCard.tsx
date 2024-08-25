import React from 'react';
import ThemeElement from "../atoms/ThemeElement";
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';

const CenteredCard = styled(Card)({
    maxWidth: 700,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    textAlign: 'center',
});
export function InfoCard () {
    return (
        <ThemeElement children={
            <CenteredCard sx={{ color: 'paletteFourthColour.main', }}>
                <CardContent>
                    <Typography variant="h2" component="div">
                        Heval Can Aslan OZEN
                    </Typography>
                    <Typography variant="h5" component="p" sx={{ mt: 2 }}>
                        Full Stack Java Developer
                    </Typography>
                </CardContent>
            </CenteredCard>
        } />
    );
}
