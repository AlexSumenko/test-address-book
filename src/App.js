import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './components/navBar/NavBar';
import AddressList from './containers/addressList/AddressList';
import AddAddress from './containers/addAddress/addAddress';
import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route path='/add-address' component={AddAddress} />
        <Route path='/' exact component={AddressList} />
      </Switch>
    </div>
  );
};

export default App;
