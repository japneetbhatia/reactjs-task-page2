import React from 'react'
// import Tablerow from './TableRow'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import "./ListTable.css"

function ListTable() {
    function createData(id, paymentId, amount, created, status) {
        return { id, paymentId, amount, created, status };
      }
    const rows = [
        createData("Refund Id", "Payment Id", "Amount", "Created At", "Status"),
        createData("pay_G11ZY646x6Afk3", "pay_G11ZY646x6Afk3", 599, "12 Nov 2021, 07:25:23 pm", "Processed"),
        createData("pay_G11ZY646x6Afk3", "pay_G11ZY646x6Afk3", 599, "12 Nov 2021, 07:25:23 pm", "Processed"),
        createData("pay_G11ZY646x6Afk3", "pay_G11ZY646x6Afk3", 599, "12 Nov 2021, 07:25:23 pm", "Processed"),
        createData("pay_G11ZY646x6Afk3", "pay_G11ZY646x6Afk3", 599, "12 Nov 2021, 07:25:23 pm", "Processed"),
        // createData("pay_G11ZY646x6Afk3", "pay_G11ZY646x6Afk3", 599, "12 Nov 2021, 07:25:23 pm", "Processed"),
        // createData("pay_G11ZY646x6Afk3", "pay_G11ZY646x6Afk3", 599, "12 Nov 2021, 07:25:23 pm", "Processed"),
        createData("pay_G11ZY646x6Afk3", "pay_G11ZY646x6Afk3", 599, "12 Nov 2021, 07:25:23 pm", "Processed"),
        createData("pay_G11ZY646x6Afk3", "pay_G11ZY646x6Afk3", 599, "12 Nov 2021, 07:25:23 pm", "Processed"),
    ]  
    return (
        <div>
             <TableContainer className="container" component={Paper}>
      <Table>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.paymentId}</TableCell>
              <TableCell align="left">{row.amount}</TableCell>
              <TableCell align="left">{row.created}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default ListTable
