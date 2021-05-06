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
                <h4>
                   R$: {props.price}
                </h4>
            </div>
    );
};