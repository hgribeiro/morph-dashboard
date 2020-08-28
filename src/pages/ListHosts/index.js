import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  BsChevronDown,
  BsChevronUp,
  BsSearch,
  BsList,
  BsBarChart,
} from 'react-icons/bs';
import api from '../../services/api';
import { useCurrentPage } from '../../hooks/CurrentPage';
import { useListRender } from '../../hooks/ListRender';

import Grid from '../../components/Grid';
import { PesquisarBar, OrderBar, Input, ListItem } from './styles';

function ListHosts() {
  const { loadVulId } = useListRender();
  const { currentPage } = useCurrentPage();
  const { loadHos } = useListRender();
  const [id, setId] = useState();

  useEffect(() => {
    loadHos();
  }, [currentPage]);

  function handleSubmit(e) {
    e.preventDefault();
    loadVulId(id);
  }
  return (
    <>
      <PesquisarBar>
        <div>
          <form onSubmit={handleSubmit}>
            <Input
              value={id}
              onChange={(e) => setId(e.target.value)}
              type="text"
              placeholder="Vul ID"
            />
            <button type="submit">
              <BsSearch size={25} />
            </button>
          </form>
        </div>
        <Link to="list">
          <ListItem>
            <BsList size={25} />
            Vulnerabilidades
          </ListItem>
        </Link>

        <Link to="/dashboard">
          <ListItem>
            <BsBarChart size={25} />
            Dashboard
          </ListItem>
        </Link>
      </PesquisarBar>
      <Grid
        fields={['Id', 'Nome', 'IP Adress', 'Risco', 'Nº Vuln. não corrigidas']}
        arrayKey={['id', 'hostname', 'ip_address', 'risk', 'vuln_count']}
      />
    </>
  );
}

export default ListHosts;
