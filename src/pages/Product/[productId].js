//import { useRouter } from "next/router"

function productId({ product }) {
  return (
    <div key={product.id}>
      <h1>Name :{product.name}</h1>
      <p>Quantity :{product.Quantity}</p>
      <p>Price :{product.Price}</p>
      <hr></hr>
    </div>
  )
}

export default productId


export async function getStaticPaths() {
  const response = await fetch(`http://localhost:4000/Products`);
  const data = await response.json()

  const paths = data.map(products => {
    console.log("***************** " + products.id)
    return {
      params: {
        productId: `${products.id}`
      }
    }


  })
  return {
    paths,
    fallback: false,
    
  }



}

export async function getStaticProps(context) {

  const { params } = context

  console.log("Params " + params.productId)

  const response = await fetch(`http://localhost:4000/Products/${params.productId}`);
  const data = await response.json()

  return {
    props: {
      product: data,
    },
    revalidate: 10,
  }
}