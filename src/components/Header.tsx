import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { AiOutlineMail } from 'react-icons/ai';
import { MdVisibility } from 'react-icons/md';
import { FaVk, FaTelegramPlane, FaInfoCircle, FaRss } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
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
            <List>
                <ListItem>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Разделы сайта:
                    </Typography>
                </ListItem>
                <ListItem button component={NavLink} to="/university">
                    <ListItemText primary="Университет" />
                </ListItem>
                <ListItem button component={NavLink} to="/education">
                    <ListItemText primary="Образование" />
                </ListItem>
                <ListItem button component={NavLink} to="/science-and-innovation">
                    <ListItemText primary="Наука и инновации" />
                </ListItem>
                <ListItem button component={NavLink} to="/academic-council">
                    <ListItemText primary="Учёный совет" />
                </ListItem>
                <ListItem button component={NavLink} to="/youth-policy">
                    <ListItemText primary="Молодежная политика" />
                </ListItem>
                <ListItem button component={NavLink} to="/international-activity">
                    <ListItemText primary="Международная деятельность" />
                </ListItem>
                <ListItem button component={NavLink} to="/media">
                    <ListItemText primary="Медиа" />
                </ListItem>
                <ListItem button component={NavLink} to="/priority-2030">
                    <ListItemText primary="Приоритет 2030" />
                </ListItem>
                <ListItem button component={NavLink} to="/digital-department">
                    <ListItemText primary="Цифровая кафедра" />
                </ListItem>
                <ListItem button component={NavLink} to="/union-state">
                    <ListItemText primary="ПИШ Союзного государства" />
                </ListItem>
                <ListItem button component={NavLink} to="/consortium">
                    <ListItemText primary='Консорциум "ВМЕСТЕ"' />
                </ListItem>
                <ListItem button component={NavLink} to="/coordination-center">
                    <ListItemText primary="Координационный центр" />
                </ListItem>
                <ListItem button component={NavLink} to="/international-students">
                    <ListItemText primary="Сайт для иностранных студентов" />
                </ListItem>
                <ListItem button component={NavLink} to="/open-data">
                    <ListItemText primary="Открытые данные" />
                </ListItem>
                <ListItem button component={NavLink} to="/exam-and-testing">
                    <ListItemText primary="Экзамен и государственное тестирование по РКИ" />
                </ListItem>
            </List>
        </Box>
    );


    return (
        <AppBar position="static" color="primary">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt="Псковский Государственный Университет" style={{ height: 50, marginRight: 16 }} />
                    <Box>
                        <Typography variant="h6" component="div">
                            Псковский Государственный Университет
                        </Typography>
                        <Typography variant="body2" component="div" sx={{ fontSize: '12px' }}>
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
                    <IconButton color="inherit" aria-label="email" href="#">
                        <AiOutlineMail />
                    </IconButton>
                    <IconButton color="inherit" aria-label="visibility" href="#">
                        <MdVisibility />
                    </IconButton>
                    <IconButton color="inherit" aria-label="vk" href="#">
                        <FaVk />
                    </IconButton>
                    <IconButton color="inherit" aria-label="telegram" href="#">
                        <FaTelegramPlane />
                    </IconButton>
                    <IconButton color="inherit" aria-label="info" href="#">
                        <FaInfoCircle />
                    </IconButton>
                    <IconButton color="inherit" aria-label="rss" href="#">
                        <FaRss />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
