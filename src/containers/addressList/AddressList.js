import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import AddressesTableBuilder from '../../components/addressTableBuilder/AddressTableBuilder';
import './AddressList.scss';

const AddressList = props => {
  const { setAddresses, removeAddress } = props;

  useEffect(() => {
    setAddresses();
  }, [setAddresses]);

  return (
    <>
      <h1 className='addresses__header'>List of addresses</h1>
      <div className='addresses'>
        <AddressesTableBuilder
          deleted={addressId => removeAddress(addressId)}
        />
      </div>
    </>
  );
};

const dispatchStateToProps = dispatch => {
  return {
    setAddresses: () => dispatch(actions.saveAddresses()),
    removeAddress: addressId => dispatch(actions.deleteAddress(addressId)),
  };
};

export default connect(null, dispatchStateToProps)(AddressList);
