import { Avatar, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const SearchBar = () => {

    return (
        <div style={{ height: '65px', backgroundColor: '#000312', display: "flex", justifyContent: 'space-between', alignItems: 'center', marginLeft: '4px', }}>
            <div>
                <div>
                    <SearchOutlinedIcon sx={{ marginTop: '10px', marginLeft: '5px' }} />
                </div>
            </div>
            <div display={'flex'}>
                <div style={{ display: "flex", justifyContent: 'space-b etween', alignItems: 'center', paddingRight: '5px' }}>
                    <Avatar sx={{ bgcolor: 'orange' }}>N</Avatar>
                    <div style={{ display: "flex", flexDirection: 'column', }}>
                        <p style={{ padding: '2px' }}>Example</p>
                        <p variant='small' style={{ fontSize: "10px", padding: '3px', marginTop: '3px' }}>Checked in 12:00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar