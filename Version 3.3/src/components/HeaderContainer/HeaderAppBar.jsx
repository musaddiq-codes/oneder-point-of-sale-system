import React from "react"
import { Outlet } from "react-router-dom"
import SearchBar from "./SearchBar/SearchBar"
import AppBarComp from "./AppBarComp/AppBarComp"


const HeaderAppBar = () => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: "space-between" }}>
                <AppBarComp />
                <SearchBar />
            </div>
            <Outlet />
        </>
    )
}

export default HeaderAppBar
