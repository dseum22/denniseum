import Link from 'next/link'
import { DateTime } from 'luxon'
import remark from 'remark'
import strip from 'strip-markdown'

const ListPost = (props) => {
    return (
        <Link href={`/blog/${props.data.id}`}>
            <a>
                <li className="transition-colors duration-200 mt-2 hover:cursor-pointer hover:bg-gray-100 py-1 px-3 select-none rounded">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-lg sm:text-xl mr-2">{props.data.title}</span>
                        <span className="text-gray-500 text-sm sm:text-base px-2 bg-gray-200 rounded">{DateTime.fromISO(props.data.date).toFormat('DD')}</span>
                    </div>
                    <p className="text-gray-400 text-base sm:text-lg">
                        {`${remark().use(strip).processSync(props.data.rawContent).toString().slice(0, 90)}...`}
                    </p>
                </li>
            </a>
        </Link>
    )
}

export default ListPost
