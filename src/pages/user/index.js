import React from 'react'
import { useState } from 'react'


function index() {

    const [users, setUsers] = useState([]);

    const [user, setUser] = useState('');

    const fetchUsers = async () => {
        const res = await fetch(`http://localhost:3000/api/users`);
        const data = await res.json();
        setUsers(data);
    }


    async function handleAddUser() {
        const res = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({ user }),
            headers: {
                "Content-Type": "application/json"
            }

        });
        const data = await res.json()
        console.log("***************")
        console.log(data);
        fetchUsers();
    }

    return (
        <div>
            <input type='text' value={user} onChange={(e) => setUser(e.target.value)} />
            <button onClick={handleAddUser}>Add user</button>
            <button onClick={fetchUsers}>Show Users</button>
            {
                users.map(user => {
                    return (
                        <div key={user.id} >
                            <h1>{user.name}</h1>
                            <h1>{user.email}</h1>
                            <hr />
                        </div>

                    )
                })
            }

        </div>
    )
}

export default index
