import {Link} from "react-router-dom";

export function Navigation() {
    return (
        <div className="flex justify-between p-5 pb-1 bg-zinc-800 mb-5">
            <Link to="/articulos/">
                <h1 className="logo font-bold mb-4 text-lg">Gestor de Articulos</h1>
            </Link>
            
        </div>
    );
}