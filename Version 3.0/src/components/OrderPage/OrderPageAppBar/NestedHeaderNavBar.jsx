import React from "react"
import { Outlet } from "react-router-dom"
import NestedHeader from "./NestedHeader"


const NestedHeaderNavBar = () => {
    return (
        <>
            <NestedHeader />
            <Outlet />
        </>
    )
}

export default NestedHeaderNavBar
