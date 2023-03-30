import React from 'react';
import './TextBox.css';

const TextBox = ({searchfield, textalterado}) =>{

	return (
		<div  className='tc pa2'>
		<h4 className='f4'> Primeira App React - Robos </h4>
			<input 
			className='dib br3 pa3 ma2 grow bw2 shadow-5' 
			type='search' 
			placeholder ='Encontre o Robo'
			onChange={textalterado} />

		</div>
		);
}

export default TextBox; 