import React from 'react';
import { CurrentPageProvider } from './CurrentPage';
// import { OrderProvider } from './Order';

export const AppProvider = ({ children }) => {
  return (
    <CurrentPageProvider>
      {/* <OrderProvider> */}
      {children}
      {/* </OrderProvider> */}
    </CurrentPageProvider>
  );
};
