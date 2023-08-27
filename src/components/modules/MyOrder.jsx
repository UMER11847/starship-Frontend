import * as React from "react";
import PropTypes from "prop-types";

import { CardContent } from "@mui/material";

import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import BlankPage from "../layout/BlankPage";

function createData(name, color, qt, price) {
  return {
    name,
    color,
    qt,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "FS1054",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "GK0017",
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <KeyboardArrowUp sx={{ color: "#8E2DE2" }} />
            ) : (
              <KeyboardArrowDown sx={{ color: "#8E2DE2" }} />
            )}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.color}</TableCell>
        <TableCell align="right">{row.qt}</TableCell>
        {/* <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Order id#</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    color: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    qt: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData("Headphones", "black", 2),
  createData("Laptop", "red", 3),
  // createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  // createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  // createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];
//CSS
const centerTableStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  marginBottom: "30%",
};
const tableStyle = {
  maxWidth: 800,
  width: "100vh",
  borderRadius: 10,
  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.8)",
  padding: "80px",
};

const headerCellStyle = {
  fontWeight: "bold",
};

const tableContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
};

export default function MyOrder() {

  return (
    <BlankPage>
      <CardContent>
        <div className="center-table-style" style={centerTableStyle}>
          <div className="table-container" style={tableContainer}>
            <Typography variant="h3" gutterBottom color={"#8E2DE2"}>
              My Order{" "}
            </Typography>
            <TableContainer
              className="table-style"
              component={Paper}
              style={tableStyle}
            >
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell
                      className="header-cell-style"
                      style={headerCellStyle}
                    >
                      Products
                    </TableCell>
                    <TableCell align="right">color</TableCell>
                    <TableCell align="right">qt</TableCell>
                    {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <Row key={row.name} row={row} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </CardContent>
    </BlankPage>
  );
}
