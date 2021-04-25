import Link from 'next/link'
import { useRouter } from 'next/router'

const PageLink = (props) => {
    const { asPath } = useRouter()
    return (
        <Link href={props.href}>
            <a className={`transition-colors duration-200 text-gray-500 text-xl sm:text-2xl hover:text-gray-900 px-1 py-2 sm:px-2 md:p-3 mt-auto ${props.className ? props.className : ''} ${asPath === props.href || asPath === props.as ? 'text-gray-900' : ''}`}>
                {props.children}
            </a>
        </Link>
    )
}

export default PageLink