import React,{useState, useEffect } from "react";

const api = "https://63c761b4dcdc478e15d3f6f8.mockapi.io/producto";

const SelectorButton = () => {
    const [users, setUsers] = useState([]);

console.log("users", users, users.id)


useEffect(() => {
  fetch(api)
  .then(response => response.json())
  .then(json => setUsers(json))
},[]);

const ceras = () => { users.length((elemento) => { return (elemento)} )}
const mostrar = () => console.log ({ceras});

return (
    <>
<button onClick={mostrar}>Ceras</button>
<button>Pomadas</button>
<button>Otros</button>
</>
)}



export default SelectorButton;