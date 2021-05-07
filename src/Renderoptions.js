import React from 'react';


export default function RenderOptions(props){
    const [numberCounter, setNumberCounter] = React.useState(0);
    function minus(){
        setNumberCounter(numberCounter - 1);
        if(numberCounter === 0){
            props.setState("");
        }
    }
    function plus(){
        
        setNumberCounter(numberCounter + 1);
        props.setState([...props.state,{name: props.name, price: props.price, numberCounter: numberCounter}]);
        console.log(props.state);
    }
    function select(){
        if (numberCounter === []){
            plus()
        } else{return}
    }

    return(
           <div class = {numberCounter === 0? "option": "option selected"} onClick={select}>
                <img src={props.img} class ="optionPhoto" alt=""></img>
                <h2>
                    {props.name}
                </h2>
                <h3>
                    {props.description}
                </h3>
                <div>
                <h4>
                   R$: {props.price}
                <div>
                <span class="minus" onClick = {minus}>-</span>
                <span class="counter">{numberCounter}</span>
                <span class="plus" onClick = {plus}>+</span>
                </div>
                </h4>
                
                </div>
            </div>
    );
};