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
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';


const theme = createTheme();
function PrintersForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [postData, setPostData] = useState({
        prn_name: 'string',
        dprn_ip_address: 'string',
        prn_ip_port: 0,

    });


    // const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));

    const user = JSON.parse(localStorage.getItem('profile'));

    // useEffect(() => {
    //   if (post) setPostData(post);
    // }, [post]);

    const clear = () => {
        // setCurrentId(0);
        setPostData({
            prn_name: '',
            prn_ip_address: '',
            prn_ip_port: '',
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
                            Customer Discount Form
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6} sm={9} >
                                    <TextField
                                        required
                                        value={postData.prn_name}
                                        onChange={(e) => setPostData({ ...postData, prn_name: e.target.value })}
                                        name="description"
                                        fullWidth
                                        id="description"
                                        label="Description"
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        required
                                        onChange={(e) => setPostData({ ...postData, prn_ip_address: e.target.value })}
                                        value={postData.dprn_ip_address}
                                        fullWidth
                                        id="color"
                                        label="Color"
                                        name="color"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        required
                                        onChange={(e) => setPostData({ ...postData, prn_ip_port: e.target.value })}
                                        value={postData.prn_ip_port}
                                        fullWidth
                                        id="image_url"
                                        label="Image Url"
                                        name="image_url"
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

export default PrintersForm;

