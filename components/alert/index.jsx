import React, { useContext, useEffect, useState } from 'react';
import alertContext from '../../context/alert';

export default function Alert() {
  const [icon, setIcon] = useState('');
  const { visible, type, message } = useContext(alertContext.AlertContext);

  useEffect(() => {
    switch (type) {
      case 'error':
        setIcon('times-circle');
        break;
      case 'warning':
        setIcon('exclamation-circle');
        break;
      case 'success':
        setIcon('check-circle');
        break;
      default:
        setIcon('');
        break;
    }
  }, [type]);

  if (!visible) {
    return null;
  }

  return (
    <div className="alert mt-3">
      <i className={`fa fa-${icon} mr-2 alert-icon-${type}`} />
      <p className="alert-text">{message}</p>
      <button type="button" className="alert-btn-close">
        <img src="/times.png" alt="times" width="14" height="14" />
      </button>
    </div>
  );
}
