import Head from 'next/head'
import Navigation from './Navigation'

const GuestLayout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Adopets</title>
            </Head>

            <Navigation user={false} />
            <div className="font-sans text-gray-900 antialiased">
                {children}
            </div>
        </div>
    )
}

export default GuestLayout
