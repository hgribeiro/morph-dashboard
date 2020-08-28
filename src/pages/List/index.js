import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  BsChevronDown,
  BsChevronUp,
  BsSearch,
  BsList,
  BsBarChart,
} from 'react-icons/bs';
// import api from '../../services/api';
import { useCurrentPage } from '../../hooks/CurrentPage';
import { useListRender } from '../../hooks/ListRender';

import Grid from '../../components/Grid';
// import Item from '../../components/Item';
import { PesquisarBar, OrderBar, Input, ListItem } from './styles';

function List() {
  const {
    loadOrder,
    order,
    plus,
    setPlus,
    loadVul,
    loadHostId,
  } = useListRender();
  const { currentPage } = useCurrentPage();
  const [crescente, setCrescente] = useState('');
  const [hostId, setHostId] = useState('');

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

  function handleSubmit(e) {
    e.preventDefault();
    loadHostId(hostId);
  }

  return (
    <>
      <PesquisarBar>
        <div>
          <form onSubmit={handleSubmit}>
            <Input
              value={hostId}
              onChange={(e) => setHostId(e.target.value)}
              type="text"
              placeholder="Host ID"
            />
            <button type="submit">
              <BsSearch size={25} />
            </button>
          </form>
        </div>
        <Link to="listHosts">
          <ListItem>
            <BsList size={25} />
            Hots
          </ListItem>
        </Link>

        <Link to="/dashboard">
          <ListItem>
            <BsBarChart size={25} />
            Dashboard
          </ListItem>
        </Link>

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
