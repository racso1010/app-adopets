import axios from '@/lib/axios'

export const getPets = async (id = null) => {
    const url = `/api/pets/${id == null ? '' : id}`

    return await axios
        .get(url)
        .then(e => {
            return e.data
        })
        .catch(error => {
            return []
        })
}
export const registerPet = async ({ setErrors, ...props }) => {
    const csrf = () => axios.get('/sanctum/csrf-cookie')

    await csrf()

    setErrors([])
    axios
        .post('/api/pets', props)
        .then(e => {
            return e.data
        })
        .catch(error => {
            console.log(error)
        })
}
