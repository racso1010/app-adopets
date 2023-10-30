import { useState } from 'react'
import PetInfo from '@/components/PetInfo'

function PetDetails({ petData }) {
    return (
        <div className="flex flex-col justify-between h-full w-full md:w-1/2 ml-20 space-y-4">
            <PetInfo
                id={petData.id}
                name={petData.name}
                race={petData.race}
                age={petData.age}
                gender={petData.gender}
                overview={petData.overview}
                sterilized={petData.sterilized}
            />
        </div>
    )
}

export default PetDetails
