import React from 'react';

const Card = ({nome, email, id}) =>
{
	//const {nome, email, id} = props;
	return (
		<div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc '>

			<img  alt ='sera tu ' src={`https://robohash.org/${id}?10x10`} />

			<div>
				<h2> {nome}</h2>
				<p> {email} </p>
			</div>

		</div>



		);
}

export default Card;