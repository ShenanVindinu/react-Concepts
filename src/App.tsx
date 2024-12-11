import './App.css'
import {useState} from "react";



function App() {

    const [customer, setCustomer] = useState({
        firstName: "",
        lastName: "",
    })

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
           <input name={'firstName'} type="text" placeholder="First Name" onChange={handleInputChange} />
           <input name={'lastName'} type="text" placeholder="Last Name" onChange={handleInputChange} />
            <br/>
            {customer.firstName + " " + customer.lastName}
        </>
    );
}

export default App;
