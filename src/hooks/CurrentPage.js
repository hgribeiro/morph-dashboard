import React, { createContext, useState, useContext, useCallback } from 'react';

const CurrentPageContext = createContext();

export const CurrentPageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <CurrentPageContext.Provider
      value={{
        setCurrentPage,
        currentPage,
      }}
    >
      {children}
    </CurrentPageContext.Provider>
  );
};

export function useCurrentPage() {
  const context = useContext(CurrentPageContext);

  if (!context) {
    throw new Error('useCurrentPage must be used within a CurrentPageProvider');
  }
  return context;
}
