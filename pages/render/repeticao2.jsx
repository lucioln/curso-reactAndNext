import listaProdutos from "@/data/listaProdutos"

export default function repeticao2(){

    function renderizarTable(){
        return listaProdutos.map(elemento => {
            return (
                <tr key={elemento.id}>
                    <td>{elemento.id}</td>
                    <td>{elemento.nome}</td>
                    <td>{elemento.preco}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {renderizarTable()}
                </tbody>
            </table>
        </div>
    )
}