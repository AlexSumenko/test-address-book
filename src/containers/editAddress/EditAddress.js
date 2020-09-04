import React, { useState, useEffect } from 'react';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import { httpAddressRequest } from '../../utils/fetch';

import AddressForm from '../../components/addressForm/AddressForm';

const EditAddress = props => {
  const { updateAddress } = props;

  const [address, setAddress] = useState(props.address);

  useEffect(() => {
    httpAddressRequest(`/addresses/${props.match.params.id}.json`, 'GET')
      .then(res => setAddress(res))
      .catch(err => console.log(err));
  }, [props.match.params.id]);

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
        submitted={address => updateAddress(address, props.match.params.id)}
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
    updateAddress: (address, id) => actions.editAddress(address, id),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditAddress);
