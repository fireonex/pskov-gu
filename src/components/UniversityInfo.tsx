import React from 'react';
import { Box, Typography, Container, Paper, List, ListItem, ListItemText, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import photoOfUniversity from '../assets/photo-of-university.jpg';

const UniversityInfo: React.FC = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom>
                    О ПсковГУ
                </Typography>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="h6">
                        <MuiLink component={RouterLink} to="/print-version">
                            Версия для печати
                        </MuiLink>
                    </Typography>
                </Box>
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h6">
                        Разделы
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                        <List sx={{ display: 'flex', justifyContent: 'center' }}>
                            <ListItem sx={{ width: 'auto' }}>
                                <MuiLink component={RouterLink} to="/mission">
                                    Миссия
                                </MuiLink>
                            </ListItem>
                            <ListItem sx={{ width: 'auto' }}>
                                <MuiLink component={RouterLink} to="/history">
                                    История
                                </MuiLink>
                            </ListItem>
                        </List>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                    <img src={photoOfUniversity} alt="Псковский Государственный Университет" style={{ maxWidth: '100%', height: 'auto' }} />
                </Box>
                <Typography paragraph>
                    Псковский государственный университет, или ПсковГУ, один из 33 опорных вузов России. Вуз создан в 2010 году путём слияния двух высших учебных заведений (Псковский государственный педагогический университет имени Сергея Мироновича Кирова, Псковский государственный политехнический институт) и трёх средних профессиональных учебных заведений (Псковский индустриальный техникум, Псковский колледж строительства и экономики и Великолукский строительный колледж).
                </Typography>
                <Typography paragraph>
                    Вуз отличается наличием богатой учебно-материальной базы: 22 учебно-лабораторных корпуса, 11 студенческих общежитий, Дом студента, включающий общежитие и медико-реабилитационный центр с университетской поликлиникой, бассейн «Универсант», Центр студенческой инженерной деятельности. В 2019 году ПсковГУ завершил создание ряда научных лабораторий по новым нанотехнологиям, инженерной экологии, рациональному природопользованию и экономической безопасности. Научными руководителями лабораторий стали ведущие ученые из Российской академии наук (РАН) и Московского государственного университета имени М.В. Ломоносова (МГУ). Уникальной особенностью новых лабораторий стало оснащение самым современным оборудованием.
                </Typography>

                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        Планы развития:
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText primary="К 2030 году ПсковГУ на 100% закрывает кадровые потребности в педагогических работниках и руководителях школ региона, в том числе обеспечивая не менее 80% потребностей в дополнительном профессиональном образовании;" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Создана экосистема «адресной» подготовки абитуриентов под сетевые образовательные программы;" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Создан Российско-Белорусский образовательный центр поддержки и сопровождения талантливых школьников при ПсковГУ под приоритеты экономического развития и компетенции будущего;" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Реализуется пакет сетевых образовательных продуктов и сервисов совместно с партнерами сетевого университета по направлениям: медицина и здравоохранение, информационные технологии, инженерные технологии и системы, образование и гуманитаристика;" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Действует вариативная система подготовки научно-педагогических кадров и коллективов." />
                        </ListItem>
                    </List>
                </Box>
            </Paper>
        </Container>
    );
};

export default UniversityInfo;


