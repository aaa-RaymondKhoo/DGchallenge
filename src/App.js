import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    function numberFormatter(num) {
      return new Intl.NumberFormat('en').format(num);
    }
    // function imageRender(params) {
    //   // const country = params.data.country;
    //   return `(\<img src="{params}"\>)`;
    // }

    this.state = {
      columnDefs: [
        { headerName: 'ID', field: 'id', sortable: true, filter: true },
        { headerName: 'States', field: 'sName', sortable: true, filter: true },
        {
          headerName: 'Abbreviation',
          field: 'sAbbr',
          sortable: true,
          filter: true,
        },
        {
          headerName: 'Population',
          field: 'sPop',
          sortable: true,
          filter: true,
        },
        { headerName: 'Size', field: 'sSize', sortable: true, filter: true },
        { headerName: 'Flag', field: 'sFlag', sortable: true, filter: true },
      ],
      // rowData: null,
      rowData: [
        {
          id: 1,
          sName: 'Alabama',
          sAbbr: 'AL',
          sPop: numberFormatter(4921532),
          sSize: numberFormatter(52420.07),
          // sFlag: imageRender(
          //   'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'
          // ),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png' />
          ),
        },
        {
          id: 2,
          sName: 'Alaska',
          sAbbr: 'AK',
          sPop: numberFormatter(731158),
          sSize: numberFormatter(665384.04),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png' />
          ),
        },
        {
          id: 3,
          sName: 'Arizona',
          sAbbr: 'AZ',
          sPop: numberFormatter(7421401),
          sSize: numberFormatter(113990.3),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png' />
          ),
        },
        {
          id: 4,
          sName: 'Arkansas',
          sAbbr: 'AR',
          sPop: numberFormatter(3030522),
          sSize: numberFormatter(52178.55),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png' />
          ),
        },
        {
          id: 5,
          sName: 'California',
          sAbbr: 'CA',
          sPop: numberFormatter(39368078),
          sSize: numberFormatter(163694.74),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png' />
          ),
        },
        {
          id: 6,
          sName: 'Colorado',
          sAbbr: 'CO',
          sPop: numberFormatter(5807719),
          sSize: numberFormatter(104093.67),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png' />
          ),
        },
        {
          id: 7,
          sName: 'Connecticut',
          sAbbr: 'CT',
          sPop: numberFormatter(3557006),
          sSize: numberFormatter(5543.41),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png' />
          ),
        },
        {
          id: 8,
          sName: 'Delaware',
          sAbbr: 'DE',
          sPop: numberFormatter(986809),
          sSize: numberFormatter(2488.72),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png' />
          ),
        },
        {
          id: 9,
          sName: 'District of Columbia',
          sAbbr: 'DC',
          sPop: numberFormatter(712816),
          sSize: numberFormatter(68.34),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_the_District_of_Columbia.svg/46px-Flag_of_the_District_of_Columbia.svg.png' />
          ),
        },
        {
          id: 10,
          sName: 'Florida',
          sAbbr: 'FL',
          sPop: numberFormatter(21733312),
          sSize: numberFormatter(65757.7),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png' />
          ),
        },
        {
          id: 11,
          sName: 'Georgia',
          sAbbr: 'GA',
          sPop: numberFormatter(10710017),
          sSize: numberFormatter(59425.15),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png' />
          ),
        },
        {
          id: 12,
          sName: 'Hawaii',
          sAbbr: 'HI',
          sPop: numberFormatter(1407006),
          sSize: numberFormatter(10931.72),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png' />
          ),
        },
        {
          id: 13,
          sName: 'Idaho',
          sAbbr: 'ID',
          sPop: numberFormatter(1826913),
          sSize: numberFormatter(83568.95),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png' />
          ),
        },
        {
          id: 14,
          sName: 'Illinois',
          sAbbr: 'IL',
          sPop: numberFormatter(12587530),
          sSize: numberFormatter(57913.55),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png' />
          ),
        },
        {
          id: 15,
          sName: 'Indiana',
          sAbbr: 'IN',
          sPop: numberFormatter(6743953),
          sSize: numberFormatter(36419.55),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png' />
          ),
        },
        {
          id: 16,
          sName: 'Iowa',
          sAbbr: 'IA',
          sPop: numberFormatter(3163561),
          sSize: numberFormatter(56272.81),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Iowa.svg/45px-Flag_of_Iowa.svg.png' />
          ),
        },
        {
          id: 17,
          sName: 'Kansas',
          sAbbr: 'KS',
          sPop: numberFormatter(2913805),
          sSize: numberFormatter(82278.36),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png' />
          ),
        },
        {
          id: 18,
          sName: 'Kentucky',
          sAbbr: 'KY',
          sPop: numberFormatter(4477251),
          sSize: numberFormatter(40407.8),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png' />
          ),
        },
        {
          id: 19,
          sName: 'Louisiana',
          sAbbr: 'LA',
          sPop: numberFormatter(4645318),
          sSize: numberFormatter(52378.13),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png' />
          ),
        },
        {
          id: 20,
          sName: 'Maine',
          sAbbr: 'ME',
          sPop: numberFormatter(1350141),
          sSize: numberFormatter(35379.74),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_Maine.svg/38px-Flag_of_Maine.svg.png' />
          ),
        },
        {
          id: 21,
          sName: 'Maryland',
          sAbbr: 'MD',
          sPop: numberFormatter(6055802),
          sSize: numberFormatter(12405.93),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png' />
          ),
        },
        {
          id: 22,
          sName: 'Massachusetts',
          sAbbr: 'MA',
          sPop: numberFormatter(6893574),
          sSize: numberFormatter(10554.39),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png' />
          ),
        },
        {
          id: 23,
          sName: 'Michigan',
          sAbbr: 'MI',
          sPop: numberFormatter(9966555),
          sSize: numberFormatter(96713.51),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png' />
          ),
        },
        {
          id: 24,
          sName: 'Minnesota',
          sAbbr: 'MN',
          sPop: numberFormatter(5657342),
          sSize: numberFormatter(86935.83),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png' />
          ),
        },
        {
          id: 25,
          sName: 'Mississippi',
          sAbbr: 'MS',
          sPop: numberFormatter(2966786),
          sSize: numberFormatter(48431.78),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_Mississippi.svg/46px-Flag_of_Mississippi.svg.png' />
          ),
        },
        {
          id: 26,
          sName: 'Missouri',
          sAbbr: 'MO',
          sPop: numberFormatter(6151548),
          sSize: numberFormatter(69706.99),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png' />
          ),
        },
        {
          id: 27,
          sName: 'Montana',
          sAbbr: 'MT',
          sPop: numberFormatter(1080577),
          sSize: numberFormatter(147039.71),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png' />
          ),
        },
        {
          id: 28,
          sName: 'Nebraska',
          sAbbr: 'NE',
          sPop: numberFormatter(1937552),
          sSize: numberFormatter(77347.81),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png' />
          ),
        },
        {
          id: 29,
          sName: 'Nevada',
          sAbbr: 'NV',
          sPop: numberFormatter(3138259),
          sSize: numberFormatter(110571.82),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png' />
          ),
        },
        {
          id: 30,
          sName: 'New Hampshire',
          sAbbr: 'NH',
          sPop: numberFormatter(1366275),
          sSize: numberFormatter(9349.16),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png' />
          ),
        },
        {
          id: 31,
          sName: 'New Jersey',
          sAbbr: 'NJ',
          sPop: numberFormatter(8882371),
          sSize: numberFormatter(8722.58),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_New_Jersey.svg/46px-Flag_of_New_Jersey.svg.png' />
          ),
        },
        {
          id: 32,
          sName: 'New Mexico',
          sAbbr: 'NM',
          sPop: numberFormatter(2106319),
          sSize: numberFormatter(121590.3),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png' />
          ),
        },
        {
          id: 33,
          sName: 'New York',
          sAbbr: 'NY',
          sPop: numberFormatter(19336776),
          sSize: numberFormatter(54554.98),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png' />
          ),
        },
        {
          id: 34,
          sName: 'North Carolina',
          sAbbr: 'NC',
          sPop: numberFormatter(10600823),
          sSize: numberFormatter(53819.16),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png' />
          ),
        },
        {
          id: 35,
          sName: 'North Dakota',
          sAbbr: 'ND',
          sPop: numberFormatter(765309),
          sSize: numberFormatter(70698.32),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Flag_of_North_Dakota.svg/41px-Flag_of_North_Dakota.svg.png' />
          ),
        },
        {
          id: 36,
          sName: 'Ohio',
          sAbbr: 'OH',
          sPop: numberFormatter(11693217),
          sSize: numberFormatter(44825.58),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Ohio.svg/50px-Flag_of_Ohio.svg.png' />
          ),
        },
        {
          id: 37,
          sName: 'Oklahoma',
          sAbbr: 'OK',
          sPop: numberFormatter(3980783),
          sSize: numberFormatter(69898.87),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png' />
          ),
        },
        {
          id: 38,
          sName: 'Oregon',
          sAbbr: 'OR',
          sPop: numberFormatter(4241507),
          sSize: numberFormatter(98378.54),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png' />
          ),
        },
        {
          id: 39,
          sName: 'Pennsylvania',
          sAbbr: 'PA',
          sPop: numberFormatter(12783254),
          sSize: numberFormatter(46054.34),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png' />
          ),
        },
        {
          id: 40,
          sName: 'Rhode Island',
          sAbbr: 'RI',
          sPop: numberFormatter(1057125),
          sSize: numberFormatter(1544.89),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Rhode_Island.svg/39px-Flag_of_Rhode_Island.svg.png' />
          ),
        },
        {
          id: 41,
          sName: 'South Carolina',
          sAbbr: 'SC',
          sPop: numberFormatter(5218040),
          sSize: numberFormatter(32020.49),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png' />
          ),
        },
        {
          id: 42,
          sName: 'South Dakota',
          sAbbr: 'SD',
          sPop: numberFormatter(892717),
          sSize: numberFormatter(77115.68),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png' />
          ),
        },
        {
          id: 43,
          sName: 'Tennessee',
          sAbbr: 'TN',
          sPop: numberFormatter(6886834),
          sSize: numberFormatter(42114.25),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png' />
          ),
        },
        {
          id: 44,
          sName: 'Texas',
          sAbbr: 'TX',
          sPop: numberFormatter(29360759),
          sSize: numberFormatter(268596.46),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png' />
          ),
        },
        {
          id: 45,
          sName: 'Utah',
          sAbbr: 'UT',
          sPop: numberFormatter(3249879),
          sSize: numberFormatter(84896.88),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Utah.svg/46px-Flag_of_Utah.svg.png' />
          ),
        },
        {
          id: 46,
          sName: 'Vermont',
          sAbbr: 'VT',
          sPop: numberFormatter(623347),
          sSize: numberFormatter(9616.36),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png' />
          ),
        },
        {
          id: 47,
          sName: 'Virginia',
          sAbbr: 'VA',
          sPop: numberFormatter(8590563),
          sSize: numberFormatter(42774.93),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_Virginia_%283-2%29.svg/45px-Flag_of_Virginia_%283-2%29.svg.png' />
          ),
        },
        {
          id: 48,
          sName: 'Washington',
          sAbbr: 'WA',
          sPop: numberFormatter(7693612),
          sSize: numberFormatter(71297.95),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png' />
          ),
        },
        {
          id: 49,
          sName: 'West Virginia',
          sAbbr: 'WV',
          sPop: numberFormatter(1784787),
          sSize: numberFormatter(24230.04),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png' />
          ),
        },
        {
          id: 50,
          sName: 'Wisconsin',
          sAbbr: 'WI',
          sPop: numberFormatter(5832655),
          sSize: numberFormatter(65496.38),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png' />
          ),
        },
        {
          id: 51,
          sName: 'Wyoming',
          sAbbr: 'WY',
          sPop: numberFormatter(582328),
          sSize: numberFormatter(97813.01),
          // sFlag: imageFormatter(
          //   'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png'
          // ),
          // sPop: (
          //   <NumberFormat
          //     value={582328}
          //     displayType={'text'}
          //     thousandSeparator={true}
          //   />
          // ),
          // sSize: (
          //   <NumberFormat
          //     value={97813.01}
          //     displayType={'text'}
          //     thousandSeparator={true}
          //   />
          // ),
          sFlag: (
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png' />
          ),
        },
      ],
      // 'https://drive.google.com/file/d/1KplBsSbygXs2Twz04L8_l5n_blAzl1mj/view?usp=sharing'
    };
  }

  // componentDidMount() {
  //   fetch('./db.json')
  //     .then((res) => res.json())
  //     .then((rowData) => this.setState({ rowData }))
  //     .catch((err) => console.log(err));
  // }

  render() {
    return (
      <div
        className='ag-theme-balham'
        style={{
          width: 1300,
          height: 1500,
        }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          // rowSelection='multiple'
        />
      </div>
    );
  }
}
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <img src={logo} className='App-logo' alt='logo' />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className='App-link'
//           href='https://reactjs.org'
//           target='_blank'
//           rel='noopener noreferrer'
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
