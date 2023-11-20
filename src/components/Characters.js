import React from 'react'

export default function Characters(props) {
  const { characters, setCharacters } = props;
  const resetCharacter = () => {
    setCharacters(null)
  }


  return (
    <div className='characters'>
        <h1>Personajes</h1>
        <span className='back-home' onClick={resetCharacter}>Volver a la home</span>
        <div className='container-characters'>
            {characters.map((character, index) => (
                <div className="character-container" key={index}>
                    <div>
                        <img src={character.image} alt={character.name}></img>
                    </div>
                    <div>
                       <h3>{character.name}</h3>
                       <h6>
                            {character.status === "Alive" ? (
                                <>
                                <span className='alive'></span>
                                Alive
                                </>
                            ) : (
                                <>
                                <span className='dead'></span>
                                Dead
                                </>
                            )}
                       </h6>
                       <p className='text-grey'><span>Episodios: </span></p>
                       <span>{character.episode.length}</span>
                       <p>
                        <span className='text-grey'>Especie: </span>
                        <span>{character.species}</span>
                       </p>
                    </div>
                </div>
            ))}
        </div>
        <span className='back-home' onClick={resetCharacter}>Volver a la home</span>    
    </div>

  )
}
