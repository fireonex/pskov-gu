import React, {useState} from 'react';
import {AppBar, Box, Drawer, IconButton, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/logo.png';
import {BurgerMenuItems} from "./BurgerMenuItems";
import {IconsFromHeader} from "./IconsFromHeader";


export const Header: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };


    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <BurgerMenuItems/>
        </Box>
    );


    return (
        <AppBar position="static" color="primary">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 0' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', margin: '16px 0' }}>
                    <img src={logo} alt="Псковский Государственный Университет" style={{ height: 80, marginRight: 16 }} />
                    <Box>
                        <Typography variant="h6" component="div" >
                            Псковский Государственный Университет
                        </Typography>
                        <Typography variant="body2" component="div" sx={{ fontSize: '12px'}}>
                            Победитель программы Министерства науки и высшего образования РФ «Приоритет 2030» <br />
                            Победитель программы Министерства науки и высшего образования РФ «Передовые инженерные школы»
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <IconButton color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                        {list}
                    </Drawer>
                    <IconsFromHeader/>
                </Box>
            </Toolbar>
        </AppBar>
    );
};


