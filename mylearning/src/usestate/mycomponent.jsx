import React, { useState } from "React";

function Mycomponent() {

    const [name, setName] = useState();
    const UpdateName = () => {
        setName("viswaa")
    }

    return (
        <>
            <p>Name :{name}</p>
            <button onClick={UpdateName}>Update Name</button>
        </>

    )

} export default Mycomponent;