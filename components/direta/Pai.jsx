import Filho from "./Filho";

export default function Pai(props){
    return (
        <div>
            <Filho nome="Lucio" familia={props.familia}/>
            <Filho nome="Samantha" familia={props.familia}/>
        </div>
    )
}