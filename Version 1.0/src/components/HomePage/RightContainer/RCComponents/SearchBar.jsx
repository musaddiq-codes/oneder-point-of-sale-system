import styled from '@emotion/styled'
import { Avatar, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const SearchBar = () => {


    return (
        <div style={{ height: '75px', backgroundColor: ' #060A17', display: "flex", justifyContent: 'space-between', marginTop: "5px",paddingRight:'5px' }}>
            <div>
                <div>
                    <SearchOutlinedIcon sx={{ marginTop: '10px' }} />
                </div>
            </div>
            <div display={'flex'}>
                <div>
                </div>
                <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', paddingRight: '5px' }}>
                    <div style={{ display: "flex", flexDirection: 'column', }}>
                        <h4>Example</h4>
                        <Typography variant='small' sx={{ fontSize: "10px" }}>Checked in 12:00</Typography>
                    </div>
                    <Avatar sx={{ bgcolor: 'orange' }}>N</Avatar>
                </div>
            </div>
        </div>
    )
}

export default SearchBar