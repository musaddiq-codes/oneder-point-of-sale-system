import React from 'react'
import { Outlet } from 'react-router-dom'
const LandingPage = () => {
    return (
        <div>LandingPage
            {/* <div style={{ display: 'flex', justifyContent: "space-between" }}>
                <HomePageAppBar toggleTheme={props.toggleTheme} />
                <SearchBar themeStyles={props.themeStyles} />
            </div> */}
            <Outlet />
        </div>
    )
}

export default LandingPage