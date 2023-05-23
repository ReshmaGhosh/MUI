import "./App.css";
import { useState, useEffect } from "react";

import SearchForm from "./components/form/SearchForm";
import CountryList from "./components/country/CountryList";
import TablePaginationDemo from "./components/country/TablePaginationDemo";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const result = await response.json();
        setCountries(result.slice(1, 20));
        setFilteredCountries(result.slice(1, 20));
      } catch (err) {
        alert(err.message);
      }
    };

    fetchCountries();
  }, []);

  const handleSearch = (searchTerm) => {
    const newCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(newCountries);
    setPage(0);
  };
  const startIndex = page * rowsPerPage;
  const currentCountries = filteredCountries.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 5));
    setPage(0);
  };
  return (
    <div className="App">
      <SearchForm onSearch={handleSearch} />
      <CountryList countries={currentCountries} />
      <TablePaginationDemo
        count={filteredCountries.length}
        page={page}
        onChangePage={handlePageChange}
        rowsPerPage={rowsPerPage}
        onChangeRowsPerPage={handleRowsPerPageChange}
      />
    </div>
  );
}

export default App;
