import { Link } from "react-router-dom";

const NoEncontrada = () => {
    return (
        <div>
            <h1>404</h1>
            <Link to="/" className="btn btn-outline-dark">
                Inicio
            </Link>
        </div>
    );
};

export default NoEncontrada;