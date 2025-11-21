import { useEffect, useState } from "react";
import Link from "next/link";
import Socials from "../Socials/Socials";
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Drawer, IconButton, List, ListItem, ListItemButton, Toolbar, Typography } from "@mui/material";

export default function Nav() {
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            const navbarElement = navbar as HTMLElement;
            const height = navbarElement.offsetHeight;
            console.log(height)
            document.documentElement.style.setProperty('--navbar-height', `${height}px`);
        }

        const handleResize = () => {
            if (navbar) {
                const navbarElement = navbar as HTMLElement;
                const height = navbarElement.offsetHeight;
                document.documentElement.style.setProperty('--navbar-height', `${height}px`);
            }
        };
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);

    }, []);


    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };


    const container = typeof window !== 'undefined'
        ? () => window.document.body
        : undefined;

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/music", label: "Music" },
        { href: "https://phocust.bassthreadsmerch.com/shop/", label: "Merch", target: "_blank" },
        { href: "https://www.patreon.com/c/iamphocust", label: "Patreon", target: "_blank" },
        { href: "/contact", label: "Contact" },
    ];

    const drawer = (
        <Box onClick={handleDrawerToggle} >
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton>
                            <Link href={item.href} key={item.label} target={item.target}>
                                <Typography>{item.label}</Typography>
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem>
                    <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                        <Socials />
                    </Box>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar className="navbar" component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1 }}>
                        {navItems.map((item) => (
                            <Box
                                key={item.label}>
                                <Link href={item.href} target={item.target}>
                                    <Typography
                                        sx={{
                                            marginRight: 1,
                                            "&:hover": {
                                                fontWeight: 800
                                            },
                                            cursor: "pointer",
                                        }}>
                                        {item.label}
                                    </Typography>
                                </Link>
                            </Box>
                        ))}
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        <Socials />
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 270 },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}