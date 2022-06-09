import {con} from './connection.js'


export async function inserirNome(name){
    const comando =
    `insert tb_pet(nm_pet) 
     value (?)`;
    const [resposta] =  await con.query(comando,[name.nome]);
    return resposta
}


export async function consultarTodos(){
    const comando =
    ` select id_pet    id,
      nm_pet           nome
      from tb_pet ` ;
    const [resposta] =  await con.query(comando);
    return resposta
}
