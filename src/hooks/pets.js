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
    return await axios
        .post('/api/pets', props, {
            headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then(e => {
            return e.data
        })
        .catch(error => {
            console.log(error)
        })
}
