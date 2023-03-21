import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CloseIcon from "@material-ui/icons/Close";

export const Filter = ({ active, setActive }) => {
  return (
    <div className={active ? "filer-wrapper" : ""} onClick={() => setActive(false)}>
      <div
        className={active ? "filter active" : "filter"}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="filter-header">
          <h3>All products</h3>
          <CloseIcon onClick={() => setActive(false)} />
        </div>
        <Accordion defaultExpanded className="filter-block">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="filter-name">Manufacturer</div>
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
            <div className="filter-name">Max GPU Length</div>
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
            <div className="filter-name">Graphics chip</div>
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
            <div className="filter-name">Memory Size</div>
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
    </div>
  );
};
