import Head from 'next/head'
import ListBody from '../components/lists/ListBody'
import ListPost from '../components/lists/ListPost'
import PageLayout from '../components/PageLayout'
import { getSortedPostsData } from '../lib/posts'

const Blog = ({ allPostsData }) => {
    return (
        <>
            <Head>
                <meta name="robots" content="none"></meta>
                <link rel="canonical" href="https://denniseum.com/blog"></link>
            </Head>
            <PageLayout name="Blog">
                <p className="text-xl sm:text-2xl">
                    This is a collection of my thoughts and ideas. These are rough drafts of my thinking, so they should be viewed as such.
                </p>
                <div className="mt-4 md:mt-6">
                    <span className="text-xl sm:text-2xl">{allPostsData.length === 0 ? 'No posts published yet.' : ''}</span>
                    <ListBody>
                        <div className="grid sm:grid-cols-2">
                            {allPostsData.map((postData, index) => <ListPost key={index} data={postData} />)}
                        </div>
                    </ListBody>
                </div>
            </PageLayout>
        </>
    )
}

const getStaticProps = () => {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default Blog
export { getStaticProps }