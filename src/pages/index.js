import Link from "next/link"
import { useRouter } from "next/router"

export default function Home() {

  const rout = useRouter();


  const handleOnclick = () => {

    console.log("Navigated to product Page")
    rout.push("/Product");
  }

  return (
    <>

      <h1>
        <Link href="/" >
        
            Hello World </Link>
      </h1>
      <Link href="https://stackoverflow.com/" >
        <button>StackOverflow</button>
      </Link>

      <hr></hr>
 
      <Link href="/blogs" >
        Blogs
      </Link>

      <button onClick={handleOnclick}>click me </button>
    </>

  )
}
