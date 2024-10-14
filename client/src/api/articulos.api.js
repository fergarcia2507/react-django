import axios from "axios";

const articulosApi = axios.create({
    baseURL: 'http://localhost:8000/articulos/api/v1/articulos/'
})

export const getAllArticulos = () => articulosApi.get("/");

export const getArticulo = (id) => articulosApi.get(`/${id}/`);

export const createArticulo = (articulo) => articulosApi.post("/", articulo);

export const deleteArticulo = (id) => articulosApi.delete(`/${id}/`);

export const updateArticulo = (id,articulo) => articulosApi.put(`/${id}/`, articulo);
/*
export const deleteArticulo = (id) => {
    return axios.delete('http://localhost:8000/articulos/api/v1/articulos/6');
}
    */