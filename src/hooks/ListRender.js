import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';
import api from '../services/api';

import { useCurrentPage } from './CurrentPage';

const ListRenderContext = createContext();

export const ListRenderProvider = ({ children }) => {
  const [order, setOrder] = useState();
  const [plus, setPlus] = useState(true);
  const [count, setCount] = useState();
  const { currentPage } = useCurrentPage();
  const [list, setList] = useState(() => {
    const storedList = localStorage.getItem('@ListExplorer:list');
    if (storedList != null) {
      return JSON.parse(storedList);
    }
    return [];
  });
  useEffect(() => {
    localStorage.setItem('@ListExplorer:list', JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    async function loadVulnerabilities() {
      const config = {
        headers: {
          Authorization: 'Token 7b1f9d46707352594bab9e07ae7ec5daaff7f1c2',
        },
      };
      const response = await api.get(
        `http://167.114.135.109/api/vulnerabilities/?page=${currentPage}&page_size=9`,
        config
      );
      console.log('aqui nomrla');
      setList(response.data.results);
      setCount(response.data.count);
    }
    loadVulnerabilities();
  }, [currentPage, order]);

  const loadOrder = useCallback((value) => {
    async function loadVulnerabilitiesOrder() {
      const config = {
        headers: {
          Authorization: 'Token 7b1f9d46707352594bab9e07ae7ec5daaff7f1c2',
        },
      };
      const response = await api.get(
        `http://167.114.135.109/api/vulnerabilities/?ordering=${[
          value,
        ]}&page_size=9`,
        config
      );
      console.log(list);
      console.log('--------------');
      console.log(response.data.results);
      console.log('--------------');

      setList(response.data.results);
      setCount(response.data.count);
      console.log(list);
    }
    loadVulnerabilitiesOrder();
  }, []);

  return (
    <ListRenderContext.Provider
      value={{
        loadOrder,
        setOrder,
        setPlus,
        count,
        list,
        plus,
      }}
    >
      {children}
    </ListRenderContext.Provider>
  );
};

export function useListRender() {
  const context = useContext(ListRenderContext);

  if (!context) {
    throw new Error('useCurrentPage must be used within a ListRenderProvider');
  }
  return context;
}
