import React, { useState, useEffect } from 'react';
import { AiFillLock } from 'react-icons/ai';
import { RiAlertLine, RiSpamLine } from 'react-icons/ri';
import api from '../../services/api';

import { Container, Card } from './styles';

function Cards() {
  const [hostVulneravel, setHostVulneravel] = useState({});
  const [totalVulnerabilidade, setTotalVulnerabilidade] = useState({});
  const [mediaRisk, setMediaRisk] = useState({});

  useEffect(() => {
    async function loadCardHosts() {
      const config = {
        headers: {
          Authorization: 'Token 7b1f9d46707352594bab9e07ae7ec5daaff7f1c2',
        },
      };
      const response = await api.get(
        `http://167.114.135.109/api/dashboard/cards/asset`,
        config
      );
      setHostVulneravel(response.data);
    }
    loadCardHosts();
  }, []);

  useEffect(() => {
    async function loadCardVulnerabilidade() {
      const config = {
        headers: {
          Authorization: 'Token 7b1f9d46707352594bab9e07ae7ec5daaff7f1c2',
        },
      };
      const response = await api.get(
        `http://167.114.135.109/api/dashboard/cards/vulnerability`,
        config
      );
      setTotalVulnerabilidade(response.data);
    }
    loadCardVulnerabilidade();
  }, []);

  useEffect(() => {
    async function loadCardRisk() {
      const config = {
        headers: {
          Authorization: 'Token 7b1f9d46707352594bab9e07ae7ec5daaff7f1c2',
        },
      };
      const response = await api.get(
        `http://167.114.135.109/api/dashboard/cards/risk`,
        config
      );
      setMediaRisk(response.data);
    }
    loadCardRisk();
  }, []);

  return (
    <Container>
      <Card>
        <AiFillLock size={50} />
        <div>
          <h3>{hostVulneravel.vulnerable_asset_count}</h3>
          <p>hosts vulneráveis de {hostVulneravel.asset_count}</p>
        </div>
      </Card>
      <Card>
        <RiAlertLine size={55} />
        <div>
          <h3>{totalVulnerabilidade.active_vuln_count}</h3>
          <p>
            vulnerabilidades não corrigidas de {totalVulnerabilidade.vuln_count}
          </p>
        </div>
      </Card>
      <Card>
        <RiSpamLine size={50} />
        <div>
          <h3>{mediaRisk.risk_avg}</h3>
          <p>média de risco dos hosts</p>
        </div>
      </Card>
    </Container>
  );
}

export default Cards;
