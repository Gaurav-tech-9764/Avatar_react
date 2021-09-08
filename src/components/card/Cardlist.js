import React from 'react';
import Card from './Card';
import './card-list.styles.css';


const Cardlist = props => {



return(


    <div className='card-list'>{
        props.avatar.map(avatar =>
        <Card key={avatar.id} avatar={avatar}/>)

      }</div>
)

}

export default Cardlist