export default function Numero(props){
    return(
        <>
            <span style={{
                margin: "2px",
                backgroundColor: "white",
                color: "black",
                padding: "20px",
                borderRadius: "25px"
            }}>{props.value}</span>
        </>
    )
}