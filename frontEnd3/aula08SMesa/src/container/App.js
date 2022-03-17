import { useState } from "react";

const data = [
  {
    id: "1",
    nome: "Brócolis",
    imagem: "http://www.infoescola.com/wp-content/uploads/2010/08/brocolis.jpg"
  },
  {
    id: "2",
    nome: "Tomate",
    imagem:
      "https://www.infoescola.com/wp-content/uploads/2011/01/tomate_345187874.jpg"
  },
  {
    id: "3",
    nome: "Melancia",
    imagem:
      "http://missaomulheresdoagro.com.br/wp-content/uploads/2020/11/melancia-doce-isolada_253984-4202.jpg"
  },
  {
    id: "4",
    nome: "Maçã",
    imagem:
      "https://www.mundoecologia.com.br/wp-content/uploads/2019/03/Ma%C3%A7%C3%A3-Gala-4.jpg"
  },
];

function App() {
  const [products, setProducts] = useState(data);

  function removeItem(id) {
    const temp = products.filter((product) => product.id !== id);
    setProducts(temp);
  }

  return (
    <div>
      <button onClick={() => {setProducts(data)}}>Restaurar</button>
      <ul>
        {
          products.map((product) => (
            <li onClick={() => removeItem(product.id)}>
              <p>{product.nome}</p>
              <img width="200" src={product.imagem} />
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
