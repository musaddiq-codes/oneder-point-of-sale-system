import React from 'react'
import CardContainer from './LCComponents/CardsContainer/CardContainer'
import Footer from './LCComponents/Footer/LCFooter'
import styles from './leftcontainers.module.css'
import { Outlet } from "react-router-dom"

const LeftContainer = () => {

    return (
        <>
            <div className={styles.leftcontainers}>
                <CardContainer />
                {/* <Outlet /> */}
                <Footer />
            </div>
        </>
    )
}

export default LeftContainer
