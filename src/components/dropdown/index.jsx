import React, { useState } from 'react'

import { MoreIcon } from '../../icons/MoreIcon'

import './index.css'

const DropDown = (props) => {

    const { iconStyle, position } = props;
    const [open, setOpen] = useState(false);

    const onButtonClick = () => {
        setOpen(!open)
    }

    return (
        <div className={`dropdown ${position === 'right' ? "dropdown-to-right" : "dropdown-to-left"}`}>
            <button className={`dropdown-button ${open && 'open'}`} onClick={onButtonClick}><MoreIcon {...iconStyle} /></button>
            
            <div className={`dropdown-itens ${open && 'open'} 
                ${position === 'right' ? "itens-to-right" : "itens-to-left"}`}>
                {props.children}
            </div>
        </div>
    )
}

export default DropDown;