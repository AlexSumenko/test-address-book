import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import Button from '../../components/button/Button';

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
        <label className='add-new-address__form--label'>Address Name:</label>
        <input
          className='add-new-address__form--input'
          type='text'
          value={address.name}
          name='name'
          onChange={updateAddressField}
          placeholder='Please enter address naming'
          required
        />
        <label className='add-new-address__form--label'>Address:</label>
        <input
          className='add-new-address__form--input'
          type='text'
          value={address.address}
          name='address'
          onChange={updateAddressField}
          placeholder='Please enter actual address'
          required
        />
        <label className='add-new-address__form--label'>Latitude:</label>
        <input
          className='add-new-address__form--input'
          type='number'
          value={address.latitude}
          name='latitude'
          onChange={updateAddressField}
          placeholder='Please enter latitude'
          required
        />
        <label className='add-new-address__form--label'>Longitude:</label>
        <input
          className='add-new-address__form--input'
          type='number'
          value={address.longitude}
          name='longitude'
          onChange={updateAddressField}
          placeholder='Please enter longitude'
          required
        />
        <Button
          messageType='info'
          type='button'
          clicked={submitAddress(address)}
        >
          Submit
        </Button>
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
