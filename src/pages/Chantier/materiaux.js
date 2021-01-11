import React from 'react';



class Materiaux extends React.Component {
	AddMaterial = (props) => {
		this.props.AddMaterial(props);
		
	}
	NewMaterial = (props) => {
		
			this.props.NewMaterial(props);
		
	}
	CalculateTotal = (props) => {
		this.props.CalculateTotal(props);
		
	}
		EditingMat = (props) => {
		
		this.props.EditingMat(props);
		
	}
	
	constructor(props){
		super(props);
		this.editList = this.editList.bind(this);
		this.state = {
			id: 0,
			intitule: '',
			fournisseur: '',
			montant_unite: '',
			quantite: '',
			error: '',
			error2 : ''
		};
		
	}
		editList(list){
		return list.map( item => {
			var temp = Object.assign({}, item);
			if(temp.id === this.props.currentId){
				temp.intitule = this.state.intitule;
				temp.fournisseur = this.state.fournisseur;
				temp.montant_unite = this.state.montant_unite;
				temp.quantite = this.state.quantite;
				
			}
			return temp;
		});
		
		
	}
	submitHandler = (event) => {
		event.preventDefault();
		var matos = this.props.matlist;
		let idnumber = matos.length;
		console.log("id number is : " + idnumber);
		if(this.props.mod2 === false){
		matos.push( {
			id : idnumber,
			intitule: this.state.intitule,
			fournisseur: this.state.fournisseur,
			montant_unite: this.state.montant_unite,
			quantite: this.state.quantite
			
		});
		}else{
			
			matos = this.editList(matos);
			
		}
		let tempo = this.props.total; 
		tempo += this.state.montant_unite * this.state.quantite;
		this.CalculateTotal(tempo);
		console.log(matos);
		this.AddMaterial(matos);
		this.NewMaterial(false);
		this.EditingMat(false);
		
	}
	
		changeHandler = (event) => {
		let nam = event.target.name;
		let val = event.target.value;
		let err = '';
		let err2 = '';
		if(nam === "montant_unite"){
			if( val !== "" && !Number(val)){
				err = <strong>It must be a number </strong>
			}
			
		}
			if( nam === "quantite" ){
			if( val !== "" && !Number(val)){
				err2 = <strong>It must be a number </strong>
			}
			
		}
		this.setState({[nam]: val});
		this.setState({error: err});
		this.setState({error2: err2});
		
	}
	
	
		render() {
		console.log("value of bool " + this.props.bool);
		if(this.props.bool === true && this.props.next === true) {
		return (
		<div>
		
		<form onSubmit = {this.submitHandler}>
		<p>
			Intitulé : <input type="text" name='intitule' onChange={this.changeHandler}/> <br /> <br /> 
			Fournisseur :  <input type="text" name='fournisseur' onChange={this.changeHandler}/> <br /> <br /> 
			Montant/Unite :  <input type="text" name='montant_unite' onChange={this.changeHandler}/> <br /> {this.state.error}<br /> 
			Quantite :  <input type="text" name='quantite' onChange={this.changeHandler}/> {this.state.error2}
		</p>
		<input type='submit' />
		</form>
		</div>
		);
		}else{
			
			return <div></div>
			
		}
		
		
		
	}
	
	
	
	
}
export default Materiaux;