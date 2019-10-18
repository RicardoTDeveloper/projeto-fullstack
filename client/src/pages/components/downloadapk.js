import React from 'react'

import './style.css'
import AirCnC from './download/AirCnC.apk'


function Download() {
    
    return (
        <div className="flex-button">
            <p>Versão Mobile: </p>
            <a target="_blank" href={AirCnC} download="Aircnc">Baixar</a>
        </div>
    )
}

export default Download;