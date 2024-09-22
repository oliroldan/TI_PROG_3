import Populares from "./Populares";
import Cartelera from "./Cartelera";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Populares/>
            <Link to="/populares"><button>Ver todas</button></Link>
            <Cartelera/>
            <Link to="/cartelera"><button>Ver todas</button></Link> 
        </>
    );
};

export default Home;