import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import {Dashboard, DashboardOne, DashboardTwo, DashboardThree} from './pages/Dashboard'
import Equipe from './pages/Equipe'
import Chantier from './pages/Chantier/Chantier'
import Contacter from './pages/Contacter'
import Support from './pages/Support'
import Connexion from './pages/Connexion'
import Inscription from './pages/Inscription';


function App() {
  return (
	
    <Router>
			
          <Sidebar />
		  
          <Switch>
          <Route path='/accueil' exact component={Accueil}/>
          <Route path='/dashboard' exact component={Dashboard}/>
          <Route path='/dashboard/dashboard1' exact component={DashboardOne}/>
          <Route path='/dashboard/dashboard2' exact component={DashboardTwo}/>
          <Route path='/dashboard/dashboard3' exact component={DashboardThree}/>  
          <Route path='/equipe' exact component={Equipe}/>    
          <Route path='/chantier' exact component={Chantier}/> 
          <Route path='/contacter' exact component={Contacter}/> 
          <Route path='/support' exact component={Support}/>  
          <Route path='/connexion' exact component={Connexion}/>
          <Route path='/inscription' exact component={Inscription}/>
          </Switch>
		 <h1 style={{justifyContent:'center', color:'black',marginLeft:560 ,marginTop:100}}>Test Page d'acceuil</h1>
		

    </Router>
  
  );
}

export default App;
