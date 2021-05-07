import ChangeButtom from './index';

export default function Bottombar(props){

    return(

        <div class = "bottombar">

        <ChangeButtom food = {props.food} drink = {props.drink} dessert = {props.dessert}/>

        </div>


    )
};

