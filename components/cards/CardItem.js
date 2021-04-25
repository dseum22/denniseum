const CardItem = (props) => {
    return (
        <div className='border border-gray-400 rounded-md px-5 py-3 md:py-4'>
            {props.children}
        </div>
    )
}

export default CardItem
