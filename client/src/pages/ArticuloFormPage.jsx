import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createArticulo, deleteArticulo, updateArticulo, getArticulo } from "../api/articulos.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast"

export function ArticuloFormPage() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit( async (data) => {
        if (params.id) {
            console.log(data);
            updateArticulo(params.id, data);
        }else {
            await createArticulo(data);
            toast.success('Articulo creado correctamente');
        }
        navigate("/articulos");
    });

    useEffect(() => {
        async function loadArticulo() {
            if (params.id) {
                const {data} = await getArticulo(params.id);
                setValue('codigo', data.codigo)
                setValue('descripcion', data.descripcion)
                setValue('precio', data.precio)
            }else{
                setValue('codigo', empty)
                setValue('descripcion', null)
                setValue('precio', null)
            }
        }
        loadArticulo();
    }, [])

    return (
        <div className="px-5">
            <h1 className='font-bold text-lg pb-3 mx-auto'>Articulo</h1>
            <div className="max-w-xl mx-auto border-2 rounded-lg border-zinc-700 p-5">
                
                <form onSubmit={onSubmit}>
                    <label className="text-sm">Codigo:</label>
                    <input 
                    type="text"
                    placeholder="Codigo"
                    {...register("codigo", { required: true })}
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                    />
                    <label className="text-sm">Descripcion:</label>
                    <textarea 
                    rows="3" 
                    placeholder="Descripcion"
                    {...register("descripcion", { required: true })}
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                    ></textarea>
                    <label className="text-sm">Precio:</label>
                    <input 
                    type="text"
                    placeholder="Precio"
                    {...register("precio", { required: true })}
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                    />
                    <button className="bg-zinc-800 p-3 rounded-lg block w-full my-5">Guardar</button>

                </form>
                
                {params.id && (
                    <div className="flex justify-end border-t border-zinc-800">
                        <button 
                            className="bg-red-500 p-3 rounded-lg w-48 mt-5"
                            onClick={async () => {
                                const accepted = window.confirm('¿Esta seguro de eliminar el artículo?')
                                if (accepted) {
                                    await deleteArticulo(params.id);
                                    navigate("/articulos");
                                }
                            }}
                        >
                            Eliminar articulo
                        </button>
                    </div>
                )}
            </div>    
        </div>   
    );
}

