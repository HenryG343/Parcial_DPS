import React,{useDebugValue, useState, useSyncExternalStore} from 'react';
import Todo from '../components/Todo';
const Form = () => {
    const [todo, setTodo] = useState({});
    const [lista,setLista] = useState([]);
    const [primera, setPrimera] = useState(true);
    const [totalFinal, setTotalFinal] = useState(0);
    const datos = [
        {nombre:"Manzana",precio:0.5},
        {nombre:"Pera",precio:0.75},
        {nombre:"Naranja",precio:0.6},
        {nombre:"Sandia",precio:1.25},
        {nombre:"Fresa",precio:0.15},
        {nombre:"Jocote",precio:0.25},
        {nombre:"Uva",precio:0.15},
        {nombre:"Mandarina",precio:0.35},
        {nombre:"Cereza",precio:1},
        {nombre:"Papaya",precio:0.80}
    ];
    const handleChange = e => {
        setPrimera(false);
        setTodo({nombre: e.target.options[e.target.selectedIndex].title, precio: e.target.value, cantidad:0});
    }
    const handleClick = e => {
        if(primera === true){
            setLista([...lista,{nombre:datos[0].nombre,precio:datos[0].precio.toString(),cantidad:0}])
        }else{
            setLista([...lista,todo]);
        }
    }
    const deleteTodo = indice => {
        const newTodos = [...lista]
        newTodos.splice(indice,1)
        setLista(newTodos)
        updateTotal(newTodos);
    }

    const numberUpdate = (indice,valor) => {
        console.log(valor,lista[indice].cantidad)
        if(valor>lista[indice].cantidad){
            lista[indice].cantidad += 1;
        }else{
            lista[indice].cantidad -= 1;
        }
        
        updateTotal(lista);
    }

    const updateTotal = registros => {
        let total = 0;
        registros.map((result)=>{
            total += result.precio*result.cantidad;
        })
        setTotalFinal(total);
    }

    return (
        <>
        <div id="myDIV" class="header">
            <form onSubmit={e => e.preventDefault()}>
                <h1>Agregar producto</h1><br/>
                <select id="myInput" onChange={handleChange}>
                    {
                        datos.map((result)=>(<option title={result.nombre} value={result.precio} name="todo">{result.nombre}</option>))
                    }
                </select>
                <button onClick={handleClick} class="addBtn">Agregar</button>
            </form>
        </div>
        {
            lista.map((value,index) => (
                <Todo todo={value.nombre} value1={value.precio} key={index} index={index} deleteTodo={deleteTodo} numberUpdate={numberUpdate} cantidad={value.cantidad}/>
            ))
        } 
        <h2>El total a pagar es de ${totalFinal}</h2>
        </>
    )
}
export default Form
