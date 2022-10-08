import {useState} from 'react'
import './Item.css'

function Item (){

    return (
        <div>
            <h1 class="titre-item">Hello item</h1>
            <img src={'/building.jpg'} alt="" />
        </div>
    )     
}

export default Item;