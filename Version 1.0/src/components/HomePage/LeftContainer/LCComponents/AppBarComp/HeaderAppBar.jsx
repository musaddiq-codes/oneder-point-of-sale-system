import React from "react"
import { Outlet } from "react-router-dom"
import AppBarComp from "./AppBarComp"


const HeaderAppBar = () => {
    return (
        <>
            <div style={{ width: "75%" }}>
                <AppBarComp />
            </div>
            <Outlet />
        </>
    )
}

export default HeaderAppBar
