import React from 'react';
import { CurrentPageProvider } from './CurrentPage';
import { ListRenderProvider } from './ListRender';
// import { OrderProvider } from './Order';

export const AppProvider = ({ children }) => {
  return (
    <CurrentPageProvider>
      <ListRenderProvider>
        {/* <OrderProvider> */}
        {children}
        {/* </OrderProvider> */}
      </ListRenderProvider>
    </CurrentPageProvider>
  );
};
