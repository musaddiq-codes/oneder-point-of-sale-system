
// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------
// 
// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------

import { AUTH } from '../constants';
import * as api from '../../data/apis/authapi';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    router('/deshboard');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    // console.log(data)
    dispatch({ type: AUTH, data });
    router('/deshboard');
  } catch (error) {
    console.log(error);
  }
};

// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------
// Succful attampt for gaining token from localstorage
// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------

// import { AUTH } from '../../data/constants';
// import * as api from '../../apis/authapi';

// export const signin = (formData, router) => async (dispatch) => {
//   try {

//     // console.log(formData)

//     const { data } = await api.signIn(formData);

//     console.log(data)
//     console.log({ data })

//     // const { data } = await api.signIn(formData);

//     // console.log(formData)

//     dispatch({ type: AUTH, data });

//     router('/');
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const signup = (formData, router) => async (dispatch) => {
//   try {
//     const { data } = await api.signUp(formData);

//     dispatch({ type: AUTH, data });

//     router.push('/');
//   } catch (error) {
//     console.log(error);
//   }
// };


// import { AUTH } from '../../data/constants';
// import * as api from '../../apis/authapi';

// export const signin = (formData, router) => async (dispatch) => {
//   try {

//     // console.log(formData)

//     const { data } = await api.signIn(formData);

//     // console.log(formData)

//     dispatch({ type: AUTH, data });

//     router('/');
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const signup = (formData, router) => async (dispatch) => {
//   try {
//     const { data } = await api.signUp(formData);

//     dispatch({ type: AUTH, data });

//     router.push('/');
//   } catch (error) {
//     console.log(error);
//   }
// };
