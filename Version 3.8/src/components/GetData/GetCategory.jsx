import React from 'react'
import { useSelector } from 'react-redux';


const GetCategory = () => {
    const posts = useSelector((state) => state.posts);

    // const posts = [
    //     {
    //         heading: 'Table X'
    //     },
    //     {
    //         heading: 'Table X'
    //     },
    // ]

    return (
        <>
            {/* {posts.map((post) =>
                <div key={post.id} style={{ backgroundColor: 'black' }}>
                    <p>{post.heading}</p>
                </div>
            )} */}

            {console.log(posts)}
        </>
    )
}

export default GetCategory