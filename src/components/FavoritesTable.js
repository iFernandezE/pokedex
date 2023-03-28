import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import { useSelector } from 'react-redux';
import { border } from '@mui/system';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 12, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 13, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 14, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 15, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 16, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 17, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 18, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 20, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 21, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 22, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 23, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 24, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 25, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 26, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 27, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 28, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 29, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function FavoritesTable() {
  const data = useContext(ThemeContext); // THEME

  const favorites = useSelector(state => state);
  console.log(favorites)

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'pokeName', headerName: 'Name', width: 200 },
    { field: 'pokeTypes', headerName: 'Types', width: 200 },
    
  ]

  let rows = []
  if (favorites) {
    console.log(favorites)
    favorites.forEach(e => {
      let types ="";
      e.pokeTypes.map(item =>{
        types += item.type.name + ", "
      })
      rows.push({ id: e.pokeNum, pokeName: e.pokeName, pokeTypes: types})
    });
  }

  return (
    <div style={{ height: 400, width: 500, margin:'auto', color:"white"}}>
      <h3>FAVORITE POKEMONS</h3>
      <DataGrid
        sx={{color:"white", border:"white 3px solid", fontSize:"20px"}}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}