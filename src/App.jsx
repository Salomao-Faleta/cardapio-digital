import { useState } from 'react';
import './App.css';
import Restaurante from './assets/hashtaurante.webp'
import { Navegacao } from './components/navegacao';
import { ItemCardapio } from './components/ItemCardapio';
import { pratosPrincipais, sobremesas, bebidas } from './cardapio';

//variavel de controle


function App() {
    const paginasMenu = [pratosPrincipais, sobremesas, bebidas]
    const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);

    return(
        <>
            <img src={Restaurante} alt="Foto do local" className='capa'/>
            <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}/>
            
            <div className='menu'>
                {paginasMenu[paginaSelecionada].map(item => 
                <ItemCardapio 
                    nome={item.nome} 
                    descricao={item.descricao} 
                    preco={item.preco}  
                    imagem={item.imagem}  
                />)}
            </div>
        </>
    );
}

export default App;