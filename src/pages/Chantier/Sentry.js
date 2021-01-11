import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';
import './button.css';
class Sentry extends React.Component {
	
	EditingEquip = (props) => {
		
		this.props.EditingEquip(props);
		
	}
	EditingMat = (props) => {
		
		this.props.EditingMat(props);
		
	}
	EditingId = (props) => {
		
		this.props.EditingId(props);
		
	}
	NewEquip = (props) => {
		
			this.props.NewEquip(props);
		
	}
	DidWePressNext = (props) => {
			
			this.props.DidWePressNext(props);
	
	}
	NewMaterial = (props) => {
		
			this.props.NewMaterial(props);
		
	}
	
	CalculateTotal = (props) => {
		this.props.CalculateTotal(props);
		
	}
	
	constructor(props){
		super(props);
		this.equipModif = this.equipModif.bind(this);
		this.materModif = this.materModif.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.nextClick = this.nextClick.bind(this);
		this.handleClick2 = this.handleClick2.bind(this);
		this.handleClick4 = this.handleClick4.bind(this);
		this.handleClick3 = this.handleClick3.bind(this);
		this.state = {
			totval: false
		};
		
	}
	handleClick4(){
		this.setState({totval: true})
		
		
	}
	handleClick3(){
		this.setState({totval: false})
		this.DidWePressNext(false);	
		this.NewMaterial(false);
		this.NewEquip(false);
		
	}


		
	materModif(modif,price,day){
		let tempo = this.props.total;
		tempo -= price * day;
		this.CalculateTotal(tempo);
		this.EditingMat(true);
		this.EditingId(modif);
		this.setState({totval: false})
		this.NewMaterial(true);
		
		
	}
	equipModif(modif,price,day){
			let tempo = this.props.total;
			tempo -= price * day;
			this.CalculateTotal(tempo);
			this.EditingEquip(true);
			this.EditingId(modif);
			this.setState({totval: false})
			this.NewEquip(true);
		
		
	}
	handleClick2(){
		this.setState({totval: false})
		this.NewMaterial(true);
		
	}
	handleClick(){
		this.setState({totval: false})
		this.NewEquip(true);
	}
	nextClick() {
		this.setState({totval: false})
		if( this.props.somProp.length > 0){
		this.DidWePressNext(true);
		}else{
		this.DidWePressNext(false);	
			
		}
	}
	render() {
		console.log("test de fou" +this.props.somProp);
		let a = this.props.somProp;
	
		
		
		console.log("hein " + this.props.nextButton);
		if(this.props.nextButton === false ){
		
		console.log("shini " + a);
		if( a.length > 0 &&  this.props.bool === false  ){
	
		return (
			<div>
			<CardGroup style={{flexDirection: 'row', justifyContent: 'center' , padding: '40px', width: "90rem", left: '50px'}}>
			{a.map((data) => (
				<Card style={{width: '18em' , marginLeft: '10px'}} >
					 <Card.Header>Equipement {data.id + 1}</Card.Header>
					 <Card.Body>
						<Card.Text>
							<ul>
								 <li key = {data.id}>
									<p>Intitule : {data.intitule}</p>
									<p>Fournisseur : {data.fournisseur}</p>
									<p>Prix par jour : {data.prix_par_jour}</p>
									<p> Prix total : {data.jour *  data.prix_par_jour}</p>
									<Button variant="primary" type="button" onClick={() => this.equipModif(data.id,data.prix_par_jour,data.jour)}>Modifier</Button>
								</li>
							</ul>
						</Card.Text>
						
					</Card.Body>
				</Card>			
					 
							
			))}
			<Card style={{width: '18em' , marginLeft: '10px'}}>				
				<Card.Body>
					<Card.Title>Ajouter un equipement</Card.Title>
					<Card.Text>
								
					</Card.Text>
					<button type="button" class="btn btn-danger btn-circle btn-xl" onClick={this.handleClick}>+</button>
				</Card.Body>
			</Card>
			</CardGroup>
			 <Button variant="success" onClick={this.nextClick}>Next</Button>
			 </div>
				
		)
	
		}else if ( this.props.bool === false ){
			
			return (
				<div>
				<CardGroup style={{flexDirection: 'row', justifyContent: 'center' , padding: '40px', width: "90rem", left: '50px'}}>
				<Card style={{ width: '18rem' }}>				
				<Card.Body>
					<Card.Title>Ajouter un Equipement </Card.Title>
					<Card.Text>
								
					</Card.Text>
					<button type="button" class="btn btn-danger btn-circle btn-xl" onClick={this.handleClick}>+</button>
				</Card.Body>
			</Card>
			
			</CardGroup>
			 <Button variant="success" onClick={this.nextClick}>Next</Button>
			 </div>

				)
			
			
			
			
		}else if ( this.props.bool === true ){
			
			return <div>  </div>
			
		}
		
		}else{
			
			
			let a = this.props.matList;
			
			const isTotVal = this.state.totval;
			if( this.props.matList.length > 0 &&  this.props.bool2 === false  ){
	
		return (
			<div>
			<CardGroup style={{flexDirection: 'row', justifyContent: 'center' , padding: '40px', width: "90rem", left: '50px'}}>
			{a.map((data) => (
				<Card style={{width: '18em' , marginLeft: '10px'}} >
					 <Card.Header>Materiel {data.id + 1}</Card.Header>
					 <Card.Body>
						<Card.Text>
							<ul>
								 <li key = {data.id}>
									<p>Intitule : {data.intitule}</p>
									<p>Fournisseur : {data.fournisseur}</p>
									<p>Prix par unite : {data.montant_unite}</p>
									<p> Prix total : {data.quantite *  data.montant_unite}</p>
									<Button variant="primary" type="button" onClick={() => this.materModif(data.id,data.montant_unite,data.quantite)}>Modifier</Button>
								</li>
							</ul>
						</Card.Text>
						
					</Card.Body>
				</Card>			
					 
							
			))}
			<Card style={{width: '18em' , marginLeft: '10px'}}>				
				<Card.Body>
					<Card.Title>Ajouter un materiel</Card.Title>
					<Card.Text>
								
					</Card.Text>
					<button type="button" class="btn btn-danger btn-circle btn-xl" onClick={this.handleClick2}>+</button>
				</Card.Body>
			</Card>
			
			{isTotVal ? (
				<Card style={{width: '18em' , marginLeft: '10px'}}>
				
				<Card.Body>
					<Card.Title>Prix total du chantier actuel</Card.Title>
					<Card.Text>
							{this.props.total} €
					</Card.Text>
					
				</Card.Body>
				</Card>	
				
			) : ( <div></div> )}
				
				
				
			
			
				
				
			
			
			
			</CardGroup>

				<Button variant="danger" onClick={this.handleClick3}>previous</Button>
				<p></p>
				<Button variant="success" onClick={this.handleClick4} >Total</Button>
			

			 </div>
				
		)
	
		}else if ( this.props.bool2 === false ){
			
			return (
				<div>
				<CardGroup style={{flexDirection: 'row', justifyContent: 'center' , padding: '40px', width: "90rem", left: '50px'}}>
				<Card style={{ width: '18rem' }}>				
				<Card.Body>
					<Card.Title>Ajouter un Materiel</Card.Title>
					<Card.Text>
								
					</Card.Text>
					<button type="button" class="btn btn-danger btn-circle btn-xl" onClick={this.handleClick2}>+</button>
				</Card.Body>
			</Card>
			
			</CardGroup>

				<Button variant="danger" onClick={this.handleClick3} >previous</Button>
				<p></p>
				<Button variant="success" onClick={this.handleClick4} >Total</Button>

			

			 </div>

				)
			
			
			
			
		}else if ( this.props.bool2 === true ){
			
			return <div>  </div>
			
		}
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
		}
		
		
	}
	
	
}

export default Sentry;