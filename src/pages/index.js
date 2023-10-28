import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import Navigation from '@/components/Layouts/Navigation'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Adopets</title>
            </Head>

            <div
                className="bg-white"
                style={{
                    backgroundImage: 'url("/images/background.jpeg")',
                    backgroundRepeat: 'no-repeat',
                }}>
                {/* Navigation */}
                <Navigation user={user} />

                {/* Body content */}
                <div className="relative isolate px-6 lg:px-8">
                    <div
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        aria-hidden="true">
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#2B78EC] to-[#41B553] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}></div>
                    </div>
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
                                Vidas Pequeñas <br />
                                Grandes Oportunidades
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Refugio para aquellos compañeros que necesitan y
                                requieren una nueva oportunidad con una mejor
                                calidad de vida.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link
                                    href="/pets"
                                    className="rounded-md bg-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                                    Mascotas
                                </Link>
                                <Link
                                    href="/contact"
                                    className="text-sm font-semibold leading-6 text-blue">
                                    Contactanos{' '}
                                    <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
