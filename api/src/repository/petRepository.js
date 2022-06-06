import {con} from './connection.js'

export async function consultarTodos(id){
    const comando =
    `
    select id_pet = id,
    nm_filme = nome
    from tb_pet ` ;
    const resposta =  await con.query(comando,[id]);
    return resposta
}

export async function inserirNome(nome){
    const comando =
    `insert tb_pet (nm_pet) 
     values ('')`
  ;
    const resposta =  await con.query(comando,[nome]);
    return resposta
}