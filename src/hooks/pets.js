import axios from '@/lib/axios'

export const getPets = async () => {
    return await axios
        .get('/api/pets')
        .then(e => {
            return e.data
        })
        .catch(error => {
            return []
        })
}
