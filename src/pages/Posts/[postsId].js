import React from 'react'

function PostId({ posts }) {
    return (
        <div>

            <h1> {posts.id} {posts.title} </h1>
            <hr></hr>
            <h1>{posts.body}</h1>

        </div>
    )
}

export default PostId

export async function getStaticPaths() {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();

    const paths = data.map(post => {
        return {
            params: {
                postsId: `${post.id}`
            }
        }
    })

    return {

        paths,
        fallback: false
    }
}


export async function getStaticProps(context) {

    const { params } = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postsId}`);
    const data = await res.json();
    console.log(data)
    return {
        props: {
            posts: data
        }
    }

}


