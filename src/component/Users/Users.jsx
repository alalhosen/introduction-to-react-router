import { useLoaderData } from "react-router-dom";

const Users = () => {
    const users=useLoaderData();
    return (
        <div>
            <h3>Our Users:{users.length}</h3>
            <p>Our users are best users.</p>
        </div>
    );
};

export default Users;