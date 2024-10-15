import { useNavigate } from "react-router-dom"

export function ArticulosCard({articulo}) {

    const navigate = useNavigate()
    return (
        <div
        className="bg-zinc-700 p-3 hover:bg-zinc-800 hover:corsor-pointer border-2 rounded-lg border-zinc-700"
            onClick={() => {
                    navigate(`/articulos/${articulo.id }`)
            }}
        >
            <div className="w-full flex  justify-between">
            <p className="text-zinc-400">Cod: {articulo.codigo}</p>
            <p className="font-bold">{articulo.descripcion}</p>
            <p className="text-zinc-200">$ {articulo.precio}</p>
            </div>
        </div>
    );
}