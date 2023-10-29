import Button from '@/components/Button'

function PetInfo({ name, race, age, gender, overview, sterilized }) {
    return (
        <div className=" font-primary">
            <h2 className="leading-relaxed font-extrabold text-3xl text-palette-primary py-2 sm:py-4">
                {name}
            </h2>
            <p className="font-medium text-lg mb-4">Edad: {age}</p>
            <p className="font-medium text-lg mb-4">Raza: {race}</p>
            <p className="font-medium text-lg mb-4">Genero: {gender}</p>
            <p className="font-medium text-lg mb-4">Descricion: {overview}</p>
            <p className="font-medium text-lg mb-4">
                {sterilized && <>Estoy esterilizad@</>}
            </p>
            <div className="text-xl text-palette-primary font-medium py-4 px-1"></div>

            <Button className="bg-blue">Adoptame</Button>
        </div>
    )
}

export default PetInfo
