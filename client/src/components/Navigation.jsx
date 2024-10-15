import {Link} from "react-router-dom";

export function Navigation() {
    return (
        <div className="flex justify-between p-5 pb-1 bg-zinc-500 mb-5">
            <Link to="/articulos/">
                <div className="logo font-bold mb-4 text-lg">Inicio</div>
            </Link>
            <div className="justify-end">
            <button className="bg-zinc-800 hover:bg-zinc-900 px-4 py-2 rounded-lg justify-end mx-1 hover:corsor-pointer">
                <Link to="/articulos-create/">
                    <div className="text-sm"> Nuevo artículo</div>
                </Link>
            </button>
            <button className="bg-zinc-800 hover:bg-zinc-900 px-4 py-2 rounded-lg justify-end mx-1 hover:corsor-pointer">
                <Link to="/articulos-import/">
                    <div className="text-sm"> Importar Excel</div>
                </Link>
            </button>
            </div>
        </div>
    );
}