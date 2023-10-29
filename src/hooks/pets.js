import axios from '@/lib/axios'

export const getPets = async (id = null) => {
    const url = `/api/pets/${id == null ? '' : id}`
    console.log(url)
    return await axios
        .get(url)
        .then(e => {
            return e.data
        })
        .catch(error => {
            return []
        })
}
