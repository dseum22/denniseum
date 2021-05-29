import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import PageLink from './links/PageLink'
import SocialLink from './links/SocialLink'

const Header = () => {
    const { pathname } = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => setIsOpen(false), [pathname])
    return (
        <header className="pt-6 md:pt-10">
            <div className="border-t border-b border-gray-400 mt-1 transition-all">
                <div className="flex justify-between">
                    <div className="flex justify-between lg:justify-start w-full">
                        <Link href="/">
                            <a className="px-1 sm:px-2 md:px-3 my-auto text-3xl sm:text-4xl font-bold">
                                DSE
                            </a>
                        </Link>
                        <div className="hidden lg:flex">
                            <PageLink href="/projects">Projects</PageLink>
                            <PageLink href="/cello">Cello</PageLink>
                            <PageLink href="/blog">Blog</PageLink>
                            <PageLink href="/contact">Contact</PageLink>
                        </div>
                    </div>
                    <div className="hidden lg:flex">
                        <SocialLink href="https://www.linkedin.com/in/denniseum/">LinkedIn</SocialLink>
                        <SocialLink href="https://twitter.com/dseum22/">Twitter</SocialLink>
                        <SocialLink href="https://github.com/dseum22/">GitHub</SocialLink>
                    </div>
                    <div className="flex items-center justify-center h-12">
                        <button className="lg:hidden btn-toggle mr-1 sm:mr-2 md:mr-3" type="button" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
                            <span className="mb-2 w-8"></span>
                            <span className="mb-2 w-8"></span>
                            <span className="w-5 ml-auto"></span>
                        </button>
                    </div>
                </div>
                <div className={`lg:hidden ${isOpen ? '' : 'hidden'}`}>
                    <PageLink className="block !pt-0 sm:!pt-1" href="/projects">Projects</PageLink>
                    <PageLink className="block !pt-0" href="/cello">Cello</PageLink>
                    <PageLink className="block !pt-0" href="/blog">Blog</PageLink>
                    <PageLink className="block !pt-0" href="/contact">Contact</PageLink>
                </div>
            </div>
        </header >
    )
}

export default Header
