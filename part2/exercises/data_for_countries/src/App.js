import { useState, useEffect } from 'react';
import axios from 'axios';

function Country({ countryInfo }) {
  const langKeys = Object.keys(countryInfo.languages);
  const countryName = countryInfo.name.common;

  return (
    <>
      <h1>{countryName}</h1>
      <p>capital {countryInfo.capital[0]}</p>
      <p>population {countryInfo.population}</p>
      <h2>languages</h2>
      <ul>
        {langKeys.map(lang => <li key={lang}>{countryInfo.languages[lang]}</li>)}
      </ul>
      <img src={countryInfo.flags.png} alt={countryName} />
    </>
  );
}

function Countries({ countriesList }) {
  if (countriesList.length === 0)
    return <></>

  if (countriesList.length === 1)
    return <Country countryInfo={countriesList[0]}/>

  if (countriesList.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  return (
    <>
      <ul>
        {countriesList.map(country => <li key={country.name.official}>{country.name.common}</li>)}
      </ul>
    </>
  );
}

function App() {
  const [searchName, setSearchName] = useState('');
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    if (!searchName)
      return;
    axios
      .get(`https://restcountries.com/v3.1/name/${searchName}`)
      .then(response => {
        console.log(response.data);
        setCountriesList(response.data);
      });
  }, [searchName]);

  const handleSearch = (event) => {
    setSearchName(event.target.value);
  };

  return (
    <>
      <span>find countries </span>
      <input value={searchName} onChange={handleSearch} />
      <Countries countriesList={countriesList}/>
    </>
  );
}

export default App;
