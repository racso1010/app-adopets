import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/AuthCard'
import Button from '@/components/Button'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'

const PetCreate = () => {
    const { register, user } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [state, setState] = useState({
        name: '',
        age: '',
        race: '',
        overview: '',
        gender: '',
        sterilized: false,
        images: '',
        errors: {
            name: '',
            age: '',
            race: '',
            overview: '',
            gender: '',
            sterilized: '',
            images: '',
        },
    })

    const handleInputChange = event => {
        const name = event.target.name
        const value = event.target.value
        setState({
            ...state,
            [name]: value,
        })
    }
    
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        register({
            first_name: firstName,
            last_name: lastName,
            phone_number: phoneNumber,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
        })
    }

    return (
        <GuestLayout>
            <AuthCard
                logo={
                    <Link href="/">
                        <ApplicationLogo className="w-40 h-20 fill-current text-gray-500" />
                    </Link>
                }>
                <form onSubmit={submitForm}>
                    <div>
                        <Label htmlFor="name">Nombre</Label>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            value={state.name}
                            className="block mt-1 w-full"
                            onChange={handleInputChange}
                            required
                            autoFocus
                        />
                        <InputError
                            messages={state.errors.name}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <Label htmlFor="name">Edad</Label>
                        <Input
                            id="age"
                            name="age"
                            type="text"
                            value={state.age}
                            className="block mt-1 w-full"
                            onChange={handleInputChange}
                            required
                            autoFocus
                        />
                        <InputError
                            messages={state.errors.age}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <Label htmlFor="name">Raza</Label>
                        <Input
                            id="race"
                            name="race"
                            type="text"
                            value={state.race}
                            className="block mt-1 w-full"
                            onChange={handleInputChange}
                            required
                            autoFocus
                        />
                        <InputError
                            messages={state.errors.race}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <Label htmlFor="name">Descripcion</Label>
                        <Input
                            id="overview"
                            name="overview"
                            type="text"
                            value={state.overview}
                            className="block mt-1 w-full"
                            onChange={handleInputChange}
                            required
                            autoFocus
                        />
                        <InputError
                            messages={state.errors.overview}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <Label htmlFor="name">Genero</Label>
                        <Input
                            id="gender"
                            name="gender"
                            type="text"
                            value={state.gender}
                            className="block mt-1 w-full"
                            onChange={handleInputChange}
                            required
                            autoFocus
                        />
                        <InputError
                            messages={state.errors.gender}
                            className="mt-2"
                        />
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <Link
                            href="/login"
                            className="underline text-sm text-gray-600 hover:text-gray-900">
                            Ya posee una cuenta?
                        </Link>

                        <Button className="ml-4 bg-blue">Registrar</Button>
                    </div>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default PetCreate
