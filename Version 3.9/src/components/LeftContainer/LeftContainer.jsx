import React from 'react'
import CardContainer from './LCComponents/CardsContainer/CardContainer'
// import Footer from './LCComponents/Footer/LCFooter'
import styles from './leftcontainers.module.css'

const LeftContainer = (props) => {

    return (
        <>
            {/* toggleTheme={props.toggleTheme} */}
            <div className={styles.leftcontainers} style={props.themeStyles} >

                <CardContainer />
                {/* <Footer /> */}

            </div>
        </>
    )
}

export default LeftContainer
