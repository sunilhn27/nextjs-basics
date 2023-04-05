import Posts from '@/Components/Posts';
import React from 'react'

function PostList({ posts }) {
    return (
        <div>
            <h1>List of Posts</h1>
            <Posts posts={posts}/>
        </div>
    )
}

export default PostList



export async function getStaticProps() {

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data)
    return {
        props: {
            posts: data.slice(0,9)
        }
    }
}