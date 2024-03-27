
export default async function PostDtail({postID}){
    
   // const postID = params.postID

    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`,
        {
            next:{
                revalidate: 3600,
            }
        }
    )

    const post = await data.json()

    return(
        <>
            <div style={{background:"#fff",boxShadow:"0px 5px 5px #c1c1c1", color:"#000",borderRadius:"10px",padding:"10px",marginTop:"20px",width:"70%"}}>
                <h2>{post.title}</h2>
                <hr/>
                <div>{post.body}</div>
            </div>
        </>

    )
}