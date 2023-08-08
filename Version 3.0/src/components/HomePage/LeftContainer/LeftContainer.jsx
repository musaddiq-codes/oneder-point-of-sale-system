import React from 'react'
import CardContainer from './LCComponents/CardsContainer/CardContainer'
import Footer from './LCComponents/Footer/LCFooter'
import styles from './leftcontainers.module.css'

const LeftContainer = () => {

    return (
        <>
            <div className={styles.leftcontainers}>
                <CardContainer />
                <Footer />
            </div>
        </>
    )
}

export default LeftContainer
