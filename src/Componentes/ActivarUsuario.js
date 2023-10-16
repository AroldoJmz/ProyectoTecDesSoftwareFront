import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

import { FaCheck, FaXmark } from "react-icons/fa6";

export default function ActivarUsuario({user, reloadList}){

    const [formData, setFormData] = useState({
        id: user.id,
        activo: user.activo
    });

    const data = () => {
        var bool = user.activo === true ? false : true;
        setFormData({ id: user.id, activo: bool });
    };

    const editUserStatus = async (e) => {
        e.preventDefault();
        try {   
            var bool = user.activo === true ? false : true;
            setFormData({ id: user.id, activo: bool });
            const response = await axios.post('http://localhost:5002/api/updateStatusUsuario/'+ formData.id, formData);
            if (response.status === 200) {
                reloadList();
                Swal.fire({
                    icon: 'success',
                    title: response.data,
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: response.data,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            console.log('Respuesta de la API:', response.data);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error al realizar la solicitud:',
                text: error.message,
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    return(
        user.activo === true 
        ? 
            <button onClick={editUserStatus} className="btn btn-outline-success" type="submit"><FaCheck/></button>  
        :
            <button onClick={editUserStatus} className="btn btn-outline-danger" type="submit"><FaXmark/></button>    
    )
}