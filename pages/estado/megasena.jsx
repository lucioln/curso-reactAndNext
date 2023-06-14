import { useState } from "react"
import Numero from "@/components/Numeros"
export default function megaSena() {

    const numeros = []
    const [play, setPlay] = useState(false)
    const [numerosTemp, setNumerosTemp] = useState([]);


    function gerarNumeros(i) {
        const numeros = [];
      
        while (numeros.length < i) {
          const value = parseInt(Math.random() * 60) + 1;
      
          if (!numerosTemp.includes(value)) {
            numeros.push(<Numero value={value} />);
            numerosTemp.push(value);
          }
        }
      
        return numeros;
      }
      

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "70vh", // Define a altura mínima da div para ocupar toda a altura da tela
            }}>
                <h1>Gerar números da Mega Sena</h1>
                <h3>Quantos números gerar?</h3>
                
                <button onClick={() => { setPlay(!play) }}>{play ? "Limpar" : "Gerar Números"}</button>
            </div>

            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}>
                {
                    !play ? null : gerarNumeros(6)
                }
            </div>
        </>
    )
}
