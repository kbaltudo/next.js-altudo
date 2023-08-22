import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Alert({ message, type, icon }:any) {
    type = !type ? 'success' : type;
    return (
        <div className={"alert alert-" + type} role="alert">
            { icon ? 
                <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
                : null
            }
            <span className="px-2">{message}</span>
        </div>
    )
}

export default Alert