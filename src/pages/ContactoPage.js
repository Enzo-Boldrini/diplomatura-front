import React from 'react'; 
import '../styles/ContactoPage.css';
import {useState} from "react";
import axios from "axios";

const ContactosPage = (props) => {

    const initialForm = {
        nombre:" ",
        email: " ",
        telefono: " ",
        mensaje: " "
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState("");
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData =>({
            ...oldData,
            [name]: value //forma dinamica

        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg(" ");
        setSending(true)
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
        
    }


    return (
        <main className='holder contacto'>
            <div>
                <h2>Complete el siguiente formulario</h2>
                <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                    </p>
                    <p>
                        <label>Telefono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                    </p>
                    <p>
                        <label>Mensaje</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>

                    <p className="acciones"> <input type="submit" value="Enviar" />
                    </p>
                </form>
                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}

            </div>
            <div className="columna datos">
                <h2>Otros datos de comunicaci??n</h2>
                <p> Tambien puede contactarse con nosotros usando los siguientes medios:</p>
                <ul>
                    <li>Telefono: 4225287</li>
                    <li>Email: contacto@marketing.com.ar</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Skype</li>

                </ul>


            </div>

        </main>
    );
}
export default ContactosPage;