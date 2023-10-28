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

const Register = () => {
    const { register, user } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
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
                    {/* First Name */}
                    <div>
                        <Label htmlFor="firstName">Primer Nombre</Label>

                        <Input
                            id="firstName"
                            type="text"
                            value={firstName}
                            className="block mt-1 w-full"
                            onChange={event => setFirstName(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError
                            messages={errors.first_name}
                            className="mt-2"
                        />
                    </div>

                    {/* Last Name */}
                    <div className="mt-4">
                        <Label htmlFor="lastName">Primer Apellido</Label>

                        <Input
                            id="lastName"
                            type="text"
                            value={lastName}
                            className="block mt-1 w-full"
                            onChange={event => setLastName(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError
                            messages={errors.last_name}
                            className="mt-2"
                        />
                    </div>

                    {/* Email Address */}
                    <div className="mt-4">
                        <Label htmlFor="email">Email</Label>

                        <Input
                            id="email"
                            type="email"
                            value={email}
                            className="block mt-1 w-full"
                            onChange={event => setEmail(event.target.value)}
                            required
                        />

                        <InputError messages={errors.email} className="mt-2" />
                    </div>

                    {/* Phone number */}
                    <div className="mt-4">
                        <Label htmlFor="phoneNumber">Telefono</Label>

                        <Input
                            id="lastName"
                            type="text"
                            value={phoneNumber}
                            className="block mt-1 w-full"
                            onChange={event =>
                                setPhoneNumber(event.target.value)
                            }
                            required
                            autoFocus
                        />

                        <InputError
                            messages={errors.phone_number}
                            className="mt-2"
                        />
                    </div>

                    {/* Password */}
                    <div className="mt-4">
                        <Label htmlFor="password">Contraseña</Label>

                        <Input
                            id="password"
                            type="password"
                            value={password}
                            className="block mt-1 w-full"
                            onChange={event => setPassword(event.target.value)}
                            required
                            autoComplete="new-password"
                        />

                        <InputError
                            messages={errors.password}
                            className="mt-2"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="mt-4">
                        <Label htmlFor="passwordConfirmation">
                            Confirmar Contraseña
                        </Label>

                        <Input
                            id="passwordConfirmation"
                            type="password"
                            value={passwordConfirmation}
                            className="block mt-1 w-full"
                            onChange={event =>
                                setPasswordConfirmation(event.target.value)
                            }
                            required
                        />

                        <InputError
                            messages={errors.password_confirmation}
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

export default Register
