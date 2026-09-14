import React from "react";
import ParticlesComponent from "../components/atoms/ParticlesComponent";
import { CssBaseline } from "@mui/material";
import { styled } from "@mui/material/styles";
import ThemeElement from "../components/atoms/ThemeElement";
import { InfoCard } from "../components/molecules/InfoCard";

const Root = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
}));

const Header = styled('div')(({ theme }) => ({
    height: '100vh',
    position: 'relative',
}));

export function LandingPage() {
    return (
        <ThemeElement>
            <Root>
                <CssBaseline />
                <Header>
                    <ParticlesComponent colour='#252A34' />
                    <InfoCard />
                </Header>
            </Root>
        </ThemeElement>
    );
}
