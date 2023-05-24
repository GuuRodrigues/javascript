//import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/helloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/pessoa';
import List from './components/list';
import Evento from './components/evento';
import Form from './components/form';

function App() {  

  const nome = 'Djully'

  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento />
      <Form />
    </div>
  );
}

export default App;
