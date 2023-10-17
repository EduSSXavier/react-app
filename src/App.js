import './pages/Eventos_Estilos.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Eventos_Layout'
import Home from './pages/Eventos_Home'
import Listar from './pages/Eventos_Listar'
import Incluir from './pages/Eventos_Incluir'
import NoPage from './pages/Eventos_NoPage'

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='Listar' element={<Listar />} />
                <Route path='Incluir' element={<Incluir />} />
                <Route path='*' element={<NoPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;