import { useAuth } from '@/hooks/auth'
import Head from 'next/head'
import Navigation from './Navigation'

const GuestLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'guest' })
    return (
        <div>
            <Head>
                <title>Adopets</title>
            </Head>

            <Navigation user={user} />
            <div className="font-sans text-gray-900 antialiased">
                {children}
            </div>
        </div>
    )
}

export default GuestLayout
