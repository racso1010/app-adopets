import Button from '@/components/Button'
import Link from 'next/link'
import PropTypes from 'prop-types'

const PetCard = ({ pet, selectEdit }) => {
    const description =
        pet.overview.slice(0, 40) + (pet.overview.length > 40 ? '...' : '')

    const forceSetEditPet = () => {
        selectEdit(pet)
    }

    return (
        <div className="group relative pet-card flex rounded-lg h-full bg-blue bg-opacity-20 flex-col">
            {pet.edit && (
                <button
                    className="w-6 h-6 pl-1 bg-green rounded-md shadow-lg shadow-indigo-500/40 text-white absolute w-10 top-0.5 right-0.5 z-[20]"
                    onClick={forceSetEditPet}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                    </svg>
                </button>
            )}
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                    src={pet.image}
                    alt={pet.name}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="px-2 pb-4">
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm font-bold text-gray-700 capitalize">
                            <Link href={`/pets/${pet.id}`}>
                                <span
                                    aria-hidden="true"
                                    className="absolute inset-0"></span>
                                {pet.name}
                            </Link>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                            {description}
                        </p>
                    </div>
                </div>
                <div className="mt-4 flex justify-center">
                    <Button className="bg-blue px-12">Adoptar</Button>
                </div>
            </div>
        </div>
    )
}

PetCard.defaultProps = {
    pet: { edit: false },
}
PetCard.propTypes = {
    pet: PropTypes.object.isRequired,
    selectEdit: PropTypes.func.isRequired,
}

export default PetCard
