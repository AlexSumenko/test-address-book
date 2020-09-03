import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import NavBar from './components/navBar/NavBar';
import AddressList from './containers/addressList/AddressList';
import AddAddress from './containers/addAddress/AddAddress';
import EditAddress from './containers/editAddress/EditAddress';
import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route path='/address/add' component={AddAddress} />
        <Route path='/address/:id/edit' component={EditAddress} />
        <Route path='/' exact component={AddressList} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default App;
