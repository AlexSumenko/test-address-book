import React, { useState, useEffect } from 'react';
import { getData } from '../../utils/fetch';

import AddressesTableBuilder from '../../components/address-table-builder/AddressTableBuilder';
import './AddressList.scss';

const AddressList = () => {
  const [addresses, setAddresses] = useState(null);

  useEffect(() => {
    getData('/addresses.json')
      .then(res => setAddresses(res))
      .catch(err => console.log(err));
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
