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
export const registerPet = async ({ setErrors, payload }) => {
    const csrf = () => axios.get('/sanctum/csrf-cookie')

    await csrf().then(e => console)

    setErrors([])

    return await axios
        .post('/api/pets', payload)
        .then(e => {
            return e.data
        })
        .catch(error => {
            console.log(error)
        })
}

export const deletePets = async (id = null) => {
    const url = `/api/pets/${id == null ? '' : id}`

    return await axios
        .delete(url)
        .then(e => {
            window.location.pathname = '/pets'
        })
        .catch(error => {
            return []
        })
}
