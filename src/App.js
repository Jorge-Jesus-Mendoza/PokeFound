import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Pokemon from './pages/Pokemon'
import { Notfound } from './pages/404'
import { Buscar } from './pages/Search'
import {New} from './pages/New'
import { EditPokemon } from './pages/EditPokemon'
import { ErrorServer } from './pages/505'


const App = () =>{
    return (
        <Router>
    
            <Routes>
                <Route exact path="/home" element={<Home/>}/>               
                <Route exact path="/pokemon/:name" element={<Pokemon/>}/>
                <Route path="*" element={<Notfound/>}/>
                <Route path="/notfound" element={<Notfound/>}/>             
                <Route path="/search/:search" element={<Buscar/>}/>
                <Route path="/New" element={<New/>}/>
                <Route path="/ErrorServer" element={<ErrorServer/>}/> 
                <Route path="/edit/:id" element={<EditPokemon/>}/> 
            </Routes>
        
        </Router>
    )
    
}
export default App