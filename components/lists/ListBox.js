import { Children, Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const ListBox = ({ children, href }) => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <button type="button" className="focus:outline-none" onClick={() => setOpen(true)}>
                <li className="transition-colors duration-200 mt-2 hover:cursor-pointer hover:bg-gray-100 py-1 px-3 select-none rounded text-left">
                    <span className="text-gray-500 text-lg sm:text-xl">
                        {Children.map(children, child => {
                            if (child.type.displayName === 'Title') return child
                        })}
                    </span>
                    <p className="text-gray-400 text-base sm:text-lg">
                        {Children.map(children, child => {
                            if (child.type.displayName === 'Description') return child
                        })}
                    </p>
                </li>
            </button>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" static className="fixed z-10 inset-0 overflow-y-auto" open={open} onClose={setOpen}>
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-32 text-center sm:block sm:p-0">
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enterTo="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 sm:scale-100" leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="bg-white px-8 mt-8 mb-4">
                                    {href ?
                                        <a className="flex flex-nowrap text-2xl sm:text-3xl font-bold text-gray-500" href={href} target="_blank" rel="noreferrer">
                                            {Children.map(children, child => {
                                                if (child.type.displayName === 'Title') return child
                                            })}
                                            <svg className="h-8 w-8 my-auto ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.75} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a> :
                                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-500">
                                            {Children.map(children, child => {
                                                if (child.type.displayName === 'Title') return child
                                            })}
                                        </h3>
                                    }
                                    <div className="text-gray-500 mt-4 mb-3">
                                        {Children.map(children, child => {
                                            if (child.type.displayName === 'Stack') return child
                                        })}
                                    </div>
                                    <p className="text-lg sm:text-xl !leading-relaxed text-gray-500">
                                        {Children.map(children, child => {
                                            if (child.type.displayName === 'Info') return child
                                        })}
                                    </p>
                                </div>
                                <div className="flex items-center justify-center mb-6">
                                    <button type="button" onClick={() => setOpen(false)} className="border border-gray-300 bg-white transition-colors hover:bg-gray-100 duration-200 h-14 w-14 flex items-center justify-center rounded-full focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}

const Title = ({ children }) => children
Title.displayName = 'Title'
ListBox.Title = Title

const Description = ({ children }) => children
Description.displayName = 'Description'
ListBox.Description = Description

const Stack = ({ children }) => children
Stack.displayName = 'Stack'
ListBox.Stack = Stack

const Info = ({ children }) => children
Info.displayName = 'Info'
ListBox.Info = Info

export default ListBox
