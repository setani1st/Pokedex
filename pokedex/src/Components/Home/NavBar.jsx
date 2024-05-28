import React, { useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from "react-router-dom";
import { FaHouseUser, FaSignOutAlt } from "react-icons/fa";

const NavBar = () => {
    const navigate = useNavigate();

    useEffect(() => {
        let email = sessionStorage.getItem('email');
        if (email === '' || email === null) {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Link to='/'><FaHouseUser className="icon" color="white" /></Link>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        ポケモン図鑑瀬谷バージョン
                    </Typography>
                    <Link to='/login'><FaSignOutAlt color="white" className="icon" /></Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;
