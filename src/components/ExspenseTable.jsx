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
import { Col, Row } from "react-bootstrap";
import "./ExspenseTable.css";
const ExspenseTable = () => {
  useEffect(() => {
    const getTableData = async () => {
      try {
        const response = await axios.get(
          "https://houseexspensebackend-production.up.railway.app/getlist"
        );
        setRows(response.data);

        setLoading(false);
      } catch (error) {
        console.log("Error", error);
        setLoading(false);
      }
    };
    getTableData();
  }, []);
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);
  return (
    <>
      {/* <Card className="bg-light text-white">
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
      </Card> */}
      <div class="sidebar">
      <div class="logo"></div>
      <ul class="menu">
        <li class="active">
          <a href="#">
            <i class="fas fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-user"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-chart-bar"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-briefcase"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-sign-out"></i>
            <span>Logout</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="main--content">
      <div class="header--wrapper">
        <div class="header-title">
          <span>Primary</span>
          <h2>Dashboard</h2>
        </div>
        <div class="user--info">
          <div class="search--box">
            <i class="fa-solid fa-search"></i>
            <input type="text" placeholder="Search" />
          </div>

          <img src="" alt="profilepic" />
        </div>
      </div>
      <div class="card-container">
        <h3 class="main--title">Today's date</h3>

        <div class="card-wrapper">
          <div class="payment--card light-red">
            <div class="card--header">
              <div class="amount">
                <span class="title">Payement Amount</span>
                <span class="amount-value">$500.00</span>
              </div>
              <i class="fas fa-dollar-sign icon"></i>
            </div>
            <span class="card-detail">******37447</span>
          </div>
          <div class="payment--card light-green">
            <div class="card--header">
              <div class="amount">
                <span class="title">Payement Amount</span>
                <span class="amount-value">$500.00</span>
              </div>
              <i class="fas fa-dollar-sign icon"></i>
            </div>
            <span class="card-detail">******37447</span>
          </div>
          <div class="payment--card light-purple">
            <div class="card--header">
              <div class="amount">
                <span class="title">Payement Amount</span>
                <span class="amount-value">$500.00</span>
              </div>
              <i class="fas fa-dollar-sign icon"></i>
            </div>
            <span class="card-detail">******37447</span>
          </div>
          <div class="payment--card light-red">
            <div class="card--header">
              <div class="amount">
                <span class="title">Payement Amount</span>
                <span class="amount-value">$500.00</span>
              </div>
              <i class="fas fa-dollar-sign icon"></i>
            </div>
            <span class="card-detail">******37447</span>
          </div>
        </div>
      </div>
      <div class="tabular--wrapper">
        <h3 class="main--title">Finance Data</h3>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Work</th>
                    <th>Receiver</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                {rows.map((row) => (
                  <tr>
                    <td>{row.id}</td>
                    <td>{row.category}</td>
                    <td>{row.date}</td>
                    <td>{row.amount}</td>
                    <td>{row.work}</td>
                    <td>{row.receiver}</td>
                    <td>
                    {row.message}
                    </td>
                  </tr>
                ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="7">Total $7,000</td>
                  </tr>
                </tfoot>
              </table>
              </div>
    </div>
    </>
  );
};

export default ExspenseTable;
