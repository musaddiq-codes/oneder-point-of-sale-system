import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material'

const NestedNavBar = () => {
    return (
        <header>
            <div style={{ backgroundColor: '#060A17', display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
                <div>
                    <h2>Current Orders</h2>
                    <p>A list of all order in your store including their name and items.</p>
                </div>
                <div>
                    <nav>
                        <ul>
                            <Button sx={{ marginLeft: '25px', backgroundColor: '#4E41B9', borderRadius: '20px', color: 'white', width: "150px" }}>Clear Orders  </Button>
                            <NavLink to='/' style={{ textDecoration: 'none' }}><Button style={{ marginLeft: '25px', backgroundColor: '#3639CF', borderRadius: '20px', color: 'white', textDecoration: 'none' }} >Home</Button></NavLink>
                            <NavLink to='/orders/customers' style={{ textDecoration: 'none' }}> <Button sx={{ marginLeft: '25px', backgroundColor: '#5738AC', borderRadius: '20px', color: 'white', textDecoration: 'none' }}>Customers</Button></NavLink>
                            {/* <li><NavLink to='/orders/customers'>customers</NavLink></li> */}
                            {/* <li><NavLink to='/'>Back to Home</NavLink></li> */}
                            {/* <li><NavLink to='/adminboard'>Admin Pannel</NavLink></li> */}
                        </ul>
                    </nav>
                </div>
            </div>
        </header >
    )
}

export default NestedNavBar
