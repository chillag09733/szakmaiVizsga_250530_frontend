import React from 'react'
import useApiContext from '../contexts/apiContext'
import Tesztkerdes from './Tesztkerdes';

function Tesztkerdesek() {
    const { szoList } = useApiContext();
    return (
        <>
            <div className="container text-left first-row">
                <div className="row">
                    <div className="col-sm">
                        ANGOL
                    </div>
                    <div className="col-sm">
                        MAGYAR
                    </div>
                    <div className="col-sm">
                        VISSZAJELZÉSEK
                    </div>
                </div>

            </div>
            <div className="container text-left">
                {szoList.map((element, index) => {
                    return <Tesztkerdes adat={element} key={index} />
                })}
            </div>
        </>

        // <table class="table">
        //     <thead>
        //         <tr>
        //             <th scope="col">ANGOL</th>
        //             <th scope="col">MAGYAR</th>
        //             <th scope="col">VISSZAJELZÉS</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {szoList.map((element, index) => {
        //             return <Tesztkerdes adat = {element} key = {index}/>
        //         })}
        //     </tbody>
        // </table>
    )
}

export default Tesztkerdesek