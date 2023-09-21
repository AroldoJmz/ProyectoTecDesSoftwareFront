import { useEffect, useState } from 'react';

import axios from 'axios';

export default function ListaUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const ListaUsuarios = async () => {
        try {
            const response = await axios.get('https://back-aroldo.onrender.com/api/listUsuarios');

            const lista = {...response.data};
            setUsuarios(lista);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        ListaUsuarios();
    }, []);

    return (
        <>
            <h1>Lista de usuarios</h1>
            <table class="table table-hover table-bordered">
                <thead className=''>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody className='table-group-divider'>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
                <tfoot className='table-group-divider'>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}