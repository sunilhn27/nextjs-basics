import Comment from "@/Components/Comment";

function Comments({ comments }) {
    return (
        <div>
            {
                comments.map(comment => {
                    return (
                        <div key={comment.id}>
                            <Comment comments={comment} />
                        </div>
                    )
                })
            }


        </div>
    )
}

export default Comments



export async function getStaticProps() {


    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await response.json();
    console.log(data);
    return {

        props: {

            comments: data.slice(0,20)
        }
    }

}