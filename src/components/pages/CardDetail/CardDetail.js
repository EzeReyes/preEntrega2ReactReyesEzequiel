import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardComponent from "../../CardListComponent/CardComponent";
import "./style.css";

const CardDetail = () => 
{
    const [user, setUSer] = useState ([]);

    let { id } = useParams();

    useEffect (() => { 
            fetch(`https://63c761b4dcdc478e15d3f6f8.mockapi.io/producto/${id}`)
            .then(response => response.json())
            .then(json => setUSer (json))
        },[id]);

    return (
        <>
        <h1>Detalle del producto seleccionado:</h1>
    <div className="Container">
        <div key={user.id}>
        <CardComponent data={user}/>
        </div>
        <div className="InfoProduct">
            <h3>{`${user.tipo} ${user.nombre}`.toUpperCase()}</h3>
            <h4>Descripción del producto:</h4>
            <p>{user.descripcion}</p>
            <p className="Price" >$ {user.precio}</p>
        </div>
    </div>
    </>
    )
}

export default CardDetail;