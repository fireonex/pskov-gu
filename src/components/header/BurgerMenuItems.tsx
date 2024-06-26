import {List, ListItem, ListItemText, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import React from "react";

export const BurgerMenuItems = () => {
    return (
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
    )
}