import * as React from 'react';
import ThemeElement from "../atoms/ThemeElement";
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Menu, Container, MenuItem  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../images/logo.png';
import {useNavigate} from "react-router-dom";

const pages = ['Projects', 'About', 'Contact'];

const appBarStyle = {
    background: 'transparent',
    boxShadow: 'none',
    height: 64, // Set a fixed height for the AppBar
    position: 'absolute', top: 0, left: 0, width: '100%', backgroundColor: 'transparent', zIndex: 10
};
export function NavBar() {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <ThemeElement children={
            <AppBar position="static" sx={appBarStyle}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography variant="h6" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                            <Button onClick={() => navigate('/')}>
                                <img src={logo} alt="logo" style={{ height: '52px' }} />
                            </Button>
                        </Typography>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: '#08D9D6',
                                textDecoration: 'none',
                            }}
                        >
                            HCA
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                style={{color: '#08D9D6'}}
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
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography variant="h6" sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                            <Button onClick={() => navigate('/')}>
                                <img src={logo} alt="logo" style={{ height: '52px' }} />
                            </Button>
                        </Typography>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: '#08D9D6',
                                textDecoration: 'none',
                            }}
                        >
                            HCA
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: '#08D9D6', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        } />
    );
};
