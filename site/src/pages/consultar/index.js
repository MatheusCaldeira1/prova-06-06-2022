import { useEffect, useState } from 'react';
import { listarTodos } from '../../api/petAPI';
import { useParams } from 'react-router-dom';

export default function Index(){
    const [pet, setPet] = useState([]);

    async function carregarPets(){
        const resp = await listarTodos();
        setPet(resp);
    }

    useEffect(() => {
        carregarPets();
    }, [])

    return(
        <main>
                <table>
                    <thead>
                    <tr>
                        <th>Indetificão</th>
                        <th>Nome</th>
                    </tr>

                    </thead> 
                                <tbody>

                {pet.map(item => 
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>

                            </tr>
                    )} 
        </tbody>

                </table>


            </main>
        )

}

