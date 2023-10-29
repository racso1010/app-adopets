import Button from '@/components/Button'
import Link from 'next/link'
import PropTypes from 'prop-types'

const PetCard = ({ pet }) => {
    const description =
        pet.overview.slice(0, 40) + (pet.overview.length > 40 ? '...' : '')
    return (
        <div className="group relative pet-card flex rounded-lg h-full bg-blue bg-opacity-20 flex-col">
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

PetCard.propTypes = {
    pet: PropTypes.object.isRequired,
}

export default PetCard
