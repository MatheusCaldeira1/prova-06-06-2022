import { useState, useEffect } from 'react';
import { cadastrarPet,listarTodos } from '../../api/petAPI';
import { useParams } from 'react-router-dom';

export default function Index(){
    const [nome,SetNome] = useState('');
    const [Id, SetId] = useState('');

    const { idParam } = useParams();

    useEffect(() => {
        if (idParam) {
            pets();
        }
    }, [])

    async function pets() {
        const r = await listarTodos(idParam);
        SetId(r.id);
        SetNome(r.nome);
    }
    
    async function salvarClick(){
        try{
            const a = await cadastrarPet(nome)
            alert('pet cadastrado')
        }catch(err){
            alert(err.message);
        }
    }

    return(
        <div className='page-container'> 
            <div> 
                <h1> Cadastre seu pet </h1>
            <input type='text' value={nome} onChange={e=> SetNome(e.target.value)} />

            <button onClick={salvarClick}> cadastrar </button> 

            </div>

            <div> 
            


            </div>

        </div>
    )
}

