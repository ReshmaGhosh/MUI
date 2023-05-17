import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

import SearchForm from "./components/form/SearchForm";
import CountryList from "./components/country/CountryList";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://restcountries.com/v3.1/all")
  //     .then((response) => {
  //       setCountries(response.data);
  //       setFilteredCountries(response.data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

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
  };

  return (
    <div className="App">
      <SearchForm onSearch={handleSearch} />
      <CountryList countries={filteredCountries} />
    </div>
  );
}

export default App;
