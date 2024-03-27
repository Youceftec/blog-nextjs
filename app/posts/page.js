
//import Todos from "../components/Todos"

import Link from "next/link"


export default async function PostsPages() {

    const data = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            next: {
                revalidate: 120,
            }
        }
    )
    const json = await data.json()

    const posts = json.map((post) => {

            return(
                
                <div key={post.id} style={{background:"#fff",boxShadow:"0px 5px 5px #c1c1c1", color:"#000",borderRadius:"10px",padding:"10px",marginTop:"20px",width:"70%"}}>
                        <Link href={`/posts/${post.id}`}><h2>{post.title}</h2></Link>
                        <div>{post.body}</div>
                </div>
            )
    })

    return(
       <div style={{display:"flex",alignContent:"center",alignItems:"center",flexDirection:"column"}}>
            <h1>Posts Pages</h1>
            {posts}
            {/* <Todos/> */}
       </div> 
    )
}