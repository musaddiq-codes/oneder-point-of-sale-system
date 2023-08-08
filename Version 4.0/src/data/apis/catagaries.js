import axios from 'axios';

const catagariesUrl = 'https://api.onederpos.com/api/Categories/Insert';
const getpostsurl = 'https://api.onederpos.com/api/Categories/SelectChildrenByParent';
const API = axios.create({ baseURL: 'https://api.onederpos.com/api/Categories/Insert' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});


export const fetchPosts = () => axios.get(getpostsurl);
// export const fetchPosts = () => API.get('/posts');
export const createPost = (newCatagry) => API.post(catagariesUrl, newCatagry);
// export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
// export const deletePost = (id) => API.delete(`/posts/${id}`);
