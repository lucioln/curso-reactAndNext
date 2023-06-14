import { useState } from "react"

export default function contador(){

    const [contador, setContador] = useState(0)
    
    return(
        <div>
            <h1>Contador</h1>
            <div>Valor: {contador}</div>
            <button onClick={() => setContador(contador+1)}>+</button>
            <button onClick={()=> setContador(contador-1)}>-</button>

        </div>
    )
}