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

export const registerPet = async ({ setErrors, ...props }) => {
    await csrf().then(e => console.log(e))
    setErrors([])
    axios
        .post('/register', props)
        .then(() => mutate())
        .catch(error => {
            if (error.response.status !== 422) throw error
            setErrors(error.response.data.errors)
        })
}


