import Head from 'next/head'
import Link from 'next/link'
import { DateTime } from 'luxon'
import { getAllPostIds, getPostData } from '../../lib/posts'
import remark from 'remark'
import remark2react from 'remark-react'
import strip from 'strip-markdown'
import MdParagraph from '../../components/markdown/MdParagraph'

const Post = ({ postData }) => {
    return (
        <>
            <Head>
                <title>Dennis Eum - {postData.title}</title>
                <meta name="robots" content="none"></meta>
                <link rel="canonical" href={`https://denniseum.com/blog/${postData.id}`}></link>
            </Head>
            <Link href='/blog'>
                <a className='inline-block mb-4'>
                    <div className='flex items-center'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 mr-1' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
                        </svg>
                        <span className='text-lg sm:text-xl'>Back to all posts</span>
                    </div>
                </a>
            </Link>
            <div className='bg-gray-100 rounded-lg mb-2 mt-2 lg:mt-4 p-3 sm:p-6'>
                <h1 className='text-3xl sm:text-4xl py-1 font-bold mr-2'>{postData.title}</h1>
                <div className='text-base sm:text-lg'>
                    <span>Posted on {DateTime.fromISO(postData.date).toFormat('DDD')}</span>
                    <div className='hidden sm:inline-block'>
                        <span className='mx-2'>·</span>
                        <span>{Math.round(remark().use(strip).processSync(postData.rawContent).toString().split(' ').length/250)} min read</span>
                    </div>
                </div>
                <div>
                    <div className='text-xl sm:text-2xl font-serif !leading-loose'>
                        {remark().use(remark2react, {
                            remarkReactComponents: {
                                p: MdParagraph
                            }
                        }).processSync(postData.rawContent).result}
                    </div>
                </div>
            </div>
        </>
    )
}

const getStaticPaths = async () => {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

const getStaticProps = ({ params }) => {
    const postData = getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export default Post
export { getStaticPaths, getStaticProps }