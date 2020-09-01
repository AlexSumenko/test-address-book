import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/button/Button';
import './AddressTableBuilder.scss';

const AddressTableBuilder = props => {
  const [addresses, setAddresses] = useState(null);

  let addressesTable = (
    <div className='addresses__empty-message'>No addresses available</div>
  );

  addressesTable = (
    <table className='addresses__table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>
            <Button messageType='warning'>Delete</Button>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>
            <Button messageType='warning'>Delete</Button>
          </td>
        </tr>
      </tbody>
    </table>
  );

  return <>{addressesTable}</>;
};

// AddressTableBuilder.propTypes = {
//   addresses: PropTypes.array,
// };

// AddressTableBuilder.defaultProps = {
//   addresses: [],
// };

export default AddressTableBuilder;
