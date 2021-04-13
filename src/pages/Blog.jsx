import React, { useEffect, useState } from 'react'
import ListBody from '../components/lists/ListBody'
import ListPost from '../components/lists/ListPost'
import PageLayout from '../components/PageLayout'
import firebase from 'firebase/app'
import 'firebase/firestore'

const Blog = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => firebase.firestore().collection('posts').get().then(querySnapshot => {
        let temp = []
        querySnapshot.forEach(doc => temp.push({
            name: doc.data().name,
            parameter: doc.id,
            timestamp: doc.data().timestamp.seconds,
            description: `${doc.data().body[0].slice(0, 100)}...`
        }))
        temp.sort((a, b) => b.timestamp - a.timestamp)
        setPosts(temp)
    }), [])
    return (
        <PageLayout name='Blog'>
            <p className='text-xl sm:text-2xl'>
                This is a collection of my thoughts and ideas.
            </p>
            <div className='mt-4 md:mt-6'>
                <ListBody>
                    <div className='grid sm:grid-cols-2'>
                        {posts.map((post, index) => <ListPost key={index} name={post.name} parameter={post.parameter} timestamp={post.timestamp} description={post.description} />)}
                    </div>
                </ListBody>
            </div>
        </PageLayout>
    )
}

export default Blog
