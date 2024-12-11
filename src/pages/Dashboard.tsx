import {Link} from "react-router";

export default function Dashboard() {
    return (
        <>
            <h2>DashBoard</h2>
            <Link to={'/add'}>Add Customer </Link> <br/>
            <Link to={'/update'}>Update Customer </Link> <br/>
            <Link to={'/delete'}>Delete Customer </Link> <br/>
        </>
    )
}
