import React from "react"
import { Outlet } from "react-router-dom"
import SearchBar from "../../../components/Library/SearchBar/SearchBar"
import DeshboardAppBar from './DeshboardAppBar/DeshboardAppBar'
const DeshboardHeader = (props) => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: "space-between" }}>
                <DeshboardAppBar toggleTheme={props.toggleTheme} />
                <SearchBar themeStyles={props.themeStyles} />
            </div>
            <Outlet />
        </>
    )
}

export default DeshboardHeader
