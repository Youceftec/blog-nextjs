
export const metadata = {
    title: "Articles post title",
}

export default function LayoutArticles({children}){
    return(
        <div style={{background: "blue"}}> Layout article :<br/>
            {children}
        </div>
    )
}