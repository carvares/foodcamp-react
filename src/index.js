import ReactDOM from 'react-dom';
import Topbar from "./Topbar";
import RenderMenus from "./Rendermenus";

function App(){
    return(
        <>
        <Topbar />
        <RenderMenus />
        </>
    )
};





ReactDOM.render(<App/>,document.querySelector(".root"));