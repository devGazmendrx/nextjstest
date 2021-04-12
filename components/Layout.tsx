import Link from 'next/link'

const Layout: React.FC = ({children}) => {
    return(
        <div className="page">
            <Link href="/">
                <a>
                    <img src="/vercel.svg" alt="logo" />
                </a>
            </Link>
         {children}
        </div>
    )
}

export default Layout;