const CardHeader = (props) => {
    return (
        <div className="flex flex-wrap">
            <svg className="h-7 w-7 mr-1 md:mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {props.children}
            </svg>
            <h2 className="text-lg sm:text-xl font-bold">{props.name}</h2>
        </div>
    )
}

export default CardHeader
