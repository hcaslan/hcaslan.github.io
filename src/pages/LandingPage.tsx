import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setHeaderOutOfView } from '../store/feature/actions' // Adjust the path as needed
import ParticlesComponent from "../components/atoms/ParticlesComponent";
import { CssBaseline } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NavBar } from "../components/molecules/NavBar";
import ThemeElement from "../components/atoms/ThemeElement";
import { InfoCard } from "../components/molecules/InfoCard";
import ProjectsSection from "../components/molecules/ProjectsSection";
import FooterElement from "../components/atoms/Footer";

const Root = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
}));

const Body = styled('main')(({ theme }) => ({
    flex: '1',
    width: '100%',
    paddingTop: '100vh',
    backgroundColor: '#EAEAEA',
}));

const Footer = styled('footer')(({ theme }) => ({
    padding: theme.spacing(0),
}));

const Header = styled('div')(({ theme }) => ({
    height: '100vh',
    position: 'absolute',
}));

export function LandingPage() {
    const dispatch = useDispatch();
    const headerRef = useRef<HTMLDivElement>(null);
    const projectsSectionRef = useRef<HTMLDivElement>(null); // Add this line

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                dispatch(setHeaderOutOfView(!entry.isIntersecting));
            },
            {
                root: null, // Observe with respect to the viewport
                threshold: 0, // Trigger when the header is completely out of view
            }
        );

        if (headerRef.current) {
            observer.observe(headerRef.current);
        }

        return () => {
            if (headerRef.current) {
                observer.unobserve(headerRef.current);
            }
        };
    }, [dispatch]);

    return (
        <ThemeElement>
            <Root>
                <CssBaseline />
                <NavBar projectsSectionRef={projectsSectionRef} /> {/* Pass the ref to NavBar */}
                <Header ref={headerRef}>
                    <ParticlesComponent colour='#252A34'/>
                    <InfoCard />
                </Header>
                <Body>
                    <ProjectsSection ref={projectsSectionRef} /> {/* Assign the ref to ProjectsSection */}
                </Body>
                <Footer>
                    <FooterElement />
                </Footer>
            </Root>
        </ThemeElement>
    );
}

