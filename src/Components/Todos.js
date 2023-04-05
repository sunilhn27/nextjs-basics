import React from 'react'

function Todos({ todos }) {
    return (
        <div>
            {
                todos.map(todo => {
                    return (
                        <div key={todo.id}>
                            <p>{todo.id}</p>
                            <h1>{todo.title}</h1>
                        </div>

                    )
                })
            }

        </div>
    )
}

export default Todos
