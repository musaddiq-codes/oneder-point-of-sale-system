
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom'


const StyledToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})



// import SearchIcon from '@mui/icons-material/Search';
// import { Link } from 'react-router-dom';

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));


export default function AppBarComp() {
  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#000312' }}>
        <StyledToolBar >
          {/* <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton> */}
          {/* <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}><Link to="/" >Home</Link>  </Typography> */}
          <Typography vriant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>Menu  </Typography>
          {/* <Search>
            <SearchIconWrapper><SearchIcon /></SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </Search> */}
          <div>        <header>
            <nav>
              <ul>
                {/* <li><NavLink to='/'>Home</NavLink></li> */}
                {/* <li><NavLink to='/about'>About</NavLink></li> */}
                {/* <li><NavLink to='/contact'>Contact</NavLink></li> */}
                {/* <li><NavLink to='/orders'>Orders</NavLink></li> */}
              </ul>
            </nav>
          </header>
            <Button sx={{ backgroundColor: '#0D1026', marginLeft: '20px', borderRadius: '20px', color: 'white', width: "150px" }}>Ammit R</Button>
            {/* <Button sx={{ backgroundColor: '#3538CE', marginLeft: '20px', borderRadius: '20px', color: 'white' }}>Orders</Button> */}
            <Button sx={{ backgroundColor: '#3538CE', marginLeft: '20px', borderRadius: '20px', color: 'white' }}><NavLink to='/'>Home</NavLink></Button>
            <Button sx={{ backgroundColor: '#583AAB', marginLeft: '20px', borderRadius: '20px', color: 'white' }}><NavLink to='/orders'>Orders</NavLink></Button>
            {/* <Button sx={{ backgroundColor: '#583AAB', marginLeft: '20px', borderRadius: '20px', color: 'white' }}>Customers</Button> */}
          </div>
        </StyledToolBar>
      </AppBar>
    </div>
  );
}
