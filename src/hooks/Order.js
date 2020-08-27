// import React, {
//   useEffect,
//   createContext,
//   useState,
//   useContext,
//   useCallback,
// } from 'react';
// import api from '../services/api';

// const OrderContext = createContext();

// export const OrderProvider = ({ children }) => {
//   const [order, setOrder] = useState();
//   const [newCount, setNewCount] = useState();
//   const [newList, setNewList] = useState();
//   const [alter, setAlter] = useState(true);

//   const loadOrder = useCallback(() => {
//     async function loadOrderX() {
//       const config = {
//         headers: {
//           Authorization: 'Token 7b1f9d46707352594bab9e07ae7ec5daaff7f1c2',
//         },
//       };
//       const response = await api.get(
//         `http://167.114.135.109/api/vulnerabilities/?ordering=${order}`,
//         config
//       );
//       console.log('dentro do use fect');
//       setNewList(response.data.results);
//       setNewCount(response.data.count);
//     }
//     loadOrderX();
//   }, [order]);

//   const orderCliked = useCallback(
//     (campo) => {
//       console.log('aqui dentro no conte');
//       if (alter) {
//         console.log(campo);
//         setOrder(campo);
//         setAlter(false);
//       } else {
//         setOrder(-campo);
//         setAlter(true);
//       }
//       loadOrder();
//     },
//     [alter]
//   );

//   return (
//     <OrderContext.Provider
//       value={{
//         newCount,
//         newList,
//         orderCliked,
//       }}
//     >
//       {children}
//     </OrderContext.Provider>
//   );
// };

// export function useOrder() {
//   const context = useContext(OrderContext);

//   if (!context) {
//     throw new Error('useOrder must be used within a OrderProvider');
//   }
//   return context;
// }
