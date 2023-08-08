import { Button, Grid } from '@mui/material'
import React from 'react'

const RCFooter = () => {
    return (
        <div style={{ display: 'flex', }}>
            <div style={{ width: '50%', textAlign: 'center' }}>
                <Button variant='contained' sx={{ width: "100%", padding: 1, backgroundColor: '#3538CE' }}>KOT</Button>
            </div>
            <div style={{ width: '50%', textAlign: 'center' }}>
                <Button variant='contained' sx={{ width: "100%", padding: 1, backgroundColor: '#583AAB' }}>Place Order</Button>
            </div>
        </div>
    )
}

export default RCFooter