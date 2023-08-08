import Typography from '@mui/material/Typography';


import React, { useState, useEffect } from 'react';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
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
function ProductForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [postData, setPostData] = useState({

        prd_name: "string",
        prd_description: "string",
        prd_barcode: "string",
        prd_cat_id_fk: 0,
        prd_siz_id_fk: 0,
        prd_unt_id_fk: 0,
        prd_cost_price: 0,
        prd_vat_id_fk: 0,
        prd_selling_price: 0,
        prd_margins: 0,
        prd_rrp: 0,
        prd_dsc_id_fk: 0,
        prd_discount_allowed: true,
        prd_loyality_points: true,
        prd_opening_stock: 0,
        prd_price_change_on_till: true,
        prd_color: "string",
        prd_image_url: "string",
        prd_is_deleted: true,
        prd_is_active: true
    });


    // const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));

    const user = JSON.parse(localStorage.getItem('profile'));

    // useEffect(() => {
    //   if (post) setPostData(post);
    // }, [post]);

    const clear = () => {
        // setCurrentId(0);
        setPostData({
            prd_name: "string",
            prd_description: "string",
            prd_barcode: "string",
            prd_cat_id_fk: 0,
            prd_siz_id_fk: 0,
            prd_unt_id_fk: 0,
            prd_cost_price: 0,
            prd_vat_id_fk: 0,
            prd_selling_price: 0,
            prd_margins: 0,
            prd_rrp: 0,
            prd_dsc_id_fk: 0,
            prd_discount_allowed: true,
            prd_loyality_points: true,
            prd_opening_stock: 0,
            prd_price_change_on_till: true,
            prd_color: "string",
            prd_image_url: "string",
            prd_is_deleted: true,
            prd_is_active: true
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
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6} sm={3} >
                                    <TextField
                                        required
                                        name="name"
                                        value={postData.prd_name}
                                        onChange={(e) => setPostData({ ...postData, prd_name: e.target.value })}
                                        fullWidth
                                        id="name"
                                        label="Full Name"
                                        autoFocus
                                    />
                                </Grid>

                                <Grid item xs={6} sm={9} >
                                    <TextField
                                        required
                                        value={postData.prd_description}
                                        onChange={(e) => setPostData({ ...postData, prd_description: e.target.value })}
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
                                        value={postData.prd_barcode}
                                        onChange={(e) => setPostData({ ...postData, prd_barcode: e.target.value })}
                                        fullWidth
                                        id="parent_id"
                                        label="Your ID"
                                        name="parent_id"
                                        type='parent_id'
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        required
                                        onChange={(e) => setPostData({ ...postData, prd_cat_id_fk: e.target.value })}
                                        value={postData.prd_cat_id_fk}
                                        fullWidth
                                        id="color"
                                        label="Color"
                                        name="color"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        required
                                        onChange={(e) => setPostData({ ...postData, prd_siz_id_fk: e.target.value })}
                                        value={postData.prd_siz_id_fk}
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
                                        onChange={(e) => setPostData({ ...postData, prd_unt_id_fk: e.target.value })}
                                        value={postData.prd_unt_id_fk}
                                        fullWidth
                                        name="level"
                                        label="Level"
                                        type="level"
                                        id="level"
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        required
                                        onChange={(e) => setPostData({ ...postData, prd_cost_price: e.target.value })}
                                        value={postData.prd_cost_price}
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
                                        onChange={(e) => setPostData({ ...postData, prd_vat_id_fk: e.target.value })}
                                        value={postData.prd_vat_id_fk}
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
                                        onChange={(e) => setPostData({ ...postData, prd_selling_price: e.target.value })}
                                        value={postData.prd_selling_price}
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
                                        onChange={(e) => setPostData({ ...postData, prd_margins: e.target.value })}
                                        value={postData.prd_margins}
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
                                        onChange={(e) => setPostData({ ...postData, prd_rrp: e.target.value })}
                                        value={postData.prd_rrp}
                                        fullWidth
                                        name="pop_id_fk"
                                        label="pop_id_fk"
                                        type="pop_id_fk"
                                        id="pop_id_fk"
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        required
                                        onChange={(e) => setPostData({ ...postData, prd_dsc_id_fk: e.target.value })}
                                        value={postData.prd_dsc_id_fk}
                                        fullWidth
                                        name="pop_id_fk"
                                        label="pop_id_fk"
                                        type="pop_id_fk"
                                        id="pop_id_fk"
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        required
                                        onChange={(e) => setPostData({ ...postData, prd_discount_allowed: e.target.value })}
                                        value={postData.prd_discount_allowed}
                                        fullWidth
                                        name="pop_id_fk"
                                        label="pop_id_fk"
                                        type="pop_id_fk"
                                        id="pop_id_fk"
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        required
                                        onChange={(e) => setPostData({ ...postData, prd_loyality_points: e.target.value })}
                                        value={postData.prd_loyality_points}
                                        fullWidth
                                        name="pop_id_fk"
                                        label="pop_id_fk"
                                        type="pop_id_fk"
                                        id="pop_id_fk"
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        required
                                        onChange={(e) => setPostData({ ...postData, prd_opening_stock: e.target.value })}
                                        value={postData.prd_opening_stock}
                                        fullWidth
                                        name="pop_id_fk"
                                        label="pop_id_fk"
                                        type="pop_id_fk"
                                        id="pop_id_fk"
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        required
                                        onChange={(e) => setPostData({ ...postData, prd_price_change_on_till: e.target.value })}
                                        value={postData.prd_price_change_on_till}
                                        fullWidth
                                        name="pop_id_fk"
                                        label="pop_id_fk"
                                        type="pop_id_fk"
                                        id="pop_id_fk"
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        required
                                        onChange={(e) => setPostData({ ...postData, prd_color: e.target.value })}
                                        value={postData.prd_color}
                                        fullWidth
                                        name="pop_id_fk"
                                        label="pop_id_fk"
                                        type="pop_id_fk"
                                        id="pop_id_fk"
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        required
                                        onChange={(e) => setPostData({ ...postData, prd_image_url: e.target.value })}
                                        value={postData.prd_image_url}
                                        fullWidth
                                        name="pop_id_fk"
                                        label="pop_id_fk"
                                        type="pop_id_fk"
                                        id="pop_id_fk"
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        required
                                        onChange={(e) => setPostData({ ...postData, prd_is_deleted: e.target.value })}
                                        value={postData.prd_is_deleted}
                                        fullWidth
                                        name="pop_id_fk"
                                        label="pop_id_fk"
                                        type="pop_id_fk"
                                        id="pop_id_fk"
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        required
                                        onChange={(e) => setPostData({ ...postData, prd_is_active: e.target.value })}
                                        value={postData.prd_is_active}
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
                                Done Selection
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider >
        </>
    );
}

const Products = () => {
    return (
        <div style={{ display: 'flex', width: "100%" }}>
            <ProductForm />
        </div>
    )
}

export default Products