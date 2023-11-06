import React, { useState } from "react";

const CountryForm = ({ countries, onCountrySelected }) => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const dataFormatted = countries.map((country) => (
    <option key={country.code} value={country.code}>
      {country.name}
    </option>
  ));

  const selectCountryHandler = (event) => {
    const selectedCode = event.target.value;
    const selectedCountry = countries.find(
      (country) => country.code === selectedCode
    );
    setSelectedCountry(selectedCountry);
    onCountrySelected(selectedCountry);
  };

  return (
    <div>
      <select
        value={selectedCountry ? selectedCountry.code : ""}
        onChange={selectCountryHandler}
      >
        {dataFormatted}
      </select>
    </div>
  );
};

export default CountryForm;
