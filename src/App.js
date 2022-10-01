import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Inicio from './components/Inicio'
import Personaje from './components/Personaje'
import { Notfound } from './components/404'
import { Buscar } from './components/Buscar'
import { Loading } from './components/Loading'
import { Home } from './pages/Home'


const App = () =>{
    return (
        <Router>
    
            <Routes>
                <Route exact path="/inicio" element={<Inicio/>}/>               
                <Route exact path="/pokemon/:name" element={<Personaje/>}/>
                <Route path="*" element={<Notfound/>}/>
                <Route path="/notfound" element={<Notfound/>}/>
                <Route path="/loading" element={<Loading/>}/>              
                <Route path="/search/:search" element={<Buscar/>}/>
                <Route path="/Home" element={<Home/>}/> 
            </Routes>
        
        </Router>
    )
    
}
export default App