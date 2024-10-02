import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    const navigation = useNavigation();
    const location=useNavigation();
    console.log(location);
    return (
        <div>
            <Header></Header>
            {
                navigation.state === "loading" ?
                    <p>Loading...</p> :
                    <Outlet></Outlet>
            }
            {/* <h1>I want a Home Component.</h1>
            <h2>This is the home component.</h2>
            <h2>Home component is a best component.</h2> */}
            <Footer></Footer>

        </div>
    );
};
export default Home;
