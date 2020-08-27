import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { Container } from './styles';

function Options() {
  const history = useHistory();
  function handleclick(page) {
    history.push(`/${page}`);
  }
  return (
    <Container>
      <Card>
        <Card.Header>Listagem de Vulnerabilidade</Card.Header>
        <Card.Body>
          <Card.Title>Listagem de Vulnerabilidade</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>

          <Button
            onClick={() => {
              handleclick('list');
            }}
            variant="primary"
          >
            Go to this list
          </Button>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Header>Listagem de Hosts</Card.Header>
        <Card.Body>
          <Card.Title>Listagem de Hosts</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button
            onClick={() => {
              handleclick('listHosts');
            }}
            variant="primary"
          >
            Go to this list
          </Button>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Header>Dashboard</Card.Header>
        <Card.Body>
          <Card.Title>Dashboard</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button
            onClick={() => {
              handleclick('dashboard');
            }}
            variant="primary"
          >
            Go!
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Options;
