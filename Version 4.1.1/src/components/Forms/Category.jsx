import React, { useState, useEffect } from 'react';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createPost, updatePost } from '../../redux/actions/posts';
import { NavLink, useNavigate } from "react-router-dom";
// import MultiSelectTreeView from '../Library/TreeViews/TreeViewObj';
import { useDispatch, useSelector } from 'react-redux';
// import RichObjectTreeView from '../Library/TreeViews/TreeViewObj';
// import TreeViewComponent from '../Library/TreeViews/TreeViewObjai';
// import ControlledTreeView from '../Library/TreeViews/TreeView/TreeView1';



const theme = createTheme();
function CategoryForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [postData, setPostData] = useState({
        cat_name: '',
        cat_description: '',
        cat_parent_id: 0,
        cat_color: '',
        cat_image_url: '',
        cat_level: '',
        cat_prn_id_fk: '',
        cat_is_active: '',
        cat_pos_idx_till: '',
        cat_show_on_till: '',
        cat_pop_id_fk: '',
        cat_is_active: '',

    });

    // const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));

    const user = JSON.parse(localStorage.getItem('profile'));

    // useEffect(() => {
    //   if (post) setPostData(post);
    // }, [post]);

    const clear = () => {
        // setCurrentId(0);
        setPostData({
            cat_name: '',
            cat_description: '',
            cat_parent_id: '',
            cat_color: '',
            cat_image_url: '',
            cat_level: '',
            cat_prn_id_fk: '',
            cat_is_active: '',
            cat_pos_idx_till: '',
            cat_show_on_till: '',
            cat_pop_id_fk: '',
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const formData = { postData }
        // console.log(formData)
        dispatch(createPost(postData, navigate));
        // dispatch(createPost({ ...postData, name: user?.result?.name }));
        clear();
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
                        <Typography component="h1" variant="h5" color={'black'}>
                            Select Your Category
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6} sm={3} >
                                    <TextField
                                        required
                                        // autoComplete="given-name"
                                        name="name"
                                        value={postData.cat_name}
                                        onChange={(e) => setPostData({ ...postData, cat_name: e.target.value })}
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
                                        value={postData.cat_description}
                                        onChange={(e) => setPostData({ ...postData, cat_description: e.target.value })}
                                        name="description"
                                        fullWidth
                                        id="description"
                                        label="Description"
                                    />
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <TextField
                                        required
                                        value={postData.cat_parent_id}
                                        onChange={(e) => setPostData({ ...postData, cat_parent_id: e.target.value })}
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
                                        onChange={(e) => setPostData({ ...postData, cat_color: e.target.value })}
                                        value={postData.cat_color}
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
                                        onChange={(e) => setPostData({ ...postData, cat_image_url: e.target.value })}
                                        value={postData.cat_image_url}
                                        fullWidth
                                        id="image_url"
                                        label="Image Url"
                                        name="image_url"
                                    // autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        required
                                        onChange={(e) => setPostData({ ...postData, cat_level: e.target.value })}
                                        value={postData.cat_level}
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
                                        onChange={(e) => setPostData({ ...postData, cat_prn_id_fk: e.target.value })}
                                        value={postData.cat_prn_id_fk}
                                        fullWidth
                                        id="prn_id_fk"
                                        label="Select Your Choice"
                                        name="prn_id_fk"
                                    // autoComplete="prn_id_fk"
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        required
                                        onChange={(e) => setPostData({ ...postData, cat_is_active: e.target.value })}
                                        value={postData.cat_is_active}
                                        fullWidth
                                        name="is_active"
                                        label="Status"
                                        type="is_active"
                                        id="is_active"
                                    // autoComplete="new-is_active"
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        required
                                        onChange={(e) => setPostData({ ...postData, cat_pos_idx_till: e.target.value })}
                                        value={postData.cat_pos_idx_till}
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
                                        onChange={(e) => setPostData({ ...postData, cat_show_on_till: e.target.value })}
                                        value={postData.cat_show_on_till}
                                        fullWidth
                                        name="show_on_till"
                                        label="show_on_till"
                                        type="show_on_till"
                                        id="show_on_till"
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        required
                                        value={postData.cat_pop_id_fk}
                                        onChange={(e) => setPostData({ ...postData, cat_pop_id_fk: e.target.value })}
                                        fullWidth
                                        name="pop_id_fk"
                                        label="pop_id_fk"
                                        type="pop_id_fk"
                                        id="pop_id_fk"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Submit Your Categary
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider >
        </>
    );
}
export default CategoryForm;