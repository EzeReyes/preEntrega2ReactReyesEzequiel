import React from "react";
import SelectorButton from "../../Button/SelectorButton/SelectorButton";
import CardListComponent from "../../CardListComponent";
import BasicTextFields from "../../TextField/TextField";

const Home = () => 
{
    return (
    <div>
        <BasicTextFields/> 
        <SelectorButton/>
        <CardListComponent greeting="Bienvenido" className="ItemListContainer"/>
    </div>
    )
}

export default Home;