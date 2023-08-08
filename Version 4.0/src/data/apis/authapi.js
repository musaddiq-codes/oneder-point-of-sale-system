
import axios from 'axios';

const authurl = 'https://api.onederpos.com/Api/Account/LoginWithEmail'

const API = axios.create({ baseURL: 'https://api.onederpos.com/Api/Account/LoginWithEmail' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const signIn = (formData) => API.post(authurl, formData);
export const signUp = (formData) => API.post(authurl, formData);



// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
// Successful attampt with MERN api code with localstorage intigrations
// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------

// import axios from 'axios';

// const authurl = 'https://api.onederpos.com/Api/Account/LoginWithEmail'

// const API = axios.create({ baseURL: 'https://api.onederpos.com/Api/Account/LoginWithEmail' });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem('profile')) {
//     req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//   }

//   return req;
// });

// // export const signIn = (formData) => axios.post(authurl, formData);

// export const signIn = (formData) => API.post(authurl, formData);




// export const signIn = (formData) => {
//     axios.post(authurl, formData);
//     console.log(formData)
// }

// export const signUp = (formData) => axios.post('/user/signup', formData);

// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
// Successful attampt for gaining tocken from server api
// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------



// import axios from 'axios';

// const authurl = 'https://api.onederpos.com/Api/Account/LoginWithEmail'

// // const API = axios.create({ baseURL: 'https://api.onederpos.com/Api/Account/LoginWithEmail' });

// // API.interceptors.request.use((req) => {
// //   if (localStorage.getItem('profile')) {
// //     req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
// //   }

// //   return req;
// // });

// export const signIn = (formData) => {
//     axios.post(authurl, formData);
//     console.log(formData)
// }

// // export const signUp = (formData) => axios.post('/user/signup', formData);






// import axios from 'axios';

// const authurl = 'https://api.onederpos.com/Api/Account/LoginWithEmail'

// // const API = axios.create({ baseURL: 'https://api.onederpos.com/Api/Account/LoginWithEmail' });

// // API.interceptors.request.use((req) => {
// //   if (localStorage.getItem('profile')) {
// //     req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
// //   }

// //   return req;
// // });

// export const signIn = (formData) => {
//   try {
//     console.log(formData)
//     axios.post(authurl, formData);
//     console.log(formData)
    
//   } catch (error) {
//     console.log(error.message)
//   }
// }

// // export const signUp = (formData) => axios.post('/user/signup', formData);




// import axios from 'axios';

// const authurl = 'https://api.onederpos.com/Api/Account/LoginWithEmail'

// // const API = axios.create({ baseURL: 'https://api.onederpos.com/Api/Account/LoginWithEmail' });

// // API.interceptors.request.use((req) => {
// //   if (localStorage.getItem('profile')) {
// //     req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
// //   }

// //   return req;
// // });

// export const signIn = (formData) => axios.post(authurl, formData);
// // export const signUp = (formData) => axios.post('/user/signup', formData);





// import axios from 'axios';

// // const authurl = 'https://api.onederpos.com/Api/Account/LoginWithEmail'

// const API = axios.create({ baseURL: 'https://api.onederpos.com/Api/Account/LoginWithEmail' });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem('profile')) {
//     req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//   }

//   return req;
// });

// export const signIn = (formData) => API.post('/user/signin', formData);
// export const signUp = (formData) => API.post('/user/signup', formData);
