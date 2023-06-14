import { useState } from "react"

export default function mouse() {
    const estilo = {
        backgroundColor: "white",
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        height: "100vh"
    }

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    

    function quandoMover(e){
       setX(e.clientX)
       setY(e.clientY)
    }

    return (
        <div style={estilo} onMouseMove={quandoMover}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    )
}