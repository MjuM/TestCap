import React from 'react';


class Equip extends React.Component {
	AddItem = (props) => {
		this.props.AddItem(props);
		
	}
	EditingEquip = (props) => {
		
		this.props.EditingEquip(props);
		
	}
	CalculateTotal = (props) => {
		this.props.CalculateTotal(props);
		
	}
	NewEquip = (props) => {
		
			this.props.NewEquip(props);
		
	}
	constructor(props){
		super(props);
		this.editList = this.editList.bind(this);
		this.state = {
			id: 0,
			intitule: '',
			fournisseur: '',
			prix_par_jour: '',
			jour: '',
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
				temp.prix_par_jour = this.state.prix_par_jour;
				temp.jour = this.state.jour;
				
			}
			return temp;
		});
		
		
	}
	submitHandler = (event) => {
		event.preventDefault();
		var item = this.props.a;
		let idnumber = item.length;
		console.log("id number is : " + idnumber);
		if(this.props.mod === false){
		item.push( {
			id : idnumber,
			intitule: this.state.intitule,
			fournisseur: this.state.fournisseur,
			prix_par_jour: this.state.prix_par_jour,
			jour: this.state.jour
			
		});
		}else{
			
			item = this.editList(item);
			
			
			
		}
		let tempo = this.props.total;
		tempo += this.state.prix_par_jour * this.state.jour;
		this.CalculateTotal(tempo);
		console.log(item);
		this.AddItem(item);
		this.NewEquip(false);
		this.EditingEquip(false);
		
		
	}
	changeHandler = (event) => {
		let nam = event.target.name;
		let val = event.target.value;
		let err = '';
		let err2 = '';
		if(nam === "prix_par_jour"){
			if( val !== "" && !Number(val)){
				err = <strong>It must be a number </strong>
			}
			
		}
			if( nam === "jour" ){
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
		if(this.props.bool === true ) {
		return (
		<div>
		
		<form onSubmit = {this.submitHandler}>
		<p>
			Intitulé : <input type="text" name='intitule' onChange={this.changeHandler}/> <br /> <br /> 
			Fournisseur :  <input type="text" name='fournisseur' onChange={this.changeHandler}/> <br /> <br /> 
			Prix/Jour :  <input type="text" name='prix_par_jour' onChange={this.changeHandler}/> <br /> {this.state.error}<br /> 
	jour :  <input type="text" name='jour' onChange={this.changeHandler}/> {this.state.error2}
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

export default Equip;