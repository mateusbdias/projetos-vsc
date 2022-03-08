export default function Cachorro(props) {
    console.log(props);
    
    return (
        <ul>
            <h2>Nome: {props.item.nome}</h2>
            <li>Idade: {props.item.idade}</li>
            <li>Sexo: {props.item.sexo}</li>
            <li>Tamanho: {props.item.tam}</li>
        </ul>
    );
}