import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const Filter = () => {
  return (
    <div className="filter">
      <h3>All products</h3>
      <Accordion defaultExpanded className="filter-block">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div>Manufacturer</div>
        </AccordionSummary>
        <AccordionDetails className="filter-items">
          <FormGroup aria-label="position">
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Nvidia"
              labelPlacement="end"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Asus"
              labelPlacement="end"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="AMD"
              labelPlacement="end"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="MSI"
              labelPlacement="end"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="ACER"
              labelPlacement="end"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Intel"
              labelPlacement="end"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded className="filter-block">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div>Max GPU Length</div>
        </AccordionSummary>
        <AccordionDetails className="filter-items">
          <FormGroup aria-label="position">
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="24 GB"
              labelPlacement="end"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="20 GB"
              labelPlacement="end"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="16 GB"
              labelPlacement="end"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="12 GB"
              labelPlacement="end"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="10 GB"
              labelPlacement="end"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="8 GB"
              labelPlacement="end"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="6 GB"
              labelPlacement="end"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="4 GB"
              labelPlacement="end"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded className="filter-block">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div>Graphics chip</div>
        </AccordionSummary>
        <AccordionDetails className="filter-items">
          <FormGroup aria-label="position">
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="24 GB"
              labelPlacement="end"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="20 GB"
              labelPlacement="end"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="16 GB"
              labelPlacement="end"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="12 GB"
              labelPlacement="end"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="10 GB"
              labelPlacement="end"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="8 GB"
              labelPlacement="end"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="6 GB"
              labelPlacement="end"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="4 GB"
              labelPlacement="end"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded className="filter-block">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div>Memory Size</div>
        </AccordionSummary>
        <AccordionDetails className="filter-items">
          <FormGroup aria-label="position">
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="24 GB"
              labelPlacement="end"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="20 GB"
              labelPlacement="end"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="16 GB"
              labelPlacement="end"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="12 GB"
              labelPlacement="end"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="10 GB"
              labelPlacement="end"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="8 GB"
              labelPlacement="end"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="6 GB"
              labelPlacement="end"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="4 GB"
              labelPlacement="end"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
