export default function repeticao1() {
    const listaAprovados = [
        "João",
        "Maria",
        "Alex",
        "Ana",
        "Judite",
    ]

    function renderizarLista() {
        return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
    }

    return (
        <ul>
            {renderizarLista()}
        </ul>
    )
}