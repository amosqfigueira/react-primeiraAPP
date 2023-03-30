import React from 'react';
import Card from './Card';

const CardList = ({robos}) =>
{
	const cardArray = robos.map( (user,i) =>
	{
		return <Card 
		key ={i}
		id={robos[i].id} 
		nome ={robos[i].name}  
		email ={robos[i].email}  />
	})

	return (
		   <div>

			{
				// pode/se colocar toda info do array aqui iniciando do robos.map  dentro do javascript
				cardArray}
			</div>

		);
}

export default CardList;