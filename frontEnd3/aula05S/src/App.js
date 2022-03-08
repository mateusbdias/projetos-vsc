import Cachorro from "./Cachorro";

const data = [
  {
    nome: 'Spyke',
    idade: '2 meses',
    sexo: 'Macho',
    tam: 'P'
  },
  {
    nome: 'Marley',
    idade: '2 anos',
    sexo: 'Fêmea',
    tam: 'M'
  },
  {
    nome: 'Bob',
    idade: '4 anos',
    sexo: 'Macho',
    tam: 'G'
  },
  {
    nome: 'Caramelo',
    idade: '3 anos',
    sexo: 'Macho',
    tam: 'P'
  }
]

function App() {
  return (
    <div>
      <h1>Clientes caninos da veterinária:</h1>

      {data.map((item, index) => (<Cachorro key={index.toString()} item={item} />))}

      
    </div>
  );
}

export default App;
