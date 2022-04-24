import React from 'react'

import './index.css'
const Item = (props) => {

    return (
        <div className='item'>
            {props.children}
        </div>
    )
}

export default Item;