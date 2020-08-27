import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;

export const Card = styled.div`
  margin: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  /* align-content: center; */
  align-items: center;

  width: 100%;
  height: 100px;
  max-width: 300px;
  max-height: 200px;

  border-style: solid;
  border-radius: 3px;
  border-width: 1.5px;
  border-color: #a5a5a5;

  div {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    p {
      text-align: end;
    }
  }
`;
