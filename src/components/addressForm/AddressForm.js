import React from 'react';

import Button from '../button/Button';

import './AddressForm.scss';

const AddressForm = props => {
  return (
    <form className='add-new-address__form'>
      <label className='add-new-address__form--label'>Address Name:</label>
      <input
        className='add-new-address__form--input'
        type='text'
        value={props.address.name}
        name='name'
        onChange={props.updated}
        placeholder='Please enter address naming'
        required
      />
      <label className='add-new-address__form--label'>Address:</label>
      <input
        className='add-new-address__form--input'
        type='text'
        value={props.address.address}
        name='address'
        onChange={props.updated}
        placeholder='Please enter actual address'
        required
      />
      <label className='add-new-address__form--label'>Latitude:</label>
      <input
        className='add-new-address__form--input'
        type='number'
        value={props.address.latitude}
        name='latitude'
        onChange={props.updated}
        placeholder='Please enter latitude'
        required
      />
      <label className='add-new-address__form--label'>Longitude:</label>
      <input
        className='add-new-address__form--input'
        type='number'
        value={props.address.longitude}
        name='longitude'
        onChange={props.updated}
        placeholder='Please enter longitude'
        required
      />
      <Button
        messageType='info'
        type='button'
        clicked={props.submitted(props.address)}
      >
        Submit
      </Button>
    </form>
  );
};

export default AddressForm;
