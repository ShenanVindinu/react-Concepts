import './App.css'
import {useState} from "react";
import {Customer} from "./models/Customer.ts";



function App() {

    const [customers, setCustomers] = useState<Customer[]>([]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const addCustomer = () => {
        console.log(name, email, phone, address);
        const newCustomer = new Customer(name, email, phone, address);

        setCustomers((customers) => [...customers, newCustomer]);
    }

    const deleteCustomer = () => {
        setCustomers((customers) => customers.slice(0,-1));
    }

    const deleteByEmail = () => {
        const newCustomer = new Customer(name, email, phone, address);
        setCustomers((customers) => customers.filter(
            (customer) => customer.email !== newCustomer.email)
        );
    }

    return (
        <>
            <input name={"name"} type={"text"} onChange={(e) => setName(e.target.value)} />
            <input name={"email"} type={"text"} onChange={(e) => setEmail(e.target.value)} />
            <input name={"phone"} type={"text"} onChange={(e) => setPhone(e.target.value)} />
            <input name={"address"} type={"text"} onChange={(e) => setAddress(e.target.value)} />

            <br/>
            <br/>

            <button onClick={addCustomer}>Add</button>
            <button onClick={deleteCustomer}>Delete</button>
            <button onClick={deleteByEmail}>Delete By Email</button>

            <br/>
            <br/>

            {customers.map((customer) => (
                <h3>{customer.name + " | " + customer.email + " | " + customer.phone + " | " + customer.address}</h3>
            ))}

        </>
    );
}

export default App;
