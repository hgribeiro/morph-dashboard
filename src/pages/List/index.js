import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { useCurrentPage } from '../../hooks/CurrentPage';

import Grid from '../../components/Grid';
import Item from '../../components/Item';
import { Container, Footer } from './styles';

function List() {
  const { currentPage } = useCurrentPage();
  const [count, setCount] = useState();
  const [vulnerabilities, setVulnerabilities] = useState(() => {
    const storagedVulnerabilities = localStorage.getItem(
      '@VulnerabilitiesExplorer:vulnerabilities'
    );
    if (storagedVulnerabilities != null) {
      return JSON.parse(storagedVulnerabilities);
    }
    return [];
  });

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
      setVulnerabilities(response.data.results);
      setCount(response.data.count);
    }
    loadVulnerabilities();
  }, [currentPage]);

  useEffect(() => {
    localStorage.setItem(
      '@VulnerabilitiesExplorer:vulnerabilities',
      JSON.stringify(vulnerabilities)
    );
  }, [vulnerabilities]);

  return (
    <>
      <Grid
        fields={['Nome', 'Severidade', 'CVSS', 'Publicação', 'Hosts Afetados']}
        list={vulnerabilities}
        count={count}
        arrayKey={[
          'title',
          'severity',
          'cvss',
          'publication_date',
          'asset_count',
        ]}
      />
    </>
  );
}

export default List;
