import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ExspenseTable.css";
import { RxDashboard } from "react-icons/rx";
import { useNavigate } from "react-router";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
const data = [
  {
    events: [
      {
        name: "Loan Amount",
      },
      {
        name: "Bank Balance",
      },
      {
        name: "In Hand Balance",
      },
      {
        name: "Days Remaining",
      },
    ],
  },
];
const ExspenseTable = () => {
  const navigate = useNavigate();
  const color = ["light-blue", "light-green", "light-red", "light-purple"];

  useEffect(() => {
    const getTableData = async () => {
      try {
        const response = await axios.get(
          "https://houseexspensebackend-production.up.railway.app/getlist"
        );
        setRows(response.data);
        console.log(rows);

        setLoading(false);
      } catch (error) {
        console.log("Error", error);
        setLoading(false);
      }
    };
    getTableData();
  }, []);

  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState(null);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  };

  const lastRowdata = rows ? rows[rows.length - 1]:[];
  const lastRowAmounts = rows ? ["10000", rows.bankBalance, rows.inHandBalance, "38"] : [];

  const eventData = data.map((event) => event.events);
  const submitHandler = () => {
    navigate("/login");
  };

  return (
    <>
      <Row className="row">
        <Col xs={3} sm={2} md={2} lg={2} className="sidebar--container">
          <div className="logo">Exspense Tracker</div>
          <ul className="menu">
            <li className="active">
              <Link to="#" className="link">
                <i>
                  <RxDashboard />
                </i>
                <span>Dashboard</span>
              </Link>
            </li>

            {/* <li>
              <a href="#">
                <i className="fas fa-sign-out"></i>
                <span>Logout</span>
              </a>
            </li> */}
          </ul>
        </Col>
        <Col xs={9} sm={10} lg={10} className="main--container">
          <Container fluid className="header--wrapper">
            <div className="header-title">
              <span>HouseExspense</span>
              <h2>Dashboard</h2>
            </div>
            <div className="user--info">
              <Button onClick={submitHandler} variant="contained">
                Login
              </Button>
            </div>
          </Container>
          <Container fluid className="card--container">
            <Row className="card--row">
              {rows !== null ? (
                eventData[0].map((event, index) => {
                  const colorIndex = index % 4;
                  const newColor = color[colorIndex];
                  return (
                    <Col
                      xs={6}
                      sm={6}
                      ms={6}
                      lg={3}
                      className="card--col"
                      key={index}
                    >
                      <Card className={newColor}>
                        <Card.Body className="payment--card">
                          <div className="card--header">
                            <div className="amount">
                              <span className="title">{event.name}</span>
                              <span className="amount-value">{lastRowAmounts[index]}</span>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })
              ) : (
                <>
                  <p>...Loading</p>
                </>
              )}
            </Row>
          </Container>
          <Row className="table--col">
            <Col xs={12}>
              <h3 className="main--title">Finance Data</h3>
              <Table responsive>
                <thead className="table--head">
                  <tr>
                    <th>Id</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Message</th>
                    <th>Receiver</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                  {rows !== null ? (
                    rows.map((row) => (
                      <tr className="table--row">
                        <td>{row.id}</td>
                        <td>{row.amount}</td>
                        <td>{formatDate(row.date)}</td>
                        <td>{row.message}</td>
                        <td>{row.receiver}</td>
                        <td>{row.type}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6">Loading...</td> // Or show a loading
                      indicator
                    </tr>
                  )}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ExspenseTable;
