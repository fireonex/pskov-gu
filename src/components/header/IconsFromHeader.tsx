import {IconButton} from "@mui/material";
import {AiOutlineMail} from "react-icons/ai";
import {MdVisibility} from "react-icons/md";
import {FaInfoCircle, FaRss, FaTelegramPlane, FaVk} from "react-icons/fa";
import React from "react";


export const IconsFromHeader = () => {
    return (
        <>
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
        </>
    );
};