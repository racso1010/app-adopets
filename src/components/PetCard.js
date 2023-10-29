import petimage from '../../public/petimages/mockup-fc750eaa.jpg'
import Button from '@/components/Button'
import Image from 'next/image'
import PropTypes from 'prop-types'

const PetCard = ({ pet }) => {
    return (
        <div className="group relative pet-card">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                    src={petimage}
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm font-bold text-gray-700 capitalize">
                        <a href="#">
                            <span
                                aria-hidden="true"
                                className="absolute inset-0"></span>
                            {pet.name}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                        {pet.description}
                    </p>
                </div>
            </div>
            <div className="mt-4 flex justify-center">
                <Button className="bg-blue px-12">Adopt me now</Button>
            </div>
        </div>
    )
}

PetCard.propTypes = {
    pet: PropTypes.object.isRequired,
}

export default PetCard
