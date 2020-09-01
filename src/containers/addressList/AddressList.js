import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import AddressesTableBuilder from '../../components/addressTableBuilder/AddressTableBuilder';
import './AddressList.scss';

const AddressList = props => {
  const { setAddresses } = props;

  useEffect(() => {
    setAddresses();
  }, [setAddresses]);

  return (
    <>
      <h1 className='addresses__header'>List of addresses</h1>
      <div className='addresses'>
        <AddressesTableBuilder />
      </div>
    </>
  );
};

const dispatchStateToProps = dispatch => {
  return {
    setAddresses: () => dispatch(actions.saveAddresses()),
  };
};

export default connect(null, dispatchStateToProps)(AddressList);
