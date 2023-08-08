import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createPost, updatePost } from '../../redux/actions/posts';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

const theme = createTheme();
function TablesForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const [postData, setPostData] = useState({
    //     tbl_table_name: 0,
    //     tbl_seating_capacity: 'string',
    // tbl_loc_id_fk: 0,
    //     tbl_color: true,
    //     tbl_is_avaiabl: true,
    // });

    const [postData, setPostData] = useState({
        tbl_table_name: '',
        tbl_seating_capacity: '',
        tbl_loc_id_fk: 0,
        tbl_color: '',
        tbl_is_avaiabl: '',

    });


    // const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));

    const user = JSON.parse(localStorage.getItem('profile'));

    // useEffect(() => {
    //   if (post) setPostData(post);
    // }, [post]);

    const clear = () => {
        // setCurrentId(0);
        setPostData({
            tbl_table_name: '',
            tbl_seating_capacity: '',
            // tbl_loc_id_fk: '',
            tbl_color: '',
            tbl_is_avaiabl: '',
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
                <Container component="main" maxWidth="xl" sx={{ width: "70%", backgroundColor: 'white' }}>
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',

                        }}
                    >
                        <Typography component="h1" variant="h5" color={'black'}>
                            Customer Table Form
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, marginTop: -2,backgroundColor:"green" }}> */}
                            <Grid container spacing={2}>
                                <Grid item xs={6} sm={3} >
                                    <TextField
                                        required
                                        // autoComplete="given-name"
                                        name="name"
                                        value={postData.tbl_table_name}
                                        onChange={(e) => setPostData({ ...postData, tbl_table_name: e.target.value })}
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
                                        value={postData.tbl_seating_capacity}
                                        onChange={(e) => setPostData({ ...postData, tbl_seating_capacity: e.target.value })}
                                        name="description"
                                        fullWidth
                                        id="description"
                                        label="Description"
                                    />
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <TextField
                                        required
                                        // value={postData.tbl_loc_id_fk}
                                        // onChange={(e) => setPostData({ ...postData, tbl_loc_id_fk: e.target.value })}
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
                                        onChange={(e) => setPostData({ ...postData, tbl_color: e.target.value })}
                                        value={postData.tbl_color}
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
                                        onChange={(e) => setPostData({ ...postData, tbl_is_avaiabl: e.target.value })}
                                        value={postData.tbl_is_avaiabl}
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

export default TablesForm;