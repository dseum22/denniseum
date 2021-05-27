const SocialLink = (props) => {
    if (props.circle) {
        return (
            <a className="border bg-white hover:bg-gray-100 border-gray-400 h-14 w-14 rounded-full focus:outline-none flex justify-center items-center" href={props.href} target="_blank" rel="noreferrer">
                {props.children}
            </a>
        )
    } else {
        return (
            <a className="transition-colors duration-200 text-gray-500 text-xl sm:text-2xl hover:text-gray-900 p-3 flex flex-nowrap mt-auto" href={props.href} target="_blank" rel="noreferrer">
                <span>{props.children}</span>
                <svg className="h-6 w-6 my-auto ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </a>
        )
    }
}

export default SocialLink
