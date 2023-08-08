import React from "react"
import { Outlet } from "react-router-dom"
import SearchBar from "../../Library/SearchBar/SearchBar"
import HomePageAppBar from './HomePageAppBar/HomePageAppBar'

const HeaderAppBar = (props) => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: "space-between" }}>
                <HomePageAppBar toggleTheme={props.toggleTheme} />
                <SearchBar themeStyles={props.themeStyles}/>
            </div>
            <Outlet />
        </>
    )
}

export default HeaderAppBar
