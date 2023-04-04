import React, { useEffect } from 'react';
import AOS from './aos';

const AOSWrapper = ({ children }) => {
  useEffect(() => {
    AOS.refresh();
  }, [children]);

  return <div>{children}</div>;
};

export default AOSWrapper;