import React, {Component} from 'react';
import './Hello.css';


class Hello extends Component {
	render(){
		return (
			<div className='t1 tc'>

			<h2>  Hello dado </h2>
			<p> Primeiro exercico no Reat  {this.props.saudacao} </p>

</div>
			);
		
	}
}

export default Hello;