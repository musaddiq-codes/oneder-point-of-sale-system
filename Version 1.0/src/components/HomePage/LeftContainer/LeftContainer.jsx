import React from 'react'
import CardContainer from './LCComponents/CardsContainer/CardContainer'
import Footer from './LCComponents/Footer/LCFooter'
import AppBarComp from './LCComponents/AppBarComp/AppBarComp'
const LeftContainer = () => {
    return (
        <div style={{ display:'flex', flexDirection:'column', width:'75%'}}>
            {/* <div style={{ width: "100%" }}>
                <AppBarComp />
            </div> */}
            <div style={{ display: 'flex', justifyContent: 'space-between', flexFlow: 'column', height:'100vh'}}>
                <div style={{ width: "100%" }}>
                    <CardContainer />
                </div>
                <div style={{ width: "100%" }}>
                    <Footer />
                </div>
            </div>
        </div >
    )
}

export default LeftContainer
