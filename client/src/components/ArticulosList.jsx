import { useEffect, useState } from "react";
import { getAllArticulos } from '../api/articulos.api';
import { ArticulosCard } from "./ArticulosCard";

export function ArticulosList() {
    const [articulos, setArticulos] = useState([]);
    
    useEffect(() => { 
        async function loadArticulos() {
            const res = await getAllArticulos();
            setArticulos(res.data);
        }
        loadArticulos()
    }, []);

    return (
        <div className="grid grid-cols-1 gap-2 p-5 max-w-xl m-auto" >
            {articulos.map(articulo => (
                <ArticulosCard key={articulo.id} articulo={articulo} />
            ))}
        </div>
    );
}