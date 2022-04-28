import React from "react"
import Layout from "../../components/layout"
import Link from "next/dist/client/link"

export async function getStaticProps(){
  const comments = await fetch("https://jsonplaceholder.typicode.com/comments").then(res => res.json())
  return{
    props: {
      comments
    }
  }
}

function Profile({comments}) {
  return(
    <Layout home>
      <ul>
        {comments.map(comment => (
          <Link href={`/users/${comment.id}`}>
            <li style={{cursor: "pointer", color: "blue"}} key={comment.id}>{comment.name}</li>
          </Link>
        ))}
      </ul>
    </Layout>
  )
}

export default Profile