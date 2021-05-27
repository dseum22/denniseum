const PageLayout = (props) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4">
            <div>
                <span className="text-4xl sm:text-5xl font-bold border-gray-700 !leading-tight">{props.name}</span>
            </div>
            <div className="mt-3 lg:mt-[1.4rem] lg:col-span-3">
                {props.children}
            </div>
        </div>
    )
}

export default PageLayout
