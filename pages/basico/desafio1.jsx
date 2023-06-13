/*
    <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
*/

export default function lista1() {
    const list = createList(10)

    list.forEach(element => {
        return <li>{element}</li>
    });
    
    return (
        <div>
                {
                    list.map(element => {
                        return (<span>{element}</span>);
                    })
                }
        </div>
    );
    
}

function createList(valor) {
    const list = []

    for (let i = 0; i < valor; i++) {
        list.push(`${i},`)
    }
    list.push(`${valor}.`)
    return list
}