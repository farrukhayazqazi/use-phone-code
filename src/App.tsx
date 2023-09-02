import usePhoneCode from './hooks/use-phone-code'

function App() {
  const { dialingCode, setCountry } = usePhoneCode('CA');

  return (
    <>
      <h1>Country Code: <b>{dialingCode}</b></h1>
      <button onClick={() => setCountry('PK')}>Switch to PK</button>
    </>
  )
}

export default App;
