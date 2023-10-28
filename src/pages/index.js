import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import Navigation from '@/components/Layouts/Navigation'
import ApplicationLogo from '@/components/ApplicationLogo'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    const currentYear = new Date().getFullYear()

    return (
        <>
            <Head>
                <title>Adopets</title>
            </Head>

            <div
                className="bg-white"
                style={{
                    backgroundImage: 'url(/images/background.jpeg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center right',
                }}>
                {/* Navigation */}
                <Navigation user={user} />

                {/* Hero section */}
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
                                    href="/contact"
                                    className="rounded-md bg-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                                    Contactanos
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* First Section */}
            <section className="text-gray-600 body-font max-w-7xl mx-auto mb-20">
                <div className="text-center mb-20 mt-10">
                    <img
                        alt="Footprint"
                        src="/images/footprint.svg"
                        className="mx-auto w-10 h-10"
                    />
                    <h1 className="sm:text-3xl text-4xl font-bold title-font text-black mb-4">
                        Bienvenido a AdoPets
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80">
                        Donde nuestra prioridad es el cuidado de los mas
                        pequeños
                    </p>
                </div>
                <div className="container px-5 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <img
                            alt="feature"
                            src="/images/kitty-sleep.jpeg"
                            className="mx-auto"
                        />
                    </div>
                    <div className="flex flex-col flex-wrap justify-between lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div className="flex border-2 rounded-lg border-gray-800/[.2] p-4 sm:flex-row flex-col">
                            <div className="flex-grow">
                                <svg
                                    fill="none"
                                    stroke="#2B78EC"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="3"
                                    className="mb-3 w-6 h-6"
                                    viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                    Vacunados y Alimentados
                                </h2>
                                <p className="leading-relaxed text-base text-gray-900/[.5]">
                                    Nuestros compañeros merecen el mejor
                                    cuidado, igual que uno merecen mucho
                                    alimento y cuidado para evitar enfermedades.
                                </p>
                            </div>
                        </div>
                        <div className="flex border-2 rounded-lg border-gray-800/[.2] p-4 sm:flex-row flex-col">
                            <div className="flex-grow">
                                <svg
                                    fill="none"
                                    stroke="#2B78EC"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="3"
                                    className="mb-3 w-6 h-6"
                                    viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                    Cachorros y Seniors
                                </h2>
                                <p className="leading-relaxed text-base text-gray-900/[.5]">
                                    Tanto los mas jovenes como los mayores
                                    tienen la oportunidad de estar bajo un techo
                                    donde sean queridos y acompañados
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-start gap-x-6">
                            <Link
                                href="/pets"
                                className="rounded-md bg-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                                Ver Mascotas
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Second Section */}
            <section className="text-gray-300 bg-slate-50 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex flex-col text-center w-full mb-10">
                        <img
                            alt="Footprint"
                            src="/images/footprint.svg"
                            className="mx-auto w-10 h-10"
                        />
                        <p className="text-xs text-gray-900 tracking-widest font-medium title-font my-2">
                            Una Familia Consentida
                        </p>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-green">
                            Los Mas Queridos
                        </h1>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-blue bg-opacity-20 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-30 h-30">
                                        <img
                                            alt="feature"
                                            src="/images/kitty-sleep.jpeg"
                                            className="mx-auto"
                                        />
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-blue font-bold mb-4">
                                        Oreo
                                    </p>
                                    <p className="leading-relaxed text-gray-400">
                                        Description del michi cuando se traiga
                                        de la base de datos con un fetch
                                    </p>
                                    <Link
                                        className="mt-3 text-green inline-flex items-center"
                                        href="/">
                                        Detalles
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-blue bg-opacity-20 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-30 h-30">
                                        <img
                                            alt="feature"
                                            src="/images/kitty-sleep.jpeg"
                                            className="mx-auto"
                                        />
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-blue font-bold mb-4">
                                        Simba
                                    </p>
                                    <p className="leading-relaxed text-gray-400">
                                        Description del michi cuando se traiga
                                        de la base de datos con un fetch
                                    </p>
                                    <Link
                                        className="mt-3 text-green inline-flex items-center"
                                        href="/">
                                        Detalles
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-blue bg-opacity-20 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-30 h-30">
                                        <img
                                            alt="feature"
                                            src="/images/kitty-sleep.jpeg"
                                            className="mx-auto"
                                        />
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-blue font-bold mb-4">
                                        Tommy
                                    </p>
                                    <p className="leading-relaxed text-gray-400">
                                        Description del michi cuando se traiga
                                        de la base de datos con un fetch
                                    </p>
                                    <Link
                                        className="mt-3 text-green inline-flex items-center"
                                        href="/">
                                        Detalles
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Third Section */}
            <section className="text-gray-400 bg-white body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <img
                            alt="Footprint"
                            src="/images/footprint.svg"
                            className="mx-auto w-10 h-10"
                        />
                        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black font-bold">
                            Personalidad Unica, Mismo Cariño
                        </h2>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Cada uno de ellos es unico sin importar el parecido,
                            su interaccion es lo que los hace mas allegados a
                            nosotros
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div
                                className="flex relative"
                                style={{ minHeight: '300px' }}>
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src="/images/gallery/oreo.jpeg"
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        Oreo
                                    </h1>
                                    <p className="leading-relaxed">
                                        El mas gruñon de la casa, siempre
                                        buscando pelea con los demas pero al
                                        mismo tiempo buscando que lo consientan
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div
                                className="flex relative"
                                style={{ minHeight: '300px' }}>
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src="/images/gallery/tommy.jpeg"
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                    <h3 className="title-font text-lg font-medium text-white mb-3">
                                        Tommy
                                    </h3>
                                    <p className="leading-relaxed">
                                        Alias Tommysaurius Rex, El mas
                                        comunicativo, siempre esta cerca de sus
                                        humanos con una mirada muy particular
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div
                                className="flex relative"
                                style={{ minHeight: '300px' }}>
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src="/images/gallery/simba.jpeg"
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                    <h2 className="title-font text-lg font-medium text-white mb-3">
                                        Simba
                                    </h2>
                                    <p className="leading-relaxed">
                                        Dormilon y gloton, el mas consentido de
                                        la casa
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div
                                className="flex relative"
                                style={{ minHeight: '300px' }}>
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src="/images/gallery/kitty.jpeg"
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                    <h3 className="title-font text-lg font-medium text-white mb-3">
                                        Kitty
                                    </h3>
                                    <p className="leading-relaxed">
                                        La mas joven de la familia, y la mas
                                        tremenda de la manada, su distintivo
                                        maullido notifica cuando tiene hambre
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div
                                className="flex relative"
                                style={{ minHeight: '300px' }}>
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src="/images/gallery/pancho.jpeg"
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                    <h3 className="title-font text-lg font-medium text-white mb-3">
                                        Pancho
                                    </h3>
                                    <p className="leading-relaxed">
                                        A pesar de ser gato adulto, le gusta
                                        jugar con los mas pequeños y dormir,
                                        cuando tiene la oportunidad se roba algo
                                        de comida.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div
                                className="flex relative"
                                style={{ minHeight: '300px' }}>
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src="/images/gallery/holograma.jpeg"
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                    <h3 className="title-font text-lg font-medium text-white mb-3">
                                        Holograma
                                    </h3>
                                    <p className="leading-relaxed">
                                        La figura materna de la familia felina,
                                        siempre critica el comportamiento de los
                                        otros felinos cuando los ve haciendo
                                        maldades
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-gray-400 bg-slate-200/[.5] body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <Link href="/">
                        <ApplicationLogo className="block h-10 w-auto fill-current text-gray-600" />
                    </Link>
                    <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
                        © {currentYear} AdoPets — UNET
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <img
                            alt="UNET"
                            src="/images/unet.png"
                            className="mx-auto w-10 h-10"
                        />
                    </span>
                </div>
            </footer>
        </>
    )
}
