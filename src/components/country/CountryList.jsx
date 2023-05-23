import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

function CountryList({ countries }) {
  return (
    <div>
      <Grid>
        {countries.map((country, index) => (
          <Card key={index}>
            <CardContent>
              <Typography variant="h5">{country.name.common}</Typography>
              <Typography variant="body2">{country.region}</Typography>
              <Typography variant="body2">
                <a href={country.maps.googleMaps}>Visit map here</a>
              </Typography>
              <img
                src={country.flags.png}
                alt="country"
                width="320px"
                height="200px"
              />
              <Typography variant="body2">
                {country.borders
                  ? country.borders.map((border, index) => (
                      <li key={index}>{border}</li>
                    ))
                  : "no border"}
              </Typography>
              <Typography variant="body2">
                {Object.keys(country.languages).map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </div>
  );
}

export default CountryList;
