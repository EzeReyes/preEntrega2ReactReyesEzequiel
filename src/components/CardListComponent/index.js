import React,{useState, useEffect } from "react";
import CardComponent from "./CardComponent";
import "./styles.css";
import {Link} from "react-router-dom";

const api = "https://63c761b4dcdc478e15d3f6f8.mockapi.io/producto";

const CardListComponent = () => {
  const [users, setUsers] = useState([]);

console.log("users", users, users.id)


useEffect(() => {
  fetch(api)
  .then(response => response.json())
  .then(json => setUsers(json))
},[]);

return (
    <>
    <h1>Abuelo Mario, productos de barbería</h1>
    <div className="containerProducts">
    {users.map ((user) => { 
    return (
      <div key={user.id}>
    <Link to={`/detail/${user.id}`}>
    <CardComponent data={user}/>
    </Link>
    </div>
    )
    })
    }
    </div>
    </>
    );
;
}

export default CardListComponent;
