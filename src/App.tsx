import './App.css'
// import ButtonComponent from "./component/ButtonComponent.tsx";
// import {useState} from "react";
import Item from "./component/Item.tsx";


function App() {
    // const [count, setCount] = useState(0);

    // function handleClick() {
    //     setCount(count + 1);
    // }

    return (
        <>
            <Item title={'RAD'} desc={'Lorem ipsum dolor sit amet'} />
            <Item title={'MAD'} desc={'Lorem ipsum dolor sit amet'} />
        </>
    );
}

export default App;
