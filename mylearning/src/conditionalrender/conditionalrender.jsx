

function Conditional(props){

    if (props.Islogged){
        return(
            <h2>HI Welcome {props.Username}</h2>
        )
    }
    else {
        return(
            <h2>PLEASE LOGIN</h2>
        )
    }
}
export default Conditional;