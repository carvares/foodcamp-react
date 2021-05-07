import ReactDOM from 'react-dom';
import Topbar from "./Topbar";
import RenderMenus from "./Rendermenus";
import "./styles/reset.css"
import "./styles/style.css"
import React from 'react';
import Bottombar from "./Bottombar";

function App(){
    const [food , setFood] = React.useState([]);
    const [drink , setDrink] = React.useState([]);
    const [dessert , setDessert] = React.useState([]);
    let teste = [food,drink,dessert];
    return(
        <>
        <Topbar />
        
        <RenderMenus setFood = {setFood} setDrink = {setDrink} setDessert = {setDessert} food = {food} drink = {drink} dessert = {dessert} />
        {console.log(JSON.stringify(teste))}
        <Bottombar food = {food} drink = {drink} dessert = {dessert}/>
        </>
    )
};

export default function ChangeButtom(props){
    if (props.food.length < 1 || props.drink.length < 1 || props.dessert.length < 1) {
        return(
            <>
            <div class = "waitorder">
            Selecione os 3 itens para fechar o pedido
            </div>
            </>
        )
    } else {
        return(
            <div class = "endorder">
            <strong>Fechar pedido</strong>
            </div>
        )
    }
}



ReactDOM.render(<App/>,document.querySelector(".root"));