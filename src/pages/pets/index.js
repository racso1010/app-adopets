import Head from 'next/head'
import PetCard from '@/components/PetCard'
import { getPets } from '@/hooks/pets'
import { useEffect, useState } from 'react'
import GuestLayout from '@/components/Layouts/GuestLayout'
import PetsDrawer from './PetsDrawer'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { useAuth } from '@/hooks/auth'

const Pets = () => {
    const [pets, setPets] = useState([])
    const [userData, setUserData] = useState([])
    const [editPet, setEditPet] = useState(null)

    const [filteredPets, setFilteredPets] = useState([])
    const [filters, setFilters] = useState({
        search: '',
        age: '',
        ageOptions: [],
        gender: '',
        genderOptions: [],
        race: '',
        raceOptions: [],
        name: '',
        overview: '',
        sterilized: false,
    })
    const [advancedFilters, setAdvancedFilters] = useState(false)

    const handleInputChange = event => {
        const name = event.target.name
        const value = event.target.value
        setFilters({
            ...filters,
            [name]: value,
        })
    }

    const { user } = useAuth({ middleware: 'guest' })

    useEffect(() => {
        const originalPets = [...pets]
        let petsArray = [...originalPets]

        if (filters.search !== '') {
            petsArray = petsArray.filter(
                pet =>
                    pet.name.toLowerCase().includes(filters.search) ||
                    pet.race.toLowerCase().includes(filters.search) ||
                    pet.overview.toLowerCase().includes(filters.search),
            )
        }

        if (filters.age !== '') {
            petsArray = petsArray.filter(pet => pet.age === filters.age)
        }
        if (filters.gender !== '') {
            petsArray = petsArray.filter(pet => pet.gender === filters.gender)
        }
        if (filters.race !== '') {
            petsArray = petsArray.filter(pet => pet.race === filters.race)
        }
        setFilteredPets(petsArray)
    }, [filters.search, filters.age, filters.gender, filters.race])

    useEffect(() => {
        async function fetchData() {
            const allPets = await getPets()
            const races = allPets.map(pet => {
                return pet.race
            })
            const genders = allPets.map(pet => {
                return pet.gender
            })
            const ages = allPets.map(pet => {
                return pet.age
            })
            const uniqueAges = new Set(ages)
            const uniqueGenders = new Set(genders)
            const uniqueRaces = new Set(races)
            setFilters({
                ...filters,
                raceOptions: Array.from(uniqueRaces),
                genderOptions: Array.from(uniqueGenders),
                ageOptions: Array.from(uniqueAges),
            })
            setPets(allPets)
            setFilteredPets(allPets)
        }

        fetchData()
    }, [])

    useEffect(() => {
        setUserData(user)
    }, [user])

    const selectedPet = event => {
        setEditPet(event)
    }

    const toggleFilters = () => {
        if (advancedFilters) {
            setFilters({
                ...filters,
                age: '',
                gender: '',
                race: '',
            })
        }
        setAdvancedFilters(!advancedFilters)
    }

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
                        <PetsDrawer />
                        <div className="flex justify-between">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                Las mejores mascotas para adoptar
                            </h2>
                            <div className="search filters flex">
                                <Input
                                    id="search"
                                    placeholder="Buscar"
                                    name="search"
                                    type="text"
                                    value={filters.search}
                                    className="block mt-1 w-full"
                                    onChange={handleInputChange}
                                />
                                <Button
                                    onClick={toggleFilters}
                                    className="ml-4 bg-blue">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                                        />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                        {advancedFilters && (
                            <div className="flex justify-end mt-2">
                                <div className="search filters flex">
                                    <select
                                        id="age"
                                        name="age"
                                        className="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mx-2"
                                        value={filters.age}
                                        onChange={handleInputChange}>
                                        return <option value="">Edad...</option>
                                        {filters.ageOptions.map(option => {
                                            return (
                                                <option value={option}>
                                                    {option}
                                                </option>
                                            )
                                        })}
                                    </select>
                                    <select
                                        id="race"
                                        name="race"
                                        className="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mx-2"
                                        value={filters.race}
                                        onChange={handleInputChange}>
                                        return <option value="">Raza...</option>
                                        {filters.raceOptions.map(option => {
                                            return (
                                                <option value={option}>
                                                    {option}
                                                </option>
                                            )
                                        })}
                                    </select>
                                    <select
                                        id="gender"
                                        name="gender"
                                        className="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mx-2"
                                        value={filters.gender}
                                        onChange={handleInputChange}>
                                        return{' '}
                                        <option value="">Genero...</option>
                                        {filters.genderOptions.map(option => {
                                            return (
                                                <option value={option}>
                                                    {option}
                                                </option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                        )}

                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {filteredPets.map((pet, index) => {
                                if (
                                    userData?.role == 'admin' ||
                                    userData?.role == 'staff' ||
                                    userData?.id == pet.user_id
                                )
                                    pet.edit = true
                                return (
                                    <PetCard
                                        key={index}
                                        pet={pet}
                                        selectEdit={selectedPet}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}

export default Pets
