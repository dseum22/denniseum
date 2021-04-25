import Link from 'next/link'

const InlineLink = (props) => {
    if (props.external) {
        return (
            <a className='border-b border-gray-800 text-gray-800 hover:border-gray-600 hover:text-gray-600 transition-colors duration-200' href={props.href} target='_blank' rel='noreferrer'>{props.children}</a>
        )
    } else if (props.internal) {
        return (
            <Link href={props.href}>
                <a className='border-b border-gray-800 text-gray-800 hover:border-gray-600 hover:text-gray-600 transition-colors duration-200'>
                    {props.children}
                </a>
            </Link>
        )
    }
}

export default InlineLink
