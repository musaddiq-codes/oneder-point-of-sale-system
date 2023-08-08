import React, { useState, useEffect } from 'react';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createPost, updatePost } from '../../redux/actions/posts';
import { NavLink, useNavigate } from "react-router-dom";
import MultiSelectTreeView from '../Library/TreeViews/TreeViewObj';
import { useDispatch, useSelector } from 'react-redux';
// import RichObjectTreeView from './TreeViewObj';
// import TreeViewComponent from './TreeViewObjai';


const theme = createTheme();
function DiscountForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const [postData, setPostData] = useState({
    //     dsc_id: 0,
    //     dsc_name: 'string',
    //     // dsc_rate: 0,
    //     dsc_is_percent: true,
    //     dsc_is_active: true,
    // });

    const [postData, setPostData] = useState({
        dsc_id: '',
        dsc_name: '',
        // dsc_rate: 0,
        dsc_is_percent: '',
        dsc_is_active: '',

    });


    // const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));

    const user = JSON.parse(localStorage.getItem('profile'));

    // useEffect(() => {
    //   if (post) setPostData(post);
    // }, [post]);

    const clear = () => {
        // setCurrentId(0);
        setPostData({
            dsc_id: '',
            dsc_name: '',
            dsc_rate: '',
            dsc_is_percent: '',
            dsc_is_active: '',
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const formData = { postData }
        // console.log(formData)
        dispatch(createPost(postData, navigate));
        // dispatch(createPost({ ...postData, name: user?.result?.name }));
        // clear();
        // if (currentId === 0) {
        //   dispatch(createPost({ ...postData, name: user?.result?.name }));
        //   clear();
        // } else {
        //   dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
        //   clear();
        // }
    }

    // if (!user?.result?.name) {
    //   return (
    //     <div >
    //       <p variant="h6" align="center">
    //         Please Sign In to create your own memories and like other's memories.
    //       </p>
    //     </div>
    //   );
    // }

    return (
        <>
            <ThemeProvider theme={theme}>
                {/* Form Width controler is this container two properties affectable are maxWidth and widht 70% */}
                <Container component="main" maxWidth="xl" sx={{ width: "70%", backgroundColor: 'white' }}>
                    {/* <Container component="main" sx={{ backgroundColor: "pink", width: "200%" }}> */}
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',

                        }}
                    >
                        {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
                        {/* <Typography component="h1" variant="h5" color={'black'}>
                            Customer Discount Form
                        </Typography> */}
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, marginTop: -2,backgroundColor:"green" }}> */}
                            <Grid container spacing={2}>
                                <Grid item xs={6} sm={3} >
                                    <TextField
                                        required
                                        // autoComplete="given-name"
                                        name="name"
                                        value={postData.dsc_id}
                                        onChange={(e) => setPostData({ ...postData, dsc_id: e.target.value })}
                                        fullWidth
                                        id="name"
                                        label="Full Name"
                                        autoFocus
                                    />
                                </Grid>

                                <Grid item xs={6} sm={9} >
                                    <TextField
                                        required
                                        // autoComplete="given-name"
                                        value={postData.dsc_name}
                                        onChange={(e) => setPostData({ ...postData, dsc_name: e.target.value })}
                                        name="description"
                                        fullWidth
                                        id="description"
                                        label="Description"
                                    />
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <TextField
                                        required
                                        value={postData.dsc_rate}
                                        onChange={(e) => setPostData({ ...postData, dsc_rate: e.target.value })}
                                        fullWidth
                                        id="parent_id"
                                        label="Your ID"
                                        name="parent_id"
                                        type='parent_id'
                                    // autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        required
                                        onChange={(e) => setPostData({ ...postData, dsc_is_percent: e.target.value })}
                                        value={postData.dsc_is_percent}
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
                                        onChange={(e) => setPostData({ ...postData, dsc_is_active: e.target.value })}
                                        value={postData.dsc_is_active}
                                        fullWidth
                                        id="image_url"
                                        label="Image Url"
                                        name="image_url"
                                    // autoComplete="email"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Submit Discount
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider >
        </>
    );
}
export default DiscountForm;
