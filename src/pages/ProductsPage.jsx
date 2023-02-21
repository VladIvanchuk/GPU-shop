import { Product, Filter } from "../components";
import { useState } from "react";

import {
  InputBase,
  IconButton,
  Paper,
  FormControl,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

export const ProductsPage = () => {
  const [age, setAge] = useState("Newest");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="products-wrapper">
      <Filter />
      <div className="grid">
        <div className="sort">
          <FormControl className="sort-items">
            <Paper className="search">
              <IconButton type="button" aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                placeholder="Search"
                inputProps={{ "aria-label": "search google maps" }}
              />
            </Paper>
            <Select className="select" value={age} onChange={handleChange}>
              <MenuItem value="Newest">Newest</MenuItem>
              <MenuItem value="Highest">Highest Price</MenuItem>
              <MenuItem value="Lowest">Lowest Price</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="results">
          <h3>Results (202):</h3>
          <Button variant="contained">Nvidia</Button>
          <Button variant="contained">AMD</Button>
          <Button variant="contained">24 GB</Button>
          <Button variant="contained">16 GB</Button>
        </div>
        <div className="products">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
};
