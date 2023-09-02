# usePhoneCode - Country Dialing Code Hook

## Introduction

`usePhoneCode` is a simple and lightweight React hook that provides you with the dialing code for a specified country. This hook makes it easy to retrieve and display country dialing codes in your React application. You can also switch between different countries effortlessly.

## Installation

To use `usePhoneCode` in your React project, follow these steps:

1. Install the package using npm or yarn:

   ```sh
   npm install use-phone-code
   # or
   yarn add use-phone-code

2. Install the package using npm or yarn:

   ```sh
   import usePhoneCode from 'use-phone-code';

## Usage

### Initialization

To get started with usePhoneCode, you need to initialize it with an initial country code.

   ```sh
   const { dialingCode, setCountry } = usePhoneCode('CA');
   ```

dialingCode: The dialing code for the specified country (e.g., +1 for Canada).
setCountry: A function to change the currently selected country.

## Example

Here's a basic example of how to use usePhoneCode in your React component:

   ```sh
   import React from 'react';
   import usePhoneCode from 'use-phone-code';

   function App() {
   const { dialingCode, setCountry } = usePhoneCode('CA');

   return (
      <div>
         <h1>Country Code: <b>{dialingCode}</b></h1>
         <button onClick={() => setCountry('PK')}>Switch to PK</button>
      </div>
   );
   }

   export default App;
   ```

In this example, we've initialized the hook with the country code 'CA' (Canada) and displayed the dialing code. When the button is clicked, the country is changed to 'PK' (Pakistan), and the dialing code will update accordingly.

# API Reference
### usePhoneCode(initialCountryCode: string): { dialingCode: string, setCountry: (countryCode: string) => void }

Parameters

    initialCountryCode (string): The initial country code to set.

Returns

    dialingCode (string): The dialing code for the currently selected country.
    setCountry (function): A function to change the currently selected country. Pass the new country code as an argument to this function.


# Conclusion

usePhoneCode is a simple yet powerful React hook that allows you to easily fetch and display country dialing codes in your application. It simplifies the process of managing and switching between different countries, making it a valuable addition to your React project.

If you have any questions, encounter issues, or want to contribute to the project, please check the GitHub repository for more information.

Enjoy using usePhoneCode in your React application!
