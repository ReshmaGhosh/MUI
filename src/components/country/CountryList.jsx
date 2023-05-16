import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function CountryList({ countries }) {
  return (
    <div>
      {countries.map((country, index) => (
        <Card key={index}>
          <CardContent>
            <Typography variant="h5">{country.name.common}</Typography>
            <Typography variant="body2">{country.region}</Typography>
            <img
              src={country.flags[0]}
              alt={`${country.name.common} flag`}
              width="100"
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default CountryList;
