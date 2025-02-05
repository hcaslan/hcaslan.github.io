import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHeaderOutOfView } from '../store/feature/actions'
import ParticlesComponent from "../components/atoms/ParticlesComponent";
import { CssBaseline } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NavBar } from "../components/molecules/NavBar";
import ThemeElement from "../components/atoms/ThemeElement";
import { InfoCard } from "../components/molecules/InfoCard";
import ProjectsSection from "../components/molecules/ProjectsSection";
import FooterElement from "../components/atoms/Footer";
import AboutMeSection from "../components/molecules/AboutMeSection";
import ContactSection from "../components/molecules/ContactSection";
import { RootState } from "../store";

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
    const projectsSectionRef = useRef<HTMLDivElement>(null);
    const aboutSectionRef = useRef<HTMLDivElement>(null);
    const contactSectionRef = useRef<HTMLDivElement>(null);
    const sectionRefs = [headerRef, projectsSectionRef, aboutSectionRef, contactSectionRef];
    const disableScroll = useSelector((state: RootState) => state.scroll.disableScroll);

    const handleScroll = (event: React.WheelEvent) => {

        if (disableScroll) {
            event.preventDefault(); // Stop background scroll when dialog is open
            return;
        }
        
        const currentIndex = sectionRefs.findIndex(ref => 
            ref.current && ref.current.getBoundingClientRect().top >= 0
        );
    
        if (event.deltaY > 0 && currentIndex < sectionRefs.length - 1) {
            sectionRefs[currentIndex + 1]?.current?.scrollIntoView({ behavior: "smooth" });
        } else if (event.deltaY < 0 && currentIndex > 0) {
            sectionRefs[currentIndex - 1]?.current?.scrollIntoView({ behavior: "smooth" });
        }
    };

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
        <ThemeElement >
            <Root onWheel={handleScroll}>
                <CssBaseline />
                <NavBar
                    projectsSectionRef={projectsSectionRef}
                    aboutSectionRef={aboutSectionRef}
                    contactSectionRef={contactSectionRef}
                />
                <Header ref={headerRef}>
                    <ParticlesComponent colour='#252A34'/>
                    <InfoCard />
                </Header>
                <Body>
                    <ProjectsSection ref={projectsSectionRef} />
                    <AboutMeSection ref={aboutSectionRef}/>
                    <ContactSection ref={contactSectionRef} />
                </Body>
                <Footer>
                    <FooterElement />
                </Footer>
            </Root>
        </ThemeElement>
    );
}