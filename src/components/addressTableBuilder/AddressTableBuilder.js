import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '../../components/button/Button';
import './AddressTableBuilder.scss';

const AddressTableBuilder = props => {
  let addressesTable = (
    <div className='addresses__empty-message'>No addresses available</div>
  );

  if (props.addresses && props.addresses.length > 0) {
    addressesTable = (
      <table className='addresses__table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.addresses.map(address => {
            return (
              <tr key={address.id}>
                <td>{address.name}</td>
                <td>{address.address}</td>
                <td>{address.latitude}</td>
                <td>{address.longitude}</td>
                <td>
                  <Button
                    clicked={props.deleted.bind(this, address.id)}
                    messageType='warning'
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  return <>{addressesTable}</>;
};

AddressTableBuilder.propTypes = {
  addresses: PropTypes.array,
  deleted: PropTypes.func,
};

AddressTableBuilder.defaultProps = {
  addresses: [],
};

const mapStateToProps = state => {
  return {
    addresses: state.add.addresses,
  };
};

export default connect(mapStateToProps)(AddressTableBuilder);
