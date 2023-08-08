

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { signin, signup } from '../../redux/actions/auth';
import { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";

const theme = createTheme();

export default function SignUp() {

  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const form = {
      usr_firstname: data.get('firstName'),
      usr_lastname: data.get('lastName'),
      usr_email: data.get('email'),
      usr_password: data.get('password'),
      usr_pin_code: data.get('pin'),
      usr_phone: '0308-5685649',
      usr_rol_id_fk: 0,
      usr_is_active: true,
      usr_createdon: "2023-03-13T11:20:14.769Z",
      // usr_phone: data.get('String'),
      // usr_rol_id_fk: data.get(0),
      // usr_is_active: data.get(true),
      // usr_createdon: data.get("2023-03-13T11:20:14.769Z"),
    }


    try {
      dispatch(signup(form, navigate));
      // console.log(form)

    } catch (error) {

      console.log(error.message)

    }
  }

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  // autoComplete="given-name"
                  name="firstName"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                // autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                // autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                // autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  name="cell"
                  label="Cell Number"
                  type="number"
                  id="cellnumber"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  name="pin"
                  label="Pin Code"
                  type="number"
                  id="pincode"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="secondary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button onClick={switchMode}>
                  <NavLink to="/signin" style={{ color: 'blue' }} >
                    Already have an account? Sign in
                  </NavLink>
                </Button>
                {/* <Button onClick={switchMode}>
                  {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                </Button> */}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider >
  );
}





// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import { TextField } from '@mui/material';
// // import FormControlLabel from '@mui/material/FormControlLabel';
// // import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import { useDispatch } from 'react-redux';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// // const theme = makeStyles();
// import { useState } from 'react';
// import { signin, signup } from '../../redux/actions/auth';
// // import { AUTH } from '../../constants/actionTypes';
// import { useNavigate } from "react-router-dom";


// const theme = createTheme();


// const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };


// export default function SignUp() {
//   const [form, setForm] = useState(initialState);
//   const [isSignup, setIsSignup] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (isSignup) {
//       dispatch(signup(form, navigate));
//     } else {
//       dispatch(signin(form, navigate));
//     }
//   };


//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   handleChange={handleChange}
//                   required
//                   // autoComplete="given-name"
//                   name="firstName"
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                 />
//               </Grid>
//               {/* <Grid item xs={12} sm={6}>
//                 <TextField
//                   handleChange={handleChange}
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                 // autoComplete="family-name"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   handleChange={handleChange}
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   type="email"
//                 // autoComplete="email"
//                 />
//               </Grid> */}
//               {/* <Grid item xs={12}>
//                 <TextField
//                   handleChange={handleChange}
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                 // autoComplete="new-password"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   handleChange={handleChange}
//                   required
//                   fullWidth
//                   name="confirmPassword"
//                   label="Repeat Password"
//                   type="password"
//                   id="password"
//                 // autoComplete="new-password"
//                 />
//               </Grid> */}
//               {/* <Grid item xs={6}>
//                 <TextField
//                 handleChange={handleChange}
//                   required
//                   fullWidth
//                   name="cell"
//                   label="Cell Number"
//                   type="number"
//                   id="cellnumber"
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <TextField
//                   handleChange={handleChange}
//                   required
//                   fullWidth
//                   name="pin"
//                   label="Pin Code"
//                   type="number"
//                   id="pincode"
//                 />
//               </Grid> */}
//               {/* <Grid item xs={12}>
//                 <FormControlLabel
//                   control={<Checkbox value="allowExtraEmails" color="secondary" />}
//                   label="I want to receive inspiration, marketing promotions and updates via email."
//                 />
//               </Grid> */}
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// }



// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// // import FormControlLabel from '@mui/material/FormControlLabel';
// // import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';


// const theme = createTheme();

// export default function SignUp() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//       firstname: data.get('firstName'),
//       lastname: data.get('lastName'),
//       pin: data.get('pin'),
//       age: data.get('age'),
//     });

//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   // autoComplete="given-name"
//                   name="firstName"
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   // autoComplete="family-name"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   // autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   // autoComplete="new-password"
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="cell"
//                   label="Cell Number"
//                   type="number"
//                   id="cellnumber"
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="pin"
//                   label="Pin Code"
//                   type="number"
//                   id="pincode"
//                 />
//               </Grid>
//               {/* <Grid item xs={12}>
//                 <FormControlLabel
//                   control={<Checkbox value="allowExtraEmails" color="secondary" />}
//                   label="I want to receive inspiration, marketing promotions and updates via email."
//                 />
//               </Grid> */}
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// }
