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

export async function listarTodos(nome, id){
    const resp = await api.post('/pets',{
        nome:nome,
        id:id
    })
    return resp.data
}
