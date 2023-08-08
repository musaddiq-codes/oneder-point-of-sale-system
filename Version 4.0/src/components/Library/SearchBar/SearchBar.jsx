import { Avatar } from '@mui/material'
import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import searchbarStyles from './searchbar.module.css'

const SearchBar = () => {

    return (
        <div className={searchbarStyles.searchbarmotherdiv}>
            <div>
                <div>
                    <SearchOutlinedIcon sx={{ marginTop: '10px', marginLeft: '5px' }} />
                </div>
            </div>
            <div display={'flex'}>
                <div className={searchbarStyles.nesteddiv2nesteddiv1}>
                    <Avatar sx={{ bgcolor: 'green' }}>M</Avatar>
                    <div style={{ display: "flex", flexDirection: 'column', }}>
                        <p style={{ padding: '2px' }}>Example</p>
                        <p variant='small' className={searchbarStyles.nesteddiv2nesteddiv1nesteddiv1p2}>Checked in 12:00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar