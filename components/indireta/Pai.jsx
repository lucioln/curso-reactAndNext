import Filho from "./Filho"

export default function Pai(props){
    function DigaOla(){
        console.log('Ola')
    }
    return (
        <div>
            <Filho funcao={() => DigaOla()}></Filho>
        </div>
    )
}