import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createPost } from '../../redux/actions/posts';
import { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import MultiSelectTreeView from './TreeView';
import RichObjectTreeView from './TreeViewObj';
const theme = createTheme();

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);


    const form = {
      cat_name: 'astetraksdlsllsagainfjlkasdjf',
      cat_description: 'asddsf',
      // cat_parent_id: 0,
      cat_color: 'sdfsdffff',
      cat_image_url: 'sdfsdffffffff',
      // cat_image_url: data.get('image_url'),
      // cat_level: 0,
      // cat_prn_id_fk: 0,
      // cat_is_active: true,
      // cat_pos_idx_till: 0,
      // cat_show_on_till: true,
      // cat_pop_id_fk: 0
      // cat_is_active: data.get(true),
    }

    try {
      dispatch(createPost(form, navigate));
      console.log(form)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* maxWidth propert and sx width 70% for controlling signup form */}
        <Container component="main" maxWidth="xl" sx={{ width: "70%", backgroundColor: 'white' }}>
          {/* <Container component="main"  sx={{ backgroundColor: "pink", width: "200%" }}> */}
          <CssBaseline />
          <Box
            sx={{
              marginTop: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',

            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" color={'black'}>
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, marginTop: -2,backgroundColor:"green" }}> */}
              <Grid container spacing={2}>
                {/* <Grid item xs={6} sm={3} >
                  <TextField
                    required
                    // autoComplete="given-name"
                    name="name"
                    fullWidth
                    id="name"
                    label="Full Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={6} sm={3} >
                  <TextField
                    required
                    // autoComplete="given-name"
                    name="description"
                    fullWidth
                    id="description"
                    label="Description"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={6} sm={3}>
                  <TextField
                    required
                    fullWidth
                    id="parent_id"
                    label="parent_id"
                    name="parent_id"
                    type='parent_id'
                  // autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    required
                    fullWidth
                    id="color"
                    label="Color"
                    name="color"
                  // autoComplete="color"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    id="image_url"
                    label="Image Url"
                    name="image_url"
                  // autoComplete="email"
                  />
                </Grid> */}

                {/* <Grid item xs={3}>
                  <TextField
                    required
                    fullWidth
                    name="level"
                    label="Level"
                    type="level"
                    id="level"
                  // autoComplete="new-level"
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    required
                    fullWidth
                    id="prn_id_fk"
                    label="FK List"
                    name="prn_id_fk"
                  // autoComplete="prn_id_fk"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    required
                    fullWidth
                    name="is_active"
                    label="Status"
                    type="is_active"
                    id="is_active"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    required
                    fullWidth
                    name="pos_idx_till"
                    label="pos_idx_till"
                    type="pos_idx_till"
                    id="pos_idx_till"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    required
                    fullWidth
                    name="show_on_till"
                    label="show_on_till"
                    type="show_on_till"
                    id="show_on_till"
                  />
                </Grid> */}
                {/* <Grid item xs={4}>
                  <TextField
                    required
                    fullWidth
                    name="pop_id_fk"
                    label="pop_id_fk"
                    type="pop_id_fk"
                    id="pop_id_fk"
                  />
                </Grid> */}
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit Category
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider >
    </>
  );
}

const CategoryPureMUI = () => {
  return (
    <div style={{ display: 'flex', width: "100%" }}>
      <RichObjectTreeView />
      {/* <MultiSelectTreeView /> */}
      <SignUp />
    </div>
  )
}

export default CategoryPureMUI;