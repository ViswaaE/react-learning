import React from "react";

function List() {

    let Fruits = [
        { id: 1, name: "apple", quantity: 10 },
        { id: 2, name: "orange", quantity: 8 },
        { id: 3, name: "banana", quantity: 9 },
        { id: 4, name: "pineapple", quantity: 10 }];


    // Fruits.sort((a, b) => a.quantity - b.quantity)   //for less to more
    // Fruits.sort((a, b) => b.quantity - a.quantity)      //for more to less
    Fruits.sort((a, b) => a.name.localeCompare(b.name))  //for alpha

    const ListItems = Fruits.map(Fruit => <li key={Fruit.id}>{Fruit.name}:{Fruit.quantity}</li>)

    return (<ul>{ListItems}</ul>)
}
export default List