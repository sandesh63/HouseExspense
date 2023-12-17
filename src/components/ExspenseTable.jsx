import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
// const columns = [
//   { id: 1, label: "Id", minWidth: 60 },
//   { id: 2, label: "Category", minWidth: 60 },
//   { id: 3, label: "Date", minWidth: 60 },
//   {
//     id: 4,
//     label: "Amount",
//     minWidth: 60,
//   },
//   {
//     id: 5,
//     label: "Work",
//     minWidth: 60,
//   },
//   {
//     id: 6,
//     label: "Receiver",
//     minWidth: 60,
//   },
//   {
//     id: 7,
//     label: "Message",
//     minWidth: 60,
//   },
// ];

const ExspenseTable = () => {
  useEffect(() => {
    const getTableData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/getlist");
        setRows(response.data);
       
        setLoading(false);
      } catch (error) {
        console.log("Error", error);
        setLoading(false);
      }
    };
    getTableData();
  });
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([
    // {
    //   id: 1,
    //   category: "Cg",
    //   date: "22-08-2000",
    //   amount: 10000,
    //   work: "Centring",
    //   receiver: "Mahesh",
    //   message: "Random Message",
    // },
    // {
    //   id: 2,
    //   category: "Cg",
    //   date: "22-08-2000",
    //   amount: 10000,
    //   work: "Centring",
    //   receiver: "Mahesh",
    //   message: "Random Message",
    // },
    // {
    //   id: 3,
    //   category: "Cg",
    //   date: "22-08-2000",
    //   amount: 10000,
    //   work: "Centring",
    //   receiver: "Mahesh",
    //   message: "Random Message",
    // },
  ]);
  return (
    <>
      <Card className="bg-light text-white">
        <Paper style={{ width: "100%", overflow: "hidden" }}>
          <TableContainer style={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Work</TableCell>
                  <TableCell>Receiver</TableCell>
                  <TableCell>Message</TableCell>
                </TableRow>
              </TableHead>

              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>{row.work}</TableCell>
                  <TableCell>{row.receiver}</TableCell>
                  <TableCell>{row.message}</TableCell>
                </TableRow>
              ))}
            </Table>
          </TableContainer>
        </Paper>
      </Card>
    </>
  );
};

export default ExspenseTable;
