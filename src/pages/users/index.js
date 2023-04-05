import React from 'react'
import User from '@/Components/user'

function index({ users }) {
    return (
        <div>
            <h1> Users List</h1>
            {
                users.map(user => {
                    return (
                        <div key ={user.id}>
                           <User user={user}/>

                        </div>

                    )
                })
            }
        </div>
    )
}




export default index


export async function getStaticProps() {

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data)
    return {
        props: {
            users: data,
        },
    }
}

