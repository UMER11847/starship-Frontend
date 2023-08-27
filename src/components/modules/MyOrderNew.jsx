import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

import SpanningTable from "./Table";
import "./Demo.css";

export default function BasicAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Order# 74581254k</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Placed on 7 jun 23</Typography>
          <Divider variant="middle" />

          <Typography>
            Address,
            <br />
            address : sc15 road12 <br /> city: NYC <br /> state: Staten Island.{" "}
            <br /> country: USA
            <br />
            zip code: 1452-78
          </Typography>
          <Divider variant="middle" />

          <SpanningTable />
          <Typography>
            Order Status:
            <br />
            Payment Confirmed
            <br />
            Note: this is our store we can delivered item whenever we want
            lolllllllll
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
