import PostDtail from "@/app/components/PostDetail"
import { Suspense } from "react"

export default async function postDtails({params}){
    
    const postID = params.postID

    const loadingJsx = (<div> loading ...</div>)

    return(
        <>
        <div>Post detail : </div>
        <Suspense fallback={loadingJsx}>
            <PostDtail postID={postID}/>
        </Suspense>
        </>

    )
}