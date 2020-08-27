/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { Table, thead, tr, th, tbody, Pagination } from 'react-bootstrap';
import { useCurrentPage } from '../../hooks/CurrentPage';
// import { useOrder } from '../../hooks/Order';
import { useListRender } from '../../hooks/ListRender';

import Item from '../Item';

import { Container, Footer } from './styles';

function Grid({ fields, arrayKey }) {
  const { list, count } = useListRender();

  const [countToRender, setCountToRender] = useState(count);
  const { currentPage, setCurrentPage } = useCurrentPage();
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
        {currentPage === 1 && (
          <div>
            Mostrando 1 - {9 * currentPage + (currentPage - 1)} de {count}{' '}
            resultados{' '}
          </div>
        )}
        {currentPage !== 1 && (
          <div>
            Mostrando {(currentPage - 1) * 9 + (currentPage - 1)} -
            {9 * currentPage + (currentPage - 1)} de {count} resultados{' '}
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
            {currentPage !== Math.ceil(countToRender / 9) && (
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
                  onClick={() => setCurrentPage(Math.ceil(countToRender / 9))}
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
