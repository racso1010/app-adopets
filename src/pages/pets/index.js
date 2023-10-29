import Head from 'next/head'
import PetCard from '@/components/PetCard'
import { getPets } from '@/hooks/pets'
import { useEffect, useState } from 'react'
import GuestLayout from '@/components/Layouts/GuestLayout'
import PetsDrawer from './PetsDrawer'

const Pets = () => {
    const [pets, setPets] = useState([])

    useEffect(() => {
        async function fetchData() {
            const allPets = await getPets()

            setPets(allPets)
        }

        fetchData()
    }, [])

    return (
        <GuestLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Mascotas
                </h2>
            }>
            <Head>
                <title>Adopets - Mascotas</title>
            </Head>

            <div>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
                        <PetsDrawer></PetsDrawer>
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                            Las mejores mascotas para adoptar
                        </h2>

                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {pets.map((pet, index) => {
                                return <PetCard key={index} pet={pet} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}

export default Pets
