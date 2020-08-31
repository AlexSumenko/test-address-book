import React from 'react';
import NavBar from './components/navbar/NavBar';
import AddressList from './containers/address-list/AddressList';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <AddressList />
    </div>
  );
}

export default App;
