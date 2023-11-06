import React, { useState } from "react";
import CountryForm2 from "./components/countryForm2/CountryForm2";
const countries = [
  { code: "ARG", name: "Argentina", population: 45810000 },
  { code: "FRA", name: "Francia", population: 67750000 },
  { code: "GER", name: "Alemania", population: 83200000 },
];
const AppCountry2 = () => {
  const [country, setCountry] = useState("");

  const handleSelectedCountry = (value) => {
    setCountry(value);
  };
  return (
    <div>
      <CountryForm2
        countries={countries}
        onSelectedCountry={handleSelectedCountry}
      />
      {country && (
        <p>
          El pais {countries.name} tiene {countries.population} cantidad de
          habitantes
        </p>
      )}
    </div>
  );
};

export default AppCountry2;
