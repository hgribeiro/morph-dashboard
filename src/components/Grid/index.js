/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { Table, thead, tr, th, tbody, Pagination } from 'react-bootstrap';
// import { useCurrentPage } from '../../hooks/CurrentPage';
// import { useOrder } from '../../hooks/Order';
import { useListRender } from '../../hooks/ListRender';

import Item from '../Item';

import { Container, Footer } from './styles';

function Grid({ fields, arrayKey, currentPage, setCurrentPage }) {
  const { list, count } = useListRender();
  // const { currentPage, setCurrentPage } = useCurrentPage();

  // const [countToRender, setCountToRender] = useState(count);
  // const { newCount, newList, orderCliked } = useOrder();
  // useEffect(() => {
  //   setListToRender(newList);
  //   setCountToRender(newCount);
  // }, [newList, newCount]);
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            {fields.map((field) => (
              <th key={field}>{field}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <Item fild={item[arrayKey[0]]} />
              <Item fild={item[arrayKey[1]]} />
              <Item fild={item[arrayKey[2]]} />
              <Item fild={item[arrayKey[3]]} />
              <Item fild={item[arrayKey[4]]} />
            </tr>
          ))}
        </tbody>
      </Table>
      <Footer>
        {count < 10 && <div>Mostrando {count} resultados </div>}
        {currentPage === 1 && count >= 10 && (
          <div>Mostrando 1 - 10 de {count} resultados </div>
        )}
        {currentPage !== 1 && currentPage !== Math.ceil(count / 9) && (
          <div>
            Mostrando {(currentPage - 1) * 10} - {10 * currentPage} de {count}{' '}
            resultados{' '}
          </div>
        )}
        {currentPage === Math.ceil(count / 10) && list.length < 9 && (
          <div>
            Mostrando {count - (list.length - 1)} - {count} de {count}{' '}
            resultados{' '}
          </div>
        )}
        <div>
          <Pagination>
            {currentPage !== 1 && (
              <>
                <Pagination.First onClick={() => setCurrentPage(1)} />
                <Pagination.Prev
                  onClick={() => setCurrentPage(currentPage - 1)}
                />
                <Pagination.Item
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  {currentPage - 1}
                </Pagination.Item>
              </>
            )}
            <Pagination.Item active>{currentPage}</Pagination.Item>
            {currentPage !== Math.ceil(count / 10) && (
              <>
                <Pagination.Item
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  {currentPage + 1}
                </Pagination.Item>
                <Pagination.Next
                  onClick={() => setCurrentPage(currentPage + 1)}
                />
                <Pagination.Last
                  onClick={() => setCurrentPage(Math.ceil(count / 10))}
                />
              </>
            )}
          </Pagination>
        </div>
      </Footer>
    </Container>
  );
}

export default Grid;
