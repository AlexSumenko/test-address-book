import React, { useState, useEffect } from 'react';
import { getData } from '../../utils/fetch';

import AddressesTableBuilder from '../../components/addressTableBuilder/AddressTableBuilder';
import './AddressList.scss';

const AddressList = () => {
  const [addresses, setAddresses] = useState(null);

  useEffect(() => {
    console.log('addresses:', addresses);
  }, []);

  return (
    <>
      <h1 className='addresses__header'>List of addresses</h1>
      <div className='addresses'>
        <AddressesTableBuilder addresses={addresses} />
      </div>
    </>
  );
};

export default AddressList;
