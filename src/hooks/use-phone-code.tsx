import { useState, useEffect } from 'react';
import codes from './codes.json';

interface CountryDialingCodes {
    [key: string]: string;
  }

function usePhoneCode(initialCountryCode: string) {

  const countryDialingCodes: CountryDialingCodes = codes;
  const [countryCode, setCountryCode] = useState<string>(initialCountryCode);
  const [dialingCode, setDialingCode] = useState<string>(countryDialingCodes[initialCountryCode || 'US']);


  // Update dialing code when the country code changes
  useEffect(() => {
    if (countryDialingCodes[countryCode]) {
      setDialingCode(countryDialingCodes[countryCode]);
    } else {
      setDialingCode('');
    }
  }, [countryCode, countryDialingCodes]);

  // Function to update the selected country code
  function setCountry(newCountryCode: string) {
    if (countryDialingCodes[newCountryCode]) {
      setCountryCode(newCountryCode);
    }
  }

  return { dialingCode, setCountry };
}

export default usePhoneCode;
