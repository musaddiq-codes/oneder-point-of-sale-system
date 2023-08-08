import React from 'react'
import GetCategory from './GetCategory'
import { getPosts } from '../../redux/actions/posts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


const GetData = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <>
            <GetCategory />
        </>
    )
}

export default GetData