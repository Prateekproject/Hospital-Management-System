import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateOutPatientComponent from './components/CreateOutPatientComponent';
import CreateInPatientComponent from './components/CreateInPatientComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/patient_details" component = {CreateOutPatientComponent}></Route>
                          <Route path = "/inpatient_deatails" component = {CreateInPatientComponent}></Route>
                    </Switch>
                </div>
                <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
