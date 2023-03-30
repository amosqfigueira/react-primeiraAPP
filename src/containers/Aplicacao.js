import React, {Component} from 'react';
import CardList from '../components/CardList';
import TextBox from '../components/TextBox';
import Scroll from '../components/Scroll';
//import {robos} from './robos';



class  Aplicacao extends Component{

	constructor(){
		super()
		this.state = {
			robos:[], //robos como variavel para retornar valores do json 
			textopesquisa:''
		}

	}


Ontextboxalterado = (event) =>{

	this.setState({textopesquisa: event.target.value})

	

}

componentDidMount(){ // life cycle carrega depois do construtor e do render

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => this.setState({robos: users}));

}


render(){

const {robos, textopesquisa} = this.state;
	const robosFiltrados = robos.filter( robo => {
		//return robos.nome.toLowerCase().includes(this.state.textopesquisa.toLowerCase()) // lista estatica 
		return robo.name.toLowerCase().includes(textopesquisa.toLowerCase()) // lista dinamica
	})

  // mesmo que fizer robos.length ===0

	return !robos.length ? (

		<div>
		<TextBox   textalterado={this.Ontextboxalterado} />
		<h1> Carregando os Robos</h1> 
		</div>):
		(
				<div >

				
				<TextBox   textalterado={this.Ontextboxalterado} />
				<Scroll>
				<CardList robos={robosFiltrados} />
				
				</Scroll>
				</div>
		);
	

}

}



export default Aplicacao;