import React from 'react'
import NumericInput from 'react-numeric-input';

const Todo = ({todo,index,value1,deleteTodo,numberUpdate,cantidad}) => {
    return (
        <>
            <div class="myUL">
                <h3>Producto: {todo}${value1}</h3>
                <NumericInput min={0} value={cantidad} onChange={(value)=>numberUpdate(index,value)}/>
                <button className='btn-delete' onClick={()=>deleteTodo(index)}>x</button>
            </div>
        </>
    )
}
export default Todo