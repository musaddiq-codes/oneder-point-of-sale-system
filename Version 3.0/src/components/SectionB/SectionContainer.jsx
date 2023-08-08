import React, { useState } from 'react'
import HeaderAppBarB from './HeaderContainerB/HeaderAppBarB';

import HomePageB from './HomePageB/HomePageB';
// import Button from '@mui/material/Button';
// import styles from './sectioncontainer.module.css'

// import { Outlet } from "react-router-dom"


export default function SectionContainer(props) {

    return (
        <>
            <HeaderAppBarB />
            <HomePageB />
            {/* <Outlet /> */}
        </>
    );
}
