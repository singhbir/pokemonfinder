import React , {useState,useEffect}from 'react';
import  {getAllPokemon,getPokemon}  from './service/pokemon';
import MyCard from './Components/Card'
import MyNav from './Components/nav'
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom'
import './App.css';

function MainComponent() {
  const [pokemonData,setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState(' ');
  const [preUrl,setPreUrl] = useState(' ');
  const [loading,setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {

    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      console.log(response);
      setNextUrl(response.next);
      setPreUrl(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData(); 
  },[])

  const loadingPokemon = async (data) => {
        let  _pokemonData = await Promise.all(
          data.map(async pokemon => {
            let pokemonRecord = await getPokemon(pokemon.url);
            return pokemonRecord
          })
        )
        setPokemonData(_pokemonData);
  }

  const next = async ()  => {
    setLoading(true)
    let response = await getAllPokemon(nextUrl);
    //console.log(response);
    setNextUrl(response.next);
    setPreUrl(response.previous);
    await loadingPokemon(response.results);
    setLoading(false);
  }
  const prev = async () => {
    if (!preUrl) {
      return 
    }
    setLoading(true)
    let response = await getAllPokemon(preUrl);
    //console.log(response);
    setNextUrl(response.next);
    setPreUrl(response.previous);
    await loadingPokemon(response.results);
    setLoading(false);
  }

  return (
    <div className="App">
        {loading ? 
           <div>Loading ...</div> :(
           <div>
                
                <MyNav/>
                  <div className="btns">
                    <Button className="gbtn" onClick={prev}>Prev</Button>
                    <Button className="gbtn1" onClick={next}>Next</Button> 
                  </div>
                
                {pokemonData.map((pokemon) => {
                    return <Link to = {`/pokemons/${pokemon.id}`}  key = {pokemon.id} style={{ textDecoration: 'none' }}> <MyCard key = {pokemon.id} pokemon = {pokemon}/></Link>
                })}


           </div>
           )}
    </div>
  );
}

export default MainComponent;
