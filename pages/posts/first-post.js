
import Link from 'next/link';



export default function(){
  return(
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back To Home</a>
        </Link>
      </h2>
    </>
  )
}