import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../context/user";
import IconButton from "@mui/material/IconButton";
import { Stack } from "@mui/material";

const NavBar = () => {
    const user = useUserData();
    const navigator = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleLogout = () => {
        user?.removeUser();
        navigator("login");
    };

    return (
        <AppBar position="static" style={{ backgroundColor: "#222222" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1 }}>
                        <Stack direction="row" spacing={2}>
                            <Avatar
                                alt="Einat Zilberman"
                                src="/images/einat.jpg"
                            />
                            <Link
                                style={{ marginRight: 10 }}
                                rel="noopener"
                                href="https://api.whatsapp.com/send?phone=972522935212"
                            >
                                <WhatsAppIcon
                                    fontSize="large"
                                    color="success"
                                />
                            </Link>
                            <Link
                                rel="noopener"
                                href="mailto:einatzilbe@gmail.com?subject=עריכה לשונית&body="
                            >
                                <MailOutlineIcon
                                    fontSize="large"
                                    color="info"
                                />
                            </Link>
                        </Stack>
                    </Box>
                    {user?.isLogedIn() && (
                        <>
                            <Box
                                sx={{
                                    flexGrow: 0,
                                    display: { xs: "flex", md: "none" },
                                }}
                            >
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "left",
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "left",
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: "block", md: "none" },
                                    }}
                                >
                                    <MenuItem
                                        onClick={() => navigator("addpost")}
                                    >
                                        <Typography textAlign="center">
                                            הוסף ספר
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem onClick={() => handleLogout()}>
                                        <Typography textAlign="center">
                                            התנתק
                                        </Typography>
                                    </MenuItem>
                                </Menu>
                            </Box>

                            <Box
                                sx={{
                                    flexGrow: 0,
                                    display: { xs: "none", md: "flex" },
                                }}
                            >
                                <Button
                                    component={RouterLink}
                                    to="addpost"
                                    sx={{
                                        my: 2,
                                        color: "white",
                                        display: "block",
                                    }}
                                >
                                    הוסף ספר
                                </Button>
                                <Button
                                    onClick={() => handleLogout()}
                                    sx={{
                                        my: 2,
                                        color: "white",
                                        display: "block",
                                    }}
                                >
                                    התנתק
                                </Button>
                            </Box>
                        </>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
