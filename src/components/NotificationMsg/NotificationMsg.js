import React from 'react';
import PropTypes from 'prop-types';

const NotificationMsg = ({ msg }) => (
  <>
    <p>{msg}</p>
  </>
);

Notification.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default NotificationMsg;
