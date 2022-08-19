import './css/styles.css';
import {fetchCountries} from './fetchCountries';
const debounce = require('lodash.debounce');
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

Notiflix.Notify.init({
    fontSize: '28px',
    width: '400px',
    borderRadius: '40px',
    });

const searchCountry = document.querySelector("#search-box");
const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");

const KEY = "fe54e78640174c269f1b558d40009301";
const BASE_URL = "https://restcountries.com/v2";

// https://restcountries.com/v2/name/{name}


searchCountry.addEventListener('input',debounce(onSearchCountry,DEBOUNCE_DELAY));
