
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom'
// import ToggleColorMode from './DarkMood';
import Demos from '../SideMenu/SideMenu'
// import appbarstyless from './appbarstyles.module.css'
// import './index.module.css'

const StyledToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})


export default function AppBarComp() {
  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#000312' }}>
        <StyledToolBar >
          <Demos />
          <div>
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
            <NavLink to='/orders' style={{ textDecoration: 'none' }}><Button sx={{ width: '100px', backgroundColor: '#583AAB', marginLeft: '20px', borderRadius: '20px', color: 'white' }}>Orders</Button></NavLink>
            <NavLink to='/' style={{ textDecoration: 'none' }}><Button sx={{ width: '100px', backgroundColor: '#3538CE', marginLeft: '20px', borderRadius: '20px', color: 'white' }}>Home</Button></NavLink>
            <NavLink to='/signup' style={{ textDecoration: 'none' }}><Button sx={{ backgroundColor: '#583AAB', marginLeft: '20px', borderRadius: '20px', color: 'white' }}>Sign Up</Button></NavLink>
            <NavLink to='/signin' style={{ textDecoration: 'none' }}><Button sx={{ backgroundColor: '#3538CE', marginLeft: '20px', borderRadius: '20px', color: 'white' }}>Sign In</Button></NavLink>
            {/* <NavLink to='/auth' style={{ textDecoration: 'none' }}><Button sx={{ backgroundColor: '#583AAB', marginLeft: '20px', borderRadius: '20px', color: 'white' }}>Auth</Button></NavLink> */}
          </div>
        </StyledToolBar>
      </AppBar>
    </div >
  );
}
