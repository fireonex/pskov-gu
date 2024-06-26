import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppRootStateType } from '../store/store';
import { List, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomList = styled(List)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: 0,
});

const CustomListItem = styled(NavLink)({
    textDecoration: 'none',
    color: 'inherit',
    padding: '0 10px',
    '&.active': {
        fontWeight: 'bold',
    },
});


const PagesList: React.FC = () => {
    const pages = useSelector((state: AppRootStateType) => state.pages.pages);

    return (
        <CustomList>
            {pages.map((page) => (
                <CustomListItem to={page.link} key={page.id}>
                    <ListItemText primary={page.title} />
                </CustomListItem>
            ))}
        </CustomList>
    );
};

export default PagesList;
