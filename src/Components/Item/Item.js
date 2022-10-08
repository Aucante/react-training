import {useState} from 'react'
import './Item.css'

function Item (){

    const toggle = false;
    const styleCSS = {color: toggle ? "greenyellow" : "blue", fontSize: "50px"}

    return (
        <div>
            <h1 class="titre-item">Hello item</h1>
        </div>
    )     
}

export default Item;