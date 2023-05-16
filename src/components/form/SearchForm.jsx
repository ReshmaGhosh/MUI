import React, { useState } from "react";
import { TextField } from "@mui/material";

function SearchForm({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    onSearch(event.target.value);
  };
  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        value={search}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchForm;
