import React, { useState } from 'react'
import useApiContext from '../contexts/apiContext'

function Legordulo() {
    const { temaList, getAdat } = useApiContext();
    const [tema, setTema] = useState("valassz");

    return (
        <select className="form-select"
            aria-label="Default select example"
            id='tema'
            name='tema'
            onChange={(event) => {
                setTema(event.target.value)
            }}>
            <option value="valassz">Válassz témát!</option>
            {temaList.map((element, index) => {
                return(
                    <option value={element.id} key={index}>{element.temanev}</option>
                )
            })}
        </select>
    )
}

export default Legordulo