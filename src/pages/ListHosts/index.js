import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { useCurrentPage } from '../../hooks/CurrentPage';

import Grid from '../../components/Grid';

function ListHosts() {
  const { currentPage } = useCurrentPage();
  const [count, setCount] = useState();
  const [hosts, setHosts] = useState(() => {
    const storedHosts = localStorage.getItem('@HostsExplorer:hosts');
    if (storedHosts != null) {
      return JSON.parse(storedHosts);
    }
    return [];
  });

  useEffect(() => {
    async function loadHosts() {
      const config = {
        headers: {
          Authorization: 'Token 7b1f9d46707352594bab9e07ae7ec5daaff7f1c2',
        },
      };
      const response = await api.get(
        `http://167.114.135.109/api/assets/?page=${currentPage}&page_size=9`,
        config
      );
      setHosts(response.data.results);
      setCount(response.data.count);
    }
    loadHosts();
  }, [currentPage]);

  useEffect(() => {
    localStorage.setItem('@HostsExplorer:hosts', JSON.stringify(hosts));
  }, [hosts]);

  return (
    <Grid
      fields={['Id', 'Nome', 'IP Adress', 'Risco', 'Nº Vuln. não corrigidas']}
      list={hosts}
      count={count}
      arrayKey={['id', 'hostname', 'ip_address', 'risk', 'vuln_count']}
    />
  );
}

export default ListHosts;
