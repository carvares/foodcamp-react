export default function RenderOptions(props){
    return(
           <div class = "option">
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
                <span class="minus">-</span>
                <span class="counter">0</span>
                <span class="plus">+</span>
                </div>
                </h4>
                
                </div>
            </div>
    );
};