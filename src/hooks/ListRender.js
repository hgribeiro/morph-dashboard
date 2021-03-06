/* eslint-disable react/prop-types */
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';
import api from '../services/api';

// import { useCurrentPage } from './CurrentPage';

const ListRenderContext = createContext();

export const ListRenderProvider = ({ children }) => {
  const [order, setOrder] = useState();
  const [plus, setPlus] = useState(true);
  const [count, setCount] = useState();
  // const { currentPage } = useCurrentPage();
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

  const loadVul = useCallback((currentPage) => {
    async function loadVulnerabilities() {
      const config = {
        headers: {
          Authorization: 'Token 7b1f9d46707352594bab9e07ae7ec5daaff7f1c2',
        },
      };
      const response = await api.get(
        `http://167.114.135.109/api/vulnerabilities/?page=${currentPage}&page_size=10`,
        config
      );
      console.log('aqui nomrla');
      setList(response.data.results);
      setCount(response.data.count);
    }
    loadVulnerabilities();
  }, []);

  const loadOrder = useCallback((value, x) => {
    async function loadVulnerabilitiesOrder() {
      const config = {
        headers: {
          Authorization: 'Token 7b1f9d46707352594bab9e07ae7ec5daaff7f1c2',
        },
      };
      const response = await api.get(
        `http://167.114.135.109/api/vulnerabilities/?ordering=${[x]}${[
          value,
        ]}&page_size=10`,
        config
      );

      setList(response.data.results);
      setCount(response.data.count);
    }
    loadVulnerabilitiesOrder();
  }, []);

  const loadHos = useCallback((currentPage) => {
    async function loadHosts() {
      const config = {
        headers: {
          Authorization: 'Token 7b1f9d46707352594bab9e07ae7ec5daaff7f1c2',
        },
      };
      const response = await api.get(
        `http://167.114.135.109/api/assets/?page=${currentPage}&page_size=10`,
        config
      );
      setList(response.data.results);
      setCount(response.data.count);
    }
    loadHosts();
  }, []);

  const loadHostId = useCallback((id) => {
    async function loadHostPorId() {
      const config = {
        headers: {
          Authorization: 'Token 7b1f9d46707352594bab9e07ae7ec5daaff7f1c2',
        },
      };
      const response = await api.get(
        `http://167.114.135.109/api/vulnerabilities/?asset=${id}&page_size=10`,
        config
      );
      setList(response.data.results);
      setCount(response.data.count);
    }
    loadHostPorId();
  }, []);

  const loadVulId = useCallback((id) => {
    async function loadVulPorId() {
      const config = {
        headers: {
          Authorization: 'Token 7b1f9d46707352594bab9e07ae7ec5daaff7f1c2',
        },
      };
      const response = await api.get(
        `http://167.114.135.109/api/assets/?vulnerability=${id}&page_size=10`,
        config
      );
      setList(response.data.results);
      setCount(response.data.count);
    }
    loadVulPorId();
  }, []);

  return (
    <ListRenderContext.Provider
      value={{
        loadOrder,
        order,
        setOrder,
        setPlus,
        count,
        list,
        plus,
        loadVul,
        loadHos,
        loadHostId,
        loadVulId,
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
