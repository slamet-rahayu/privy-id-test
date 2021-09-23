import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const AlertContext = createContext();

function AlertProvider({ children }) {
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');
  const [hide, setHide] = useState(false);

  const showAlert = ({ alertType, alertMessage, autoHide }) => {
    setVisible(true);
    setType(alertType);
    setMessage(alertMessage);
    if (autoHide) {
      setHide(true);
    }
  };

  const hideAlert = () => {
    showAlert(false);
    setType(null);
    setMessage(null);
    setHide(false);
  };

  useEffect(() => {
    if (visible && hide) {
      setTimeout(() => {
        setVisible(false);
      }, 3000);
    }
  }, [visible, hide]);

  const value = { showAlert, hideAlert, visible, type, message };

  return (
    <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
  );
}

const alertContext = { AlertContext, AlertProvider };

AlertProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default alertContext;
