import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Jquery from 'jquery';

import AgregarUsuario from './AgregarUsuario';
import EditarUsuario from './EditarUsuario';
import ActivarUsuario from './ActivarUsuario';
import CambiarContraseña from './CambiarContraseña';

import { FaTrashCan, FaPencil, FaCheck, FaXmark } from "react-icons/fa6";
import EliminarUsuario from './EliminarUsuario';
export default function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);

    const userList = async () => {
        try {
            const response = await axios.get('http://localhost:5002/api/listUsuario');
            const list = [...response.data];
            setUsuarios(list); 
        } catch (e) {
            console.error(e.message);
        }
    };

    useEffect(() => {
        userList();
    }, []);

    return (
        <>
        <div className='container'>
            <div className='d-flex my-3'>
                <AgregarUsuario reloadList={userList}/>&nbsp;
                <h1>Lista de usuarios</h1>               
            </div>
            <table id='usersTable' className="table table-hover table-bordered">
                <thead className=''>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Email</th>
                        <th scope="col">Activo</th>
                        <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody className='table-group-divider'>
                    {usuarios.map(usuario => 
                        <tr key={usuario.id} id={usuario.id}>
                            <td>{}</td>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.email}</td>
                            <td>{<ActivarUsuario user={usuario} reloadList={userList}/>}</td>
                            <td>
                                <EditarUsuario user={usuario} reloadList={userList}/>&nbsp;
                                <EliminarUsuario userId={usuario.id}/>&nbsp;
                                <CambiarContraseña user={usuario}/>
                            </td>
                        </tr>
                    )}                   
                </tbody>
                <tfoot className='table-group-divider'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Email</th>
                        <th scope="col">Activo</th>
                        <th scope="col">Opciones</th>
                    </tr>
                </tfoot>
            </table>
        </div>
        </>
    )
}