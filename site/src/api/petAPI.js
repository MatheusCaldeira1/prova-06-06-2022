import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function cadastrarPet(nome){
    const r = await api.post('/pet/nome',{
        nome:nome,
    })
    return r.data
}

export async function listarTodos(){
    const resp = await api.get('/pets')
    return resp.data
}
