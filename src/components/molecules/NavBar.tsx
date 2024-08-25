import * as React from 'react';
import ThemeElement from "../atoms/ThemeElement";
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Menu, Container, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import {useEffect, useState} from "react";

const pages = ['Projects', 'About', 'Contact'];

interface NavBarProps {
    projectsSectionRef: React.RefObject<HTMLDivElement>; // Accept the ref as a prop
}

export function NavBar({ projectsSectionRef }: NavBarProps) {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const isHeaderOutOfView = useSelector((state: any) => state.headerReducer.isHeaderOutOfView);
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        setScrolled(offset > 0);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleMenuClick = (page: string) => {
        if (page === 'Projects' && projectsSectionRef.current) {
            projectsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        handleCloseNavMenu();
    };

    // Conditionally apply background color based on isHeaderOutOfView
    const appBarStyle = {
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: 'none',
        height: 64,
        transition: 'background-color 0.3s ease',
    };

    return (
        <ThemeElement>
            <AppBar position="sticky" sx={appBarStyle}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1 }} /> {/* Empty Box to push items to the right */}
                        <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                sx={{ color: isHeaderOutOfView ? 'paletteThirdColour.main' : 'paletteFourthColour.main', border: '1px solid', borderRadius: '5px', ":hover": { color: 'paletteThirdColour.main' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={() => handleMenuClick(page)}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, paddingRight: 20 }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={() => handleMenuClick(page)}
                                    sx={{ my: 2, ml: 2, color: isHeaderOutOfView ? 'paletteThirdColour.main' : 'paletteFourthColour.main', fontSize: 20, display: 'block', ":hover": { color: 'paletteThirdColour.main' } }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeElement>
    );
}
