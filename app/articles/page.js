import Link from "next/link"


export default function ArticlesPages(){

    return(
        <>
            <h1>Articles page</h1>
            <Link href="/posts">
                <button>Go to posts page</button>
            </Link>
        </>
    )
}