import React from 'react'

function commentId({ comments }) {
    return (

        <div key={comments.id}>
            <h1>{comments.name}</h1>
            <p>{comments.body}</p>
            <hr />
        </div>


    )
}

export default commentId


export async function getStaticPaths() {

    const response = await fetch(`https://jsonplaceholder.typicode.com/comments/?postId=1`)
    const data = await response.json();
    console.log("*********************************************************")
    const paths = data.map(comment => {
        console.log(comment.id)
        return {

            params: {
                commentId: `${comment.id}`
            }
        }
    })
    return {
        paths,
        fallback: false
    }

    // return {
    //     paths: [
    //         {
    //             params: { commentId: '1' }
    //         },
    //         {
    //             params: { commentId: '2' },

    //         },
    //     ],
    //     fallback: false
    // }

}


export async function getStaticProps(context) {

    const { params } = context;
    console.log("Params " + params.commentId);
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`)
    const data = await response.json();
    return {

        props: {
            comments: data
        }
    }



}


