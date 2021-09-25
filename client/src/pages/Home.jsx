import React, { useState } from 'react'
import { useMutation } from '@apollo/client'

import { CREATE_USER } from '../mutations'

export default function Home() {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [creationMessage, setCreationMessage] = useState('')
    const [dataCreation, setDataCreation] = useState({
        username: '',
        password: ''
    })

    const [createUser] = useMutation(CREATE_USER)

    const handleCreate = (button) => {
        button.preventDefault()
        createUser({variables: dataCreation})
        .then(() => {
            setCreationMessage('Usuario creado con exito')
        })
        .catch(err => {
            setCreationMessage('Error en la creacion')
            console.log(err);
        })
    }

    const handleName = (button) => {
        const input = button.target.value
        const auxData = dataCreation
        setName(input)
        auxData.username = input
        setDataCreation(auxData)
    }

    const handlePassword = (button) => {
        const input = button.target.value
        const auxData = dataCreation
        setPassword(input)
        auxData.password = input
        setDataCreation(auxData)
    }

    return (
        <div>
            <h1>Crear usuario:</h1>
            <form className="row g-3">
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Nombre</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="name" value={name} onChange={handleName} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Contraseña</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="password" value={password} onChange={handlePassword} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label>{creationMessage}</label>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary" onClick={handleCreate}>Crear</button>
                </div>
            </form>
        </div>
    )
}
