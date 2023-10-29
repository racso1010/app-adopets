import axios from '@/lib/axios'

export const getPets = async () => {
    return await axios
        .get('/api/pets')
        .then(e => {
            return e.data
        })
        .catch(error => {
            if (error.response.status !== 422) throw error
        })
}
