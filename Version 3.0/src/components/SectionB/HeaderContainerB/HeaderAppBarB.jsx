import React from "react"
import SearchBar from "./SearchBar/SearchBar"
import AppBarComp from "./AppBarComp/AppBarComp"


const HeaderAppBarB = () => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: "space-between" }}>
                <AppBarComp />
                <SearchBar />
            </div>
        </>
    )
}

export default HeaderAppBarB
