import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createPost, updatePost } from '../../redux/actions/posts';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';


const theme = createTheme();
function SizeForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [postData, setPostData] = useState({
        siz_name: 'string',
        siz_description: 'string',

    });


    // const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));

    const user = JSON.parse(localStorage.getItem('profile'));

    // useEffect(() => {
    //   if (post) setPostData(post);
    // }, [post]);

    const clear = () => {
        // setCurrentId(0);
        setPostData({
            siz_name: '',
            siz_description: '',
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
                                        value={postData.siz_name}
                                        onChange={(e) => setPostData({ ...postData, siz_name: e.target.value })}
                                        name="description"
                                        fullWidth
                                        id="description"
                                        label="Description"
                                    />
                                </Grid>
                                <Grid item xs={6} sm={9} >
                                    <TextField
                                        required
                                        value={postData.siz_description}
                                        onChange={(e) => setPostData({ ...postData, siz_description: e.target.value })}
                                        name="description"
                                        fullWidth
                                        id="description"
                                        label="Description"
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

const Size = () => {
    return (
        <div style={{ display: 'flex', width: "100%" }}>
            <SizeForm />
        </div>
    )
}

export default Size

