import React, { useState } from "react";
import CountryForm from "./components/countryForm/CountryForm";

const countries = [
  { code: "ARG", name: "Argentina", population: 45810000 },
  { code: "FRA", name: "Francia", population: 67750000 },
  { code: "GER", name: "Alemania", population: 83200000 },
];

const AppCountry = () => {
  const [country, setCountry] = useState(null);

  const selectedCountryHandler = (CountryValue) => {
    setCountry(CountryValue);
  };

  return (
    <div>
      <p>Seleccione el país</p>
      <CountryForm
        countries={countries}
        onCountrySelected={selectedCountryHandler}
      />
      {country && (
        <p>
          El país {country.name} posee {country.population} habitantes.
        </p>
      )}
    </div>
  );
};

export default AppCountry;
