import React from 'react'
import Todos from '@/Components/Todos';

function index({ todos }) {
    return (
        <div>
            <h1>Todos</h1>
          <Todos todos={todos}/>
        </div>
    )
}

export default index



export async function getStaticProps() {

    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    return {
        props: {
            todos: data
        }
    }
}