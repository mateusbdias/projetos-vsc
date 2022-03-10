import ClassComponent from "../components/ClassComponent";
import FunctionComponent from "../components/FunctionComponent";

const list = [
  {
    id:'1',
    nome:'Nicolas',
    estaNaLista:true,
    tarefa:'batata frita'
  },
  {
    id:'2',
    nome:'Pedro',
    estaNaLista:false,
    tarefa:'pizza'
  },
  {
    id:'3',
    nome:'Carolina',
    estaNaLista:true,
    tarefa:'bebidas'
  }
]

function App() {
  return (
    <div className="App">
      <h3>Convidados:</h3>
      {
        list.map((item) => <ClassComponent key={item.id} nome={item.nome} estaNaLista={item.estaNaLista} />)
      }
      <h3>Tarefa:</h3>
      {
        list.map((item) => <FunctionComponent key={item.id} nome={item.nome} tarefa={item.tarefa} />)
      }
    </div>
  );
}

export default App;
