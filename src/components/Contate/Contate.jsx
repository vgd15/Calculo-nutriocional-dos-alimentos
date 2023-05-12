import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import "./Contate.css";

const FormContato = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [mensagemEnviada, setMensagemEnviada] = useState(false);

    function onSubmit(data) {
        console.log("Data submitted: ", data);
    }

    const handleEnviarMensagem = () => {
        setMensagemEnviada(true);
        alert('Sua mensagem foi enviada!');
    };



return (
    <div className="login-form">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>


            <label htmlFor="inputEmail">Nome</label>
            <input
                type="nome"
                id="inputNome"
                name="nome" />

            <label htmlFor="inputEmail">E-mail</label>
            <input
                type="email"
                id="inputEmail"
                name="email"
                {...register("email", {
                    required: "Digite um email válido",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Digite um email válido",
                    },
                })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}

            <label htmlFor="Mensagem">Mensagem</label>
            <input
                type="mensagem"
                id="Mensagem"
                name="mensagem"
                {...register("password", {
                    required: "Você precisa digitar uma mensagem",
                })}
            />
            {errors.password && <p className="error">{errors.password.message}</p>}

            <button onClick={handleEnviarMensagem}>Enviar</button>



        </form>
    </div>
);
};

export default FormContato;