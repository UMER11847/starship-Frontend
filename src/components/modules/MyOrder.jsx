import { useState } from "react";
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
  Divider,
} from "@mui/material";
import BlankPage from "../layout/BlankPage";

import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

function createData(poduct, date, Qty, price) {
  return {
    poduct,
    date,
    Qty,
    price,
    history: [
      {
        product: "Laptop",
        amount: "54$",
        customerId: "2",
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
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
          {row.poduct}
        </TableCell>
        <TableCell align="right">{row.date}</TableCell>
        <TableCell align="right">{row.Qty}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Address
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="text">
                address : sc15 road12 <br />
                city: NYC state: <br />
                Staten Island.
                <br />
                country: USA
                <br />
                zip code: 1452-78
              </Typography>
              <Divider variant="middle" />

              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell>Qty</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Sum ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.product}>
                      <TableCell component="th" scope="row">
                        {historyRow.product}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell rowSpan={3} />
                    <TableCell colSpan={2}>Subtotal :</TableCell>
                    <TableCell align="right">35$</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Shipping price :</TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right">46$</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={2}>Total :</TableCell>

                    <TableCell align="right">35$</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}


const rows = [createData("#1246234975", "", "Placed on 25 jun 34")];
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
                    Order id
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell
                    align="right"
                    className="header-cell-style"
                    style={headerCellStyle}
                  >
                    Date
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <Row key={row.product} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </BlankPage>
  );
}
