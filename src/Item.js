import {useState} from 'react'

function Item (props){

    const [itemState, setItemState] = useState('Item state ok')

    console.log(props);

    return (
        <div>
            <h1>Hello item</h1>
            <button onClick={() => props.func(itemState)}>Change state </button>
        </div>
    )     
}

export default Item;