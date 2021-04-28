import React, {Component } from 'react';
import Army from './withArm';

function Rahul(props) {
  return (
    <div>
      <h1>Rahul belong to {props.camp}</h1>
      <h2>Machine Used: {props.hocgunname}</h2>
      <h3 onMouseOver={props.hochandleGunshots}>Rahul Gunshots: {props.hocgunshots}</h3>
    </div>
  );
}

export default Army(Rahul, 10);