import RenderOptions from './Renderoptions';




export default function RenderMenus(props){
let foodOptions = [{name: "Frango Yin Yang", img:"imagens/frango.jpg"  , description: "um pouco de batata, um pouco de salada", price: "14.90"},
                  {name: "Lasanha Bolonhesa", img:"imagens/lasanha.jpg"  , description: "Bastante recheio, queijo delicioso", price: "23.90"},
                  {name: "Fritada de Presunto", img:"imagens/fritada.jpg"  , description: "Feita no azeite com bastante recheio", price: "18.90"},
                  {name: "Pene de Atum", img:"imagens/pene-atum.jpg"  , description: "Massa artesanal, atum fresco", price: "21.90"},
                  {name: "Arroz Colorido", img:"imagens/arroz-colorido.jpg"  , description: "Incrível arroz de forno do cheff", price: "16.90"},
                  {name: "Almôndegas", img:"imagens/almondegas.jpg"  , description: "Melhores carnes e queijos unidos", price: "25.90"}];


let drinkOptions = [{name: "Coca-cola gelada", img:"imagens/coquinha.jpg"  , description: "Lata 350ml", price: "4.50"},
                  {name: "Guaraná gelado", img:"imagens/guarana.jpg"  , description: "Lata 350ml", price: "4.50"},
                  {name: "Sucos Naturais", img:"imagens/suco.jpg"  , description: "Copo 400ml", price: "6.00"},
                  {name: "Água mineral", img:"imagens/agua.jpg"  , description: "500ml c/ ou s/ gás", price: "2.00"}];

let dessertOptions= [{name: "Pudim de leite", img:"imagens/pudim.jpg"  , description: "Tradicional pudim de leite da casa", price: "7.90"},
                  {name: "Brigadeiro", img:"imagens/brigadeiro.jpg"  , description: "50g do melhor brigadeiro da cidade", price: "4.00"},
                  {name: "Torta de limão", img:"imagens/tortadelimao.jpg"  , description: "Massa de biscoito, recheio de felicidade", price: "8.90"}];
    

let menuTittles = ["Primeiro, seu prato","Agora, sua bebida","Por fim, sua sobremesa"];
let states = [props.setFood, props.setDrink, props.setDessert];
let selection = [props.food, props.drink, props.dessert];
let MenuOptions = [foodOptions, drinkOptions, dessertOptions];


    return(
        <div class="content">
        {MenuOptions.map((arrayatual, i) => 
        <>
        <h1>{menuTittles[i]}</h1>
        <div class="row">
            {arrayatual.map((itematual) => 
            <RenderOptions  name ={itematual.name} img = {itematual.img} description = {itematual.description} price ={itematual.price} setState={states[i]} state = {selection[i]}/>
            )}
        </div>
        </>
        
    )}</div>
    )

}