function PetImage({ image }) {
    return (
        <div className="w-full md:w-1/2 max-w-md border border-palette-lighter bg-white rounded shadow-lg">
            <div className="relative h-96">
                <img
                    src={image}
                    alt="pet-image"
                    layout="fill"
                    className="transform duration-500 ease-in-out hover:scale-105"
                />
            </div>
        </div>
    )
}

export default PetImage
