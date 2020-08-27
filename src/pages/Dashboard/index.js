import React, { useEffect, useState } from 'react';

import Cards from '../../components/Cards';
import Chart from '../../components/Chart';
import api from '../../services/api';

import { Container } from './styles';

function Dashboard() {
  const [eixoForSeverity, setEixoForSeverity] = useState([1]);
  const [eixoForVulneratie, setEixoForVulneratie] = useState([1]);

  useEffect(() => {
    async function loadChartSeverity() {
      const config = {
        headers: {
          Authorization: 'Token 7b1f9d46707352594bab9e07ae7ec5daaff7f1c2',
        },
      };
      const response = await api.get(
        `http://167.114.135.109/api/dashboard/charts/severity`,
        config
      );
      const eixoXForSeverity = Object.keys(response.data);
      const eixoYForSeverity = Object.values(response.data);
      setEixoForSeverity([eixoXForSeverity, eixoYForSeverity]);
    }
    loadChartSeverity();
  }, []);

  useEffect(() => {
    async function loadChartVulneratie() {
      const config = {
        headers: {
          Authorization: 'Token 7b1f9d46707352594bab9e07ae7ec5daaff7f1c2',
        },
      };
      const response = await api.get(
        `http://167.114.135.109/api/dashboard/charts/top-assets`,
        config
      );
      const eixoXForVulneratie = [];
      const eixoYForVulneratie = [];
      for (let i = 0; i < response.data.length; i++) {
        eixoXForVulneratie.push(response.data[i].host);
        console.log(response.data[i].host);
        eixoYForVulneratie.push(response.data[i].vuln_count);
      }
      setEixoForVulneratie([eixoXForVulneratie, eixoYForVulneratie]);
    }
    loadChartVulneratie();
  }, []);
  return (
    <Container>
      <Cards />
      <h4>
        Gráfico com a distribuição de vulnerabilidade não corrigidas por
        severidade
      </h4>
      <Chart eixoX={eixoForSeverity[0]} eixoY={eixoForSeverity[1]} />
      <h4>Gráfico com top 10 hosts mais vulneráveis</h4>
      <Chart eixoX={eixoForVulneratie[0]} eixoY={eixoForVulneratie[1]} />
    </Container>
  );
}

export default Dashboard;
