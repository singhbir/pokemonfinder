import React , {useState,useEffect} from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle,CardSubtitle
  } from 'reactstrap';
 import { getAllPokemon } from '../service/pokemon' 
import './detail.css'




export default function DetailCard({match}) {

  const [pokeData,setPokeData] = useState({ })
  const [loading , setLoading] = useState(true)
  let initialUrl = `https://pokeapi.co/api/v2/pokemon/${match.params.id}`
  
  useEffect(() => {
    
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      setPokeData(response);
      setLoading(false);
    }
  
    fetchData(); 
   
  },[])
  
 
 

  return (
  <>
  {loading ? <div>loading .... </div>: 
        <Card className="detailcard">
          <div className = "imgdiv">
            <CardImg className="pokeimg" src={pokeData.sprites.front_default} alt="Card image cap" />
            </div>
            
                <CardBody>
                      <CardTitle className="pokename">{pokeData.name}</CardTitle>
                      <div className = "info">
                      <CardSubtitle className="weight">ID  {pokeData.id}</CardSubtitle>
                      <CardSubtitle className="weight">Height  {pokeData.height}</CardSubtitle>
                      <CardSubtitle className="weight">Weight  {pokeData.weight}</CardSubtitle>
                      </div>

                      
                </CardBody>
        </Card>
}
  </>
  )
}