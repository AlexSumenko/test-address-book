import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import './addAddress.scss';

const AddAddress = props => {
  const { submitAddress } = props;

  const [address, setAddress] = useState({
    name: '',
    address: '',
    latitude: 0,
    longitude: 0,
  });

  const updateAddressField = event => {
    event.preventDefault();
    setAddress({ ...address, [event.target.name]: event.target.value });
  };

  return (
    <>
      <h1>Add new address</h1>
      <form className='add-new-address__form'>
        <label>Address Name:</label>
        <input
          type='text'
          value={address.name}
          name='name'
          onChange={updateAddressField}
          placeholder='Please enter address naming'
          required
        />
        <label>Address:</label>
        <input
          type='text'
          value={address.address}
          name='address'
          onChange={updateAddressField}
          placeholder='Please enter actual address'
          required
        />
        <label>Latitude</label>
        <input
          type='number'
          value={address.latitude}
          name='latitude'
          onChange={updateAddressField}
          placeholder='Please enter latitude'
          required
        />
        <label>Longitude:</label>
        <input
          type='number'
          value={address.longitude}
          name='longitude'
          onChange={updateAddressField}
          placeholder='Please enter longitude'
          required
        />
        <button type='button' onClick={submitAddress(address)}>
          Submit
        </button>
      </form>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    submitAddress: address => actions.addAddress(address),
  };
};

export default connect(null, mapDispatchToProps)(AddAddress);
