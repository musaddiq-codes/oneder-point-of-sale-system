import React from "react"
import { Outlet } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
import AppBarComp from "./AppBarComp"


const HeaderAppBar = () => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: "space-between" }}>
                <div style={{ width: '75%' }}>
                    <AppBarComp />
                </div>
                <div style={{ width: '25%' }}>
                    <SearchBar />
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default HeaderAppBar
