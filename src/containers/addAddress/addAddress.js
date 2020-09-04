import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import AddressForm from '../../components/addressForm/AddressForm';

const AddAddress = props => {
  const { submitAddress } = props;
  const [address, setAddress] = useState(props.address);

  const updateAddressField = event => {
    event.preventDefault();
    setAddress({ ...address, [event.target.name]: event.target.value });
  };

  return (
    <>
      <h1>Add new address</h1>
      <AddressForm
        address={address}
        updated={e => updateAddressField(e)}
        submitted={address => submitAddress(address)}
      />
    </>
  );
};

const mapStateToProps = state => {
  return {
    address: state.add.currentAddress,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitAddress: address => actions.addAddress(address),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddAddress);
