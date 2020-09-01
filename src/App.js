import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './components/navBar/NavBar';
import AddressList from './containers/addressList/AddressList';
import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route path='/' component={AddressList}></Route>
      </Switch>
    </div>
  );
};

export default App;
