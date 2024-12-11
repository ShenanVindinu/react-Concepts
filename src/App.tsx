import './App.css'
import {useState} from "react";



function App() {

    const [customer, setCustomer] = useState({
        firstName: "",
        lastName: "",
    })

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    // function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    //     setCustomer({
    //         ...customer,
    //         [e.target.name]: e.target.value
    //     })
    // }

    function addCustomer() {
        setCustomer({
            ...customer,
            firstName: firstName,
            lastName: lastName
        })
    }

    return (
        <>
            <input name={'firstName'} type="text" placeholder="First Name"
                   onChange={(e) => setFirstName(e.target.value)}/>
            <input name={'lastName'} type="text" placeholder="Last Name"
                   onChange={(e) => setLastName(e.target.value)}/>

            <br/>
            <br/>

            <button onClick={addCustomer}>Submit</button>

            <br/>
            <br/>
            {customer.firstName + " " + customer.lastName}
        </>
    );
}

export default App;
