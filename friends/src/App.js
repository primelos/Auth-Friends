import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';

import FormList from './components/FormList'
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      
      
        
        <Header />
        {/* <Route exact path='/home' render={() => <Redirect to='/home' />} />
        <Route exact path='/' render={() => <Redirect to='/home' />} /> */}
        <Switch>
        <PrivateRoute exact path='/protected' component={FormList}></PrivateRoute>
        <Route  path='/login' component={Login} />  

        <Route component={Login}/>

        </Switch>
   

    </div>
  );
}

export default App;
