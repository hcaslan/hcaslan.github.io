import ParticlesComponent from "../components/atoms/ParticlesComponent";
import React from "react";
import {CssBaseline} from "@mui/material";
import { styled } from '@mui/material/styles';
import {NavBar} from '../components/molecules/NavBar'
import ThemeElement from '../components/atoms/ThemeElement';

const Root = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
}));

const Body = styled('main')(({ theme }) => ({
    flex: '1',
    width: '100%'
}));

const Footer = styled('footer')(({ theme }) => ({
    padding: theme.spacing(0),
}))


const Header = styled('div')(({ theme }) => ({
    height: '100vh',
    position: 'relative',
    overflow: 'hidden'
}));

export function LandingPage () {
    return (
        <ThemeElement children={
            <Root>
                <CssBaseline />
                <Header>
                    <NavBar />
                    <ParticlesComponent />
                </Header>
                <Body>
                    <div style={ { width: '100%', height: '500px',backgroundColor: 'red' } }>
                    </div>
                </Body>
                <Footer>

                </Footer>
            </Root>
        } />
    )
        ;
}