import React from 'react'

function Comment({ comments }) {
    return (
        <div>
            <h1>ID: {comments.id} {comments.name}</h1>
            <p>{comments.body}</p>
            <hr />
        </div>
    )
}

export default Comment
