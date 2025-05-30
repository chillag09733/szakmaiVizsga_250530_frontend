import React from 'react'

function Tesztkerdes({ adat }) {
    return (
        <>
            <tr>
                <td>{adat.angol}</td>
                <td><input id = "inputmezo" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" /></td>
                <td>✅ ❌</td>
            </tr>
        </>
    )
}

export default Tesztkerdes