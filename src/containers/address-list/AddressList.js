import React, { useState, useEffect } from 'react';
import { getData } from '../../utils/fetch';
import Button from '../../components/button/Button';
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
                <Button messageType='info'>Delete</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AddressList;
