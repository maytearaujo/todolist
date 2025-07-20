import './App.css'
import Cabecalho from './components/Cabecalho/Cabecalho';
import Conteudo from './components/Conteudo/Conteudo';
import Rodape from './components/Rodape/Rodape';

const App = () => {
  return (
    <>
      <Cabecalho />
      <Conteudo>
        <h2>Título</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugiat, perferendis facere aliquam quasi officiis exercitationem cupiditate accusamus neque fugit animi sit qui quo ratione numquam ipsum porro ducimus! Odit.</p>
      </Conteudo>
      <Rodape />
    </>
  )
}

export default App

