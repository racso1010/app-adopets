import { useRouter } from 'next/router'
import { getPets } from '@/hooks/pets'
import { useEffect, useState } from 'react'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Head from 'next/head'
import Link from 'next/link'
import Button from '@/components/Button'
import PetSection from '@/components/PetSection'

export default function Pet() {
    const router = useRouter()
    const [pet, setPet] = useState([])

    useEffect(() => {
        async function fetchData() {
            const singlePet = await getPets(router.query.id)
            setPet(singlePet)
        }

        fetchData()
    }, [router.query.id])

    if (!pet?.name) {
        return ''
    }

    return (
        <GuestLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Mascotas | {pet.name}
                </h2>
            }>
            <Head>
                <title>{pet.name} | Adopets - Mascotas</title>
            </Head>

            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 pt-4 pb-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
                    <div className="pb-8">
                        <Link href="/pets">
                            <Button className="bg-blue px-12">Volver</Button>
                        </Link>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                            {pet.name}
                        </h1>

                        <PetSection petData={pet} />
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}
