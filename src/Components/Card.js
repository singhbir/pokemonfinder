import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle
  } from 'reactstrap';

import './mycard.css';

export default function MyCard({pokemon}) {
  return (
  <>
      <Card className="abc animated fadeInUp">
        <CardImg className="cardimg" src={pokemon.sprites.front_default} alt="Card image cap" />
        <CardBody>
            <CardTitle>{pokemon.name}</CardTitle>
        </CardBody>
      </Card>
  </>
  )
}