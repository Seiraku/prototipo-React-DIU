import React from 'react'
import NavBar from '../components/nav_bar'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Switch } from '@mui/material';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';


function createData(topic, date, author) {
    return { topic, date, author};
}
  
const rows = [
    createData('Certamen 1?', '15 de Marzo de 2022', 'Anonimo'),
    createData('Certamen 2?', '22 de Abril de 2022', 'Anonimo'),
    createData('Plazo extra?', '7 de Mayo de 2022', 'Anonimo'),
]
  


export const DIU_FORUMS = () => {
  return (
    <div className='page'>
        <div>
        <NavBar />
        <h1>Diseño de Interfaces Usuarias</h1>
        </div>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Tema</TableCell>
              <TableCell align="center">Fecha</TableCell>
              <TableCell align="center">Autor</TableCell>
              <TableCell align="center">Subscrito?</TableCell>
              <TableCell align="center">Visitar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {row.topic}
                </TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">{row.author}</TableCell>
                <TableCell align="center">
                    <Switch defaultChecked> </Switch>
                </TableCell>
                <TableCell align="center">
                    <Button component={Link} to='/forums/1' variant="contained">Foro</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default DIU_FORUMS