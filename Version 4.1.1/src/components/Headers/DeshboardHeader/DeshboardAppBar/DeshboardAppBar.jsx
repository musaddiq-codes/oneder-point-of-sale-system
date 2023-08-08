
import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom'
import Demos from '../../../../components/Library/SideMenu/SideMenu'
import appbarstyless from './appbarstyles.module.css'

const StyledToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

export default function AppBarComp(props) {
  return (
    <div className={appbarstyless.appbarrmotherdiv}>
      <AppBar position="static" sx={{ backgroundColor: '#000312' }}>
        <StyledToolBar >
          <Demos />
          <div>
            {/* <NavLink to='/deshboard' style={{ textDecoration: 'none' }}><Button sx={{ width: '100px', backgroundColor: '#3538CE', marginLeft: '20px', borderRadius: '20px', color: 'white' }}>Deshboard</Button></NavLink> */}
            <NavLink to='/deshboard' style={{ textDecoration: 'none' }}><Button sx={{ width: '100px', backgroundColor: '#3538CE', marginLeft: '20px', borderRadius: '20px', color: 'white' }}>Deshboard</Button></NavLink>
            {/* <NavLink to='/getcategory' style={{ textDecoration: 'none' }}><Button sx={{ width: '100px', backgroundColor: '#583AAB', marginLeft: '20px', borderRadius: '20px', color: 'white' }}>Get</Button></NavLink>            */}
            <NavLink to='/deshboard/allforms' style={{ textDecoration: 'none' }}><Button sx={{ width: '100px', backgroundColor: '#583AAB', marginLeft: '20px', borderRadius: '20px', color: 'white' }}>Details</Button></NavLink>
            <NavLink to='/orders' style={{ textDecoration: 'none' }}><Button sx={{ width: '100px', backgroundColor: '#583AAB', marginLeft: '20px', borderRadius: '20px', color: 'white' }}>Orders</Button></NavLink>
            <NavLink to='/' style={{ textDecoration: 'none' }}><Button sx={{ width: '100px', backgroundColor: '#583AAB', marginLeft: '20px', borderRadius: '20px', color: 'white' }}>Logout</Button></NavLink>
            {/* <header>
              <nav>
                <ul> */}
            {/* <li><NavLink to='/'>Home</NavLink></li> */}
            {/* <li><NavLink to='/about'>About</NavLink></li> */}
            {/* <li><NavLink to='/contact'>Contact</NavLink></li> */}
            {/* <li><NavLink to='/orders'>Orders</NavLink></li> */}
            {/* </ul>
              </nav>
            </header> */}
          </div>
        </StyledToolBar>
      </AppBar>
    </div >
  );
}
