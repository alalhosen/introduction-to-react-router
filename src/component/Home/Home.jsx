import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1>I want a Home Component.</h1>
            <h2>This is the home component.</h2>
            <h2>Home component is a best component.</h2>
            <Outlet></Outlet>

        </div>
    );
};
export default Home;
