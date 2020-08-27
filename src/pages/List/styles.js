import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: 5px 10px 0 10px;
`;

export const PesquisarBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: 5px 25px 10px 5px;
`;
export const OrderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 250px;
  select {
    margin-left: 8px;
  }

  button {
    background-color: transparent;
    border: 0px;
  }
`;
