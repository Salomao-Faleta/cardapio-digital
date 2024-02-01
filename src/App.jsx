import Restaurante from './assets/hashtaurante.webp'
import './App.css';
import { Navegacao } from './components/navegacao';

function App() {
    return(
        <div>
            <img src={Restaurante} alt="Foto do local" className='capa'/>
            <Navegacao/>
        </div>
    );
}

export default App;