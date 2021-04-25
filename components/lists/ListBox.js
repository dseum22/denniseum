const ListBox = (props) => {
    return (
        <li className='transition-colors duration-200 mt-2 hover:cursor-pointer hover:bg-gray-100 py-1 px-3 select-none rounded'>
            <span className='text-gray-500 text-lg sm:text-xl'>{props.name}</span>
            <p className='text-gray-400 text-base sm:text-lg'>
                {props.info}
            </p>
        </li>
    )
}

export default ListBox
