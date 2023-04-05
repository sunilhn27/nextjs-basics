
function index({ products }) {

    return (
        <div>
            {
                products.map(product => {
                    return (
                        <div key={product.id}>
                            <h1>Name :{product.name}</h1>
                            <p>Quantity :{product.Quantity}</p>

                            <p>Price :{product.Price}</p>
                            <hr></hr>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default index


export async function getStaticProps() {

    const response = await fetch('http://localhost:4000/Products');
    const data =await response.json();

    return {

        props: {
            products: data
        }
    }
}