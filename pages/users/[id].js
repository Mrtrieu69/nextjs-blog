import React from 'react'
import { useEffect } from 'react/cjs/react.production.min'

// export async function getStaticPaths() {
//     const comments = await fetch("https://jsonplaceholder.typicode.com/comments").then(res => res.json())
// // comments.map(comment => ({params: {id: comment.id.toString()}}))
//     return {
//         paths: comments.map(comment => ({params: {id: comment.id.toString()}})),
//         fallback: false 
//     }
// }

// export async function getStaticProps({params}){
//     const comment = await fetch(`https://jsonplaceholder.typicode.com/comments/${params.id}`).then(res => res.json())

//     return {
//         props: {
//             comment
//         }
//     }
// }

export async function getServerSideProps(context) {
    const id = context.query.id

    const comment = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`).then(res => res.json()) 

    
    if (!comment) {
        return {
            notFound: true,
        }
    }


    return {
      props: {
          comment
      }, 
    }
}

const User = ({comment}) => {

    return (
        <div>
            <h1>{comment.name}</h1>
            <p>{comment.body}</p>
        </div>
    )
}

export default User
