import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  h4 {
    margin: 20px 0;
  }
`;

export const Cards = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  div {
    /* margin: 0px 10px; */
  }
`;

export const PesquisarBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: 5px 25px 10px 5px;
  width: 100%;
  max-width: 900px;
  button {
    background-color: transparent;
    border: 0px;
    border-radius: 5px;
    padding: 5px;
  }
  button:hover {
    background-color: #ececec;
  }
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
`;

export const Input = styled.input`
  width: 70px;
  margin-right: 10px;
`;

export const ListItem = styled.div`
  cursor: pointer;
  svg {
    margin: 0 5px;
  }
`;
