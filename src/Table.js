import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {columnHeaders,rowHeaders,jobTotals,lastRowData} from './TableFunctions';

const columns = ['Job/Name',...columnHeaders(),'Total'];

//Row Data Generation
function createData(...values) {
  let targetData={};
  const data=['job',[...columns.slice(1)]];
  for(let i=0;i<data.length;i++){
      targetData[data[i]]=values[i]
  }
  return {...targetData };
}

const rows = [
  ...rowHeaders().map((value)=>createData(`${value}`,jobTotals(value))),
   createData('Total', ...lastRowData())
];

export default function TargetTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
             <TableCell>{columns[0]}</TableCell>
            {columns.slice(1).map((value,index)=><TableCell align="right" key={index}>{value}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.job}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.job}
              </TableCell>
              { columns.slice(1).map((value,index)=>
              <TableCell key={index} align="right">{row[value]}</TableCell>)
             }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}