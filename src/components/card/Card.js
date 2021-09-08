import React from 'react';
import './card.styles.css'
const Card = (props) => {

    return(
<>
<div className='card-container'>
<img alt='Avatar' src={`https://robohash.org/${props.avatar.id}?set=set2&size=180x180`}/>
<h2>{props.avatar.name}</h2>
<p>{props.avatar.email}</p>
</div>

</>


    )


}

export default Card