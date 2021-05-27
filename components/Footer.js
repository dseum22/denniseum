import InlineLink from './links/InlineLink'

const Footer = () => {
    return (
        <footer className="py-4 md:py-6 flex justify-center lg:justify-between text-gray-600 text-base sm:text-lg">
            <span className="hidden lg:block">Built with <InlineLink href="https://nextjs.org/" external>Next</InlineLink> and <InlineLink href="https://tailwindcss.com/" external>Tailwind</InlineLink></span>
            <span>&copy; {new Date().getFullYear()} Dennis Eum</span>
        </footer>
    )
}

export default Footer
