// 'use strict';

// import React, { useState } from 'react';
// import { render } from 'react-dom';
// import { AgGridReact, AgGridColumn } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

// const GridExample = () => {
//   const [gridApi, setGridApi] = useState(null);
//   const [gridColumnApi, setGridColumnApi] = useState(null);
//   const [rowData, setRowData] = useState(null);

//   const onGridReady = (params) => {
//     setGridApi(params.api);
//     setGridColumnApi(params.columnApi);

//     const updateData = (data) => {
//       setRowData(data);
//     };

//     fetch(
//       'https://drive.google.com/file/d/1KplBsSbygXs2Twz04L8_l5n_blAzl1mj/view?usp=sharing'
//     )
//       .then((resp) => resp.json())
//       .then((data) => updateData(data));
//   };

//   const clearPinned = () => {
//     gridColumnApi.applyColumnState({ defaultState: { pinned: null } });
//   };

//   const resetPinned = () => {
//     gridColumnApi.applyColumnState({
//       state: [
//         {
//           colId: 'rowNum',
//           pinned: 'left',
//         },
//         {
//           colId: 'sName',
//           pinned: 'left',
//         },
//         {
//           colId: 'sPop',
//           pinned: 'left',
//         },
//         {
//           colId: 'sFlag',
//           pinned: 'right',
//         },
//       ],
//       defaultState: { pinned: null },
//     });
//   };

//   const pinCountry = () => {
//     gridColumnApi.applyColumnState({
//       state: [
//         {
//           colId: 'sFlag',
//           pinned: 'left',
//         },
//       ],
//       defaultState: { pinned: null },
//     });
//   };

//   const jumpToCol = () => {
//     var value = document.getElementById('col').value;
//     if (typeof value !== 'string' || value === '') {
//       return;
//     }
//     var index = Number(value);
//     if (typeof index !== 'number' || isNaN(index)) {
//       return;
//     }
//     var allColumns = gridColumnApi.getAllColumns();
//     var column = allColumns[index];
//     if (column) {
//       gridApi.ensureColumnVisible(column);
//     }
//   };

//   const jumpToRow = (value) => {
//     var value = document.getElementById('row').value;
//     var index = Number(value);
//     if (typeof index === 'number' && !isNaN(index)) {
//       gridApi.ensureIndexVisible(index);
//     }
//   };

//   return (
//     <div style={{ width: '100%', height: '100%' }}>
//       <div className='example-wrapper'>
//         <div className='example-header'>
//           <div style={{ padding: '4px' }}>
//             <button onClick={() => clearPinned()}>Clear Pinned</button>
//             <button onClick={() => resetPinned()}>
//               Left = #, States, Abbreviation; Right = Flag
//             </button>
//             <button onClick={() => pinCountry()}>Left = Flag</button>
//           </div>

//           <div style={{ padding: '4px' }}>
//             Jump to:
//             <input
//               placeholder='row'
//               type='text'
//               style={{ width: '40px' }}
//               id='row'
//               onInput={() => jumpToRow()}
//             />
//             <input
//               placeholder='col'
//               type='text'
//               style={{ width: '40px' }}
//               id='col'
//               onInput={() => jumpToCol()}
//             />
//           </div>
//         </div>
//         <div
//           id='myGrid'
//           style={{
//             height: '100%',
//             width: '100%',
//           }}
//           className='ag-theme-alpine'
//         >
//           <AgGridReact
//             defaultColDef={{ resizable: true }}
//             debug={true}
//             rowData={rowData}
//             onGridReady={onGridReady}
//           >
//             <AgGridColumn
//               headerName='#'
//               colId='rowNum'
//               valueGetter='node.id'
//               width={80}
//               pinned='left'
//             />
//             <AgGridColumn
//               headerName='States'
//               field='sName'
//               width={150}
//               pinned='left'
//             />
//             <AgGridColumn
//               headerName='Population'
//               field='sPop'
//               width={90}
//               pinned='left'
//             />
//             <AgGridColumn headerName='Size' field='sSize' width={100} />
//             <AgGridColumn
//               headerName='Flag'
//               field='sFlag'
//               width={200}
//               pinned='right'
//             />
//           </AgGridReact>
//         </div>
//       </div>
//     </div>
//   );
// };

// render(<GridExample></GridExample>, document.querySelector('#root'));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
