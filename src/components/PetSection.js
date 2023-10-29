import PetImage from '@/components/PetImage'
import PetDetails from '@/components/PetDetails'

function PetSection({ petData }) {
    return (
        <div className="flex flex-col md:flex-row md:items-start md:space-y-0 pt-8 mx-auto">
            <PetImage image={petData.image} />
            <PetDetails petData={petData} />
        </div>
    )
}

export default PetSection
