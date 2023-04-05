import React from 'react'

function Posts({ posts }) {
    return (
        <div>
            {
                posts.map(post => {
                    return (
                        <div key={post.id}>
                            <h1> {post.title}</h1>
                            <h4> {post.body}</h4>
                            <hr></hr>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Posts
