import React, { useState, useEffect } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
// import api from '../../services/api';
import { useCurrentPage } from '../../hooks/CurrentPage';
import { useListRender } from '../../hooks/ListRender';

import Grid from '../../components/Grid';
// import Item from '../../components/Item';
import { PesquisarBar, OrderBar } from './styles';

function List() {
  const { loadOrder, order, plus, setPlus, loadVul } = useListRender();
  const { currentPage } = useCurrentPage();
  const [crescente, setCrescente] = useState('');
  // const [count, setCount] = useState();
  // const [order, setOrder] = useState();
  // const [plus, setPlus] = useState(true);
  // const [vulnerabilities, setVulnerabilities] = useState(() => {
  //   const storagedVulnerabilities = localStorage.getItem(
  //     '@VulnerabilitiesExplorer:vulnerabilities'
  //   );
  //   if (storagedVulnerabilities != null) {
  //     return JSON.parse(storagedVulnerabilities);
  //   }
  //   return [];
  // });

  // useEffect(() => {
  //   async function loadVulnerabilities() {
  //     const config = {
  //       headers: {
  //         Authorization: 'Token 7b1f9d46707352594bab9e07ae7ec5daaff7f1c2',
  //       },
  //     };
  //     const response = await api.get(
  //       `http://167.114.135.109/api/vulnerabilities/?page=${currentPage}&page_size=9`,
  //       config
  //     );
  //     setVulnerabilities(response.data.results);
  //     setCount(response.data.count);
  //   }
  //   loadVulnerabilities();
  // }, [currentPage]);

  // useEffect(() => {
  //   localStorage.setItem(
  //     '@VulnerabilitiesExplorer:vulnerabilities',
  //     JSON.stringify(vulnerabilities)
  //   );
  // }, [vulnerabilities]);

  // const loadOrder = useCallback(() => {
  //   async function loadVulnerabilitiesOrder() {
  //     const config = {
  //       headers: {
  //         Authorization: 'Token 7b1f9d46707352594bab9e07ae7ec5daaff7f1c2',
  //       },
  //     };
  //     const response = await api.get(
  //       `http://167.114.135.109/api/vulnerabilities/?ordering=${plus}${order}&page_size=9`,
  //       config
  //     );
  //     console.log(response.data.results);
  //     setVulnerabilities(response.data.results);
  //     setCount(response.data.count);
  //   }
  //   loadVulnerabilitiesOrder();
  // }, [order, plus]);

  useEffect(() => {
    loadVul();
  }, [currentPage, order]);

  const handlePlus = (filtro) => {
    if (crescente !== '') {
      setPlus(filtro);
      if (filtro) loadOrder(crescente, '-');
      if (!filtro) loadOrder(crescente);
    }
  };
  const handleOrder = (value) => {
    if (value === '') {
      loadVul();
      setCrescente('');
    } else {
      loadOrder(value);
      setCrescente(value);
    }
  };

  return (
    <>
      <PesquisarBar>
        <div>
          <input type="text" placeholder="Digite o ID do Host" />
        </div>
        <OrderBar>
          <label htmlFor="order">
            Ordenar:
            <select
              onChange={(e) => handleOrder(e.target.value)}
              name="order"
              id="order"
            >
              <option value="" />
              <option value="title">Nome</option>
              <option value="severity">Severidade</option>
              <option value="cvss">CVSS</option>
              <option value="asset_count">Hosts</option>
            </select>
          </label>
          {plus && (
            <button type="button">
              {' '}
              <BsChevronDown size={25} onClick={() => handlePlus(false)} />{' '}
            </button>
          )}

          {!plus && (
            <button type="button">
              <BsChevronUp size={25} onClick={() => handlePlus(true)} />{' '}
            </button>
          )}
        </OrderBar>
      </PesquisarBar>
      <Grid
        fields={['Nome', 'Severidade', 'CVSS', 'Publicação', 'Hosts Afetados']}
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
