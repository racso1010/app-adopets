import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/AuthCard'
import Button from '@/components/Button'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { useState } from 'react'
import { registerPet } from '@/hooks/pets'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'

const PetCreate = () => {
    const [state, setState] = useState({
        name: '',
        age: '',
        race: '',
        overview: '',
        gender: '',
        sterilized: false,
        images: '',
        errors: {
            name: [],
            age: [],
            race: [],
            overview: [],
            gender: [],
            sterilized: [],
            images: [],
        },
    })
    const [errors, setErrors] = useState({
        name: [],
        age: [],
        race: [],
        overview: [],
        gender: [],
        sterilized: [],
        images: [],
    })

    const handleInputChange = event => {
        const name = event.target.name
        const value = event.target.value
        setState({
            ...state,
            [name]: value,
        })
    }

    const validateForm = () => {
        let valid = true
        const lErrors = {
            name: [],
            age: [],
            race: [],
            overview: [],
            gender: [],
            sterilized: [],
            images: [],
        }

        valid =
            state.name.length > 0 &&
            state.age.length > 0 &&
            state.images.length > 0 &&
            state.race.length > 0 &&
            state.gender.length > 0 &&
            state.overview.length > 0

        if (state.name.length === 0) {
            lErrors.name.push('Campo requerido')
        }
        if (state.age.length === 0) {
            lErrors.age.push('Campo requerido')
        }
        if (state.race.length === 0) {
            lErrors.race.push('Campo requerido')
        }
        if (state.gender.length === 0) {
            lErrors.gender.push('Campo requerido')
        }
        if (state.overview.length === 0) {
            lErrors.overview.push('Campo requerido')
        }
        if (state.images.length === 0) {
            lErrors.images.push('Campo requerido')
        }
        setErrors(lErrors)
        return valid
    }

    const submitForm = event => {
        const validForm = validateForm()
        event.preventDefault()

        if (validForm) {
            registerPet({
                ...state,
                setErrors,
            })
        }
    }

    return (
        <AppLayout>
            <Head>
                <title>Crear | Adopets - Mascotas</title>
            </Head>
            <AuthCard
                logo={
                    <Link href="/">
                        <ApplicationLogo className="w-40 h-20 fill-current text-gray-500" />
                    </Link>
                }>
                <form onSubmit={submitForm}>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-4">
                        <div className="group relative ">
                            <Label htmlFor="name">Nombre</Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                value={state.name}
                                className="block mt-1 w-full"
                                onChange={handleInputChange}
                            />
                            <InputError
                                messages={errors.name}
                                className="mb-2"
                            />
                        </div>
                        <div className="group relative ">
                            <Label htmlFor="age">Edad</Label>
                            <Input
                                id="age"
                                name="age"
                                type="text"
                                value={state.age}
                                className="block mt-1 w-full"
                                onChange={handleInputChange}
                            />
                            <InputError
                                messages={errors.age}
                                className="mb-2"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-4">
                        <div className="group relative ">
                            <Label htmlFor="race">Raza</Label>
                            <Input
                                id="race"
                                name="race"
                                type="text"
                                value={state.race}
                                className="block mt-1 w-full"
                                onChange={handleInputChange}
                            />
                            <InputError
                                messages={errors.race}
                                className="mb-2"
                            />
                        </div>
                        <div className="group relative ">
                            <Label htmlFor="gender">Genero</Label>
                            <select
                                id="gender"
                                name="gender"
                                className="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                value={state.gender}
                                onChange={handleInputChange}>
                                <option value=""></option>
                                <option value="M">M</option>
                                <option value="F">F</option>
                            </select>
                            <InputError
                                messages={errors.gender}
                                className="mb-2"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-3">
                        <div className="group relative ">
                            <Label htmlFor="name">Descripcion</Label>
                            <Input
                                id="overview"
                                name="overview"
                                type="text"
                                value={state.overview}
                                className="block mt-1 w-full"
                                onChange={handleInputChange}
                            />
                            <InputError
                                messages={errors.overview}
                                className="mb-2"
                            />
                        </div>

                        <div className="group relative ">
                            <Label htmlFor="sterilized">Esterilizado</Label>
                            <Input
                                id="sterilized"
                                name="sterilized"
                                type="checkbox"
                                value={state.sterilized}
                                className="block mt-1"
                                onChange={handleInputChange}
                            />
                            <InputError
                                messages={errors.sterilized}
                                className="mb-2"
                            />
                        </div>

                        <div className="group relative ">
                            <Label htmlFor="name">Foto</Label>
                            <Input
                                id="images"
                                name="images"
                                type="file"
                                value={state.images}
                                className="block mt-1 w-full"
                                onChange={handleInputChange}
                            />
                            <InputError
                                messages={errors.images}
                                className="mb-2"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <Button className="ml-4 bg-blue">Registrar</Button>
                    </div>
                </form>
            </AuthCard>
        </AppLayout>
    )
}

export default PetCreate
