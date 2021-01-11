import React, {Component} from 'react';

// import './Chantier.css';
import Sentry from './Sentry';
import Equip from './equip';
import Materiaux from './materiaux';
import 'bootstrap/dist/css/bootstrap.min.css';

class Chantier extends Component {
	constructor(props){
		super(props);
		this.EditingMat = this.EditingMat.bind(this);
		this.EditingEquip = this.EditingEquip.bind(this);
		this.EditingId = this.EditingId.bind(this);
		this.AddItem = this.AddItem.bind(this);
		this.AddMaterial = this.AddMaterial.bind(this);
		this.NewEquip = this.NewEquip.bind(this);
		this.NewMaterial = this.NewMaterial.bind(this);
		this.DidWePressNext = this.DidWePressNext.bind(this);
		this.CalculateTotal = this.CalculateTotal.bind(this);
		let itemList = [];
		let materialList = [];
		let newValue = false;
		let matValue = false;
		let nextButton = false;
		let mod = false;
		let mod2 = false;
		let currentId = 0;
		let total = 0;
		this.state = { itemList,
						newValue,
						materialList,
						nextButton,
						matValue,
						total,
						mod,
						currentId,
						mod2
						};

	}		
	AddItem(props){
		alert("u did push");
		this.setState({itemList: props})		
		
		console.log(this.state.itemList);
		
		
	}
	AddMaterial(props){
		alert("u push material");
		this.setState({materialList: props})
		

	}		
	NewEquip(props){
		this.setState({newValue: props})
		
		console.log(props);


	}
	NewMaterial(props){
		this.setState({matValue: props})
		
		
	}
	CalculateTotal(props){
		this.setState({total: props})
		
		
	}
	DidWePressNext(props){
		
		this.setState({nextButton: props})
		console.log("next : "+props);
		
	}
	EditingEquip(props){
		
		this.setState({mod:props})
		
		
	}
	EditingMat(props){
		
		this.setState({mod2:props});
		
	}
	EditingId(props){
		this.setState({currentId:props})
		
	}
	
	
	componentDidMount(){
		this.interval = setInterval(() => {
			this.setState({itemList: this.state.itemList,
							newValue:this.state.newValue,
							materialList:this.state.materialList,
							nextButton:this.state.nextButton,
							matValue:this.state.matValue,
							total:this.state.total,
							mod:this.state.mod,
							currentId:this.state.currentId,
							mod2:this.state.mod2
						})
		}, 1000)
		console.log("kiss n tell");	
		
		
	}
	
	componentWillUnmount() {
			clearInterval(this.interval);
	}
	
	render() {
		console.log("test");
		
		return (
			<div className="Chantier">
				<h1>Batismart</h1>
				<Equip EditingId={this.EditingId} EditingEquip={this.EditingEquip} CalculateTotal={this.CalculateTotal} AddItem={this.AddItem} NewEquip={this.NewEquip} a={this.state.itemList} bool={this.state.newValue} total={this.state.total}  mod={this.state.mod} currentId={this.state.currentId}/>
				<Materiaux EditingId={this.EditingId} EditingMat={this.EditingMat} CalculateTotal={this.CalculateTotal} AddMaterial={this.AddMaterial} NewMaterial={this.NewMaterial} matlist={this.state.materialList} bool={this.state.matValue} next={this.state.nextButton} total={this.state.total} mod2={this.state.mod2}  currentId={this.state.currentId}/>
                <Sentry CalculateTotal={this.CalculateTotal} EditingId={this.EditingId} EditingMat={this.EditingMat} EditingEquip={this.EditingEquip} DidWePressNext={this.DidWePressNext} total={this.state.total} NewEquip={this.NewEquip} NewMaterial={this.NewMaterial} matList={this.state.materialList} somProp={this.state.itemList} bool={this.state.newValue} bool2={this.state.matValue} nextButton={this.state.nextButton}/>
				
				
					
				
			</div>
		);
		
	}
}
export default Chantier;
