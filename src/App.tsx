import './App.css'
import ButtonComponent from "./component/ButtonComponent.tsx";


function App() {

    function handleClick(type: string) {
        console.log('click');
        alert(type + ' clicked');
    }


    return (

        <>
            <ButtonComponent name='Dashboard' onClick={handleClick}/>
            <ButtonComponent name='Add Customer' onClick={handleClick}/>
            <ButtonComponent name='DeleteCustomer' onClick={handleClick}/>
        </>

    )
}

export default App
