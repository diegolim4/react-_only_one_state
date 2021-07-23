import React, { useState } from 'react'

// Um único state em um formulário

export default () => {

    const [form, setForm] = useState({ "nome": "", "age": "", "estcivil": "" })

    // função manipuladora onde fazemos os tratamentos
    const handlFormChange = (e) => {
        if (e.target.getAttribute('name') == 'fnome') {
            setForm({ "nome": e.target.value, "age": form.age, "estcivil": form.estcivil })
        } else if (e.target.getAttribute('name') == 'fidade') {
            setForm({ "nome": form.nome, "age": e.target.value, "estcivil": form.estcivil })
        } else {
            setForm({"nome": form.nome, "age": form.age, "estcivil": e.target.value})
        }

    }

    return (
        <>
            <label>Nome: </label>
            <input type="text" name="fnome" value={form.nome} onChange={(e) => handlFormChange(e)} /><br /><br />

            <label>Idade: </label>
            <input type="number" name="fidade" value={form.age} onChange={(e) => handlFormChange(e)} /><br /><br />

            <label>Estado civil: </label>
            <select value={form.estcivil} name="fselect" onChange={(e) => handlFormChange(e)}>
                <option value="--">--</option>
                <option value="Solteiro">Solteiro</option>
                <option value="Casado">Casado</option>
            </select>

            <p>------------------------</p>
            <p>Seu nome: {form.nome}</p>
            <p>Sua idade: {form.age}</p>
            <p>Estado Civil: {form.estcivil}</p>
        </>

    )
}