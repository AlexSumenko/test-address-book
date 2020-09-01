import React from 'react';
import NavBar from './components/navBar/NavBar';
import AddressList from './containers/addressList/AddressList';
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
