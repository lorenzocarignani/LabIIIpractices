import React, { useState } from "react";

const CountryForm2 = ({ countries, onSelectedCountry }) => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const dataFormatter = countries.map((c) => (
    <option key={c.code} value={c.code}>
      {c.name}
    </option>
  ));

  const selectCountryHandler = (e) => {
    const codeSelected = e.target.value;
    const countrySelected = countries.find(
      (country) => (country.code = codeSelected)
    );
    setSelectedCountry(countrySelected);
    onSelectedCountry(selectedCountry);
  };
  return (
    <div>
      <select
        value={selectedCountry ? selectedCountry.code : ""}
        onChange={selectCountryHandler}
      >
        {dataFormatter}
      </select>
    </div>
  );
};

export default CountryForm2;
