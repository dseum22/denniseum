import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { Link } from 'react-router-dom'

const BlogPost = () => {
    const { id } = useParams()
    const [post, setPost] = useState({
        timestamp: 0,
        body: []
    })
    useEffect(() => firebase.firestore().collection('posts').doc(id).get().then(doc => setPost({
        name: doc.data().name,
        timestamp: doc.data().timestamp.seconds,
        body: doc.data().body
    })), [])
    const convertTimestamp = (timestamp) => {
        const date = new Date(timestamp * 1000)
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    }
    return (
        <>
            <Link className='inline-block mb-2 ml-2 rounded-md' to='/blog'>
                <div className='flex items-center'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 mr-2 sm:h-6 sm:w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
                    </svg>
                    <span className='text-xl sm:text-2xl'>Back to all posts</span>
                </div>
            </Link>
            <div className='flex items-center flex-wrap text-3xl sm:text-4xl'>
            </div>
                <h1 className='text-3xl sm:text-4xl ml-2 py-1 rounded-md font-bold mr-2 mt-2 lg:mt-4'>{post.name}</h1>
                <span className='text-base sm:text-lg ml-3 py-1 rounded-md mt-2 lg:mt-4'>Posted on {convertTimestamp(post.timestamp)}</span>
            <div className='ml-3'>
            {post.body.map((paragraph, index) => <p className='mt-4 lg:mt-6 text-xl sm:text-2xl !leading-loose' key={index}>
                {paragraph}
            </p>)}
            </div>
        </>
    )
}

export default BlogPost
