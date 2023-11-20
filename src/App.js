import imagenRickMorty from './img/rick-morty-.webp'
import './App.css';
import {useState} from "react"
import Characters from './components/Characters';

function App() {

  const [characterts, setCharacters] = useState(null);
  const reqApi = async () =>{
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const characterApi = await api.json();

    setCharacters(characterApi.results)
    console.log(characterApi)
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1 className="title">Rick & Morty</h1>
      {characterts ? (
        <Characters characters={characterts} setCharacters={setCharacters}/>
      )  : (
        <>
        <img src ={imagenRickMorty} alt="Rick" className="img-home"></img>
        <button onClick={reqApi} className="btn-search">Buscar personajes</button>
        </>
      )}
      </header>
    </div>
  );
}

export default App;
