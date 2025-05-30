import React from 'react'

function Tesztkerdes({ adat }) {
    return (
        <>
            <div className="row sorok">
                <div className="col-sm">{adat.angol}</div>
                <div className="col-sm"><input id="inputmezo" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" /></div>
                <div className="col-sm">✅ ❌</div>
            </div>
        </>
    )
}

export default Tesztkerdes