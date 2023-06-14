function acao1(){
    console.log('Acao 1')
}

export default function botao(){
    function acao2(){
        console.log('Acao 2')
    }

    return(
        <div>
        <input type="text" onChange={(e) => console.log(e.target.value)} />
            <button onClick={acao1}>Acao 1</button>
            <button onClick={acao2}>Acao 2</button>
            <button onClick={function (){
                console.log('Acao 3')
            }}>Acao 3</button>
            <button onClick={() => {
                console.log('Acao 4')
            }}>Acao 4</button>
            <button onClick={(e) => {
                console.log(e)
            }}>Acao 5</button>
        </div>
    )
}