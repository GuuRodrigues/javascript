//import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/helloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/pessoa';
import List from './components/list';

function App() {  

  const nome = 'Djully'

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <HelloWorld />
      <SayMyName nome='Augusto'/>
      <SayMyName nome ={nome}/>
      <Pessoa nome="Augusto" idade="19" profissao="Programador" foto="https://via.placeholder.com/150"/>
      <List />
    </div>
  );
}

export default App;
