import Button from '@/components/Button'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import { useState } from 'react'
import { registerPet } from '@/hooks/pets'
import ModalDrawer from '@/components/ModalDrawer'

const PetsDrawer = ({ children, className, ...props }) => {
    const [state, setState] = useState({
        name: '',
        age: '',
        race: '',
        overview: '',
        gender: '',
        sterilized: false,
        image: '',
        errors: {
            name: [],
            age: [],
            race: [],
            overview: [],
            gender: [],
            sterilized: [],
            image: [],
        },
        success: false,
    })

    const [errors, setErrors] = useState({
        name: [],
        age: [],
        race: [],
        overview: [],
        gender: [],
        sterilized: [],
        image: [],
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
            image: [],
        }

        valid =
            state.name.length > 0 &&
            state.age.length > 0 &&
            state.image.length > 0 &&
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
        if (state.image.length === 0) {
            lErrors.image.push('Campo requerido')
        }
        setErrors(lErrors)
        return valid
    }

    const submitForm = async event => {
        const validForm = validateForm()
        event.preventDefault()

        if (validForm) {
            const register = await registerPet({
                ...state,
                setErrors,
            })

            if (register) {
                setState({
                    name: '',
                    age: '',
                    race: '',
                    overview: '',
                    gender: '',
                    sterilized: false,
                    image: '',
                    errors: {
                        name: [],
                        age: [],
                        race: [],
                        overview: [],
                        gender: [],
                        sterilized: [],
                        image: [],
                    },
                    success: true,
                })
            }
        }
    }

    const drawerData = {
        id: 'drawer-navigation',
        title: 'Agregar Mascota',
    }

    return (
        <ModalDrawer
            title={drawerData.title}
            id={drawerData.id}
            done={state.success}>
            <form onSubmit={submitForm}>
                <div className="group relative mb-4">
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        value={state.name}
                        className="block mt-1 w-full"
                        onChange={handleInputChange}
                    />
                    <InputError messages={errors.name} className="mb-2" />
                </div>
                <div className="group relative mb-4">
                    <Label htmlFor="age">Edad</Label>
                    <Input
                        id="age"
                        name="age"
                        type="text"
                        value={state.age}
                        className="block mt-1 w-full"
                        onChange={handleInputChange}
                    />
                    <InputError messages={errors.age} className="mb-2" />
                </div>
                <div className="group relative mb-4">
                    <Label htmlFor="race">Raza</Label>
                    <Input
                        id="race"
                        name="race"
                        type="text"
                        value={state.race}
                        className="block mt-1 w-full"
                        onChange={handleInputChange}
                    />
                    <InputError messages={errors.race} className="mb-2" />
                </div>
                <div className="group relative mb-4">
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
                    <InputError messages={errors.gender} className="mb-2" />
                </div>
                <div className="grid grid-cols-1 gap-x-6 gap-y-3">
                    <div className="group relative mb-4">
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

                    <div className="group relative mb-4">
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

                    <div className="group relative mb-4">
                        <Label htmlFor="name">Foto</Label>
                        <Input
                            id="image"
                            name="image"
                            type="file"
                            value={state.image}
                            className="block mt-1 w-full"
                            onChange={handleInputChange}
                        />
                        <InputError messages={errors.image} className="mb-2" />
                    </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <Button className="ml-4 bg-blue">Registrar</Button>
                </div>
            </form>
        </ModalDrawer>
    )
}

export default PetsDrawer
