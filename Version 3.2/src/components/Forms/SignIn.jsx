import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { signin, signup } from '../../redux/actions/auth';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";


const theme = createTheme();

// const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

export default function SignIn() {
  // const [form, setForm] = useState(initialState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {

    event.preventDefault();

    const data = new FormData(event.currentTarget);
    // const email = data.get('email');
    // const password = data.get('password');

    //-----------------------------------------------------------------
    //-----------------------------------------------------------------
    // const email = data.get('email');
    // const password = data.get('password');
    // console.log({ email, password });
    // {email: 'musaddiqeland@gmail.com', password: 'K9X@M6TQUQadHiC'}
    //-----------------------------------------------------------------
    //-----------------------------------------------------------------

    //-----------------------------------------------------------------
    //-----------------------------------------------------------------
    // const form = {
    //   email: data.get('email'),
    //   password: data.get('password'),
    // }
    // console.log(form)
    // {email: 'musaddiqeland@gmail.com', password: 'K9X@M6TQUQadHiC'}
    //-----------------------------------------------------------------
    //-----------------------------------------------------------------

    const form = {
      usr_email: data.get('email'),
      usr_password: data.get('password'),
    }

    try {
      // console.log(form)
      dispatch(signin(form, navigate));

    } catch (error) {
      console.log(error.message)
    }

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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <NavLink to="/signup" style={{ color: "blue" }}>
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}