import Button from '@/components/Button'

function PetInfo({ name, race, age, gender, overview, sterilized }) {
    return (
        <div className=" font-primary">
            <h1 className="leading-relaxed font-extrabold text-3xl text-palette-primary py-2 sm:py-4">
                {name}
            </h1>
            <p className="font-medium text-lg">{age}</p>
            <p className="font-medium text-lg">{race}</p>
            <p className="font-medium text-lg">{gender}</p>
            <p className="font-medium text-lg">{overview}</p>
            <p className="font-medium text-lg">
                {sterilized && <>Estoy esterilizad@</>}
            </p>
            <div className="text-xl text-palette-primary font-medium py-4 px-1"></div>

            <Button className="bg-blue mt-4">Adoptame</Button>
        </div>
    )
}

export default PetInfo
