import { useNavigate } from "react-router-dom"

export function ArticulosCard({articulo}) {

    const navigate = useNavigate()
    return (
        <div
        className="bg-zingc-800 p-3 hover:bg-zinc-700 hover:corsor-pointer border-2 rounded-lg border-zinc-700"
            onClick={() => {
                    navigate(`/articulos/${articulo.id }`)
            }}
        >
            <h1 className="font-bold">{articulo.descripcion}</h1>
            <p className="text-zinc-400">Codigo: {articulo.codigo}</p>
            <p className="text-zinc-200">$ {articulo.precio}</p>
        </div>
    );
}