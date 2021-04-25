import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

const getSortedPostsData = () => {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)
        const rawContent = matterResult.content
        return {
            id,
            rawContent,
            ...matterResult.data
        }
    })
    return allPostsData.sort((a, b) => a.date < b.date ? 1 : -1)
}

const getAllPostIds = () => {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

const getPostData = (id) => {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    const rawContent = matterResult.content
    return {
        id,
        rawContent,
        ...matterResult.data
    }
}

export { getSortedPostsData, getAllPostIds, getPostData }