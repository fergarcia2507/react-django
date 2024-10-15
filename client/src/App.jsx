import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ArticulosPage } from './pages/ArticulosPage';
import { ArticulosImportExcelPage } from './pages/ArticulosImportExcelPage';
import { ArticuloFormPage } from './pages/ArticuloFormPage';
import { Navigation } from "./components/Navigation";
import Excel from './components/Excel';


function App() {
  return (
    <BrowserRouter >
      <div className="container-fluid mx-auto">
        <div className="pb-5  bg-zinc-600">
        <Navigation/>
          <Routes>
            <Route path="/" element={<Navigate to="/articulos"/>} />
            <Route path="/articulos/" element={<ArticulosPage/>} />
            <Route path="/articulos-create/" element={<ArticuloFormPage/>} />
            <Route path="/articulos-import/" element={<ArticulosImportExcelPage/>} />
            <Route path="/articulos/:id" element={<ArticuloFormPage/>} />
          </Routes>
          <Toaster/>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;