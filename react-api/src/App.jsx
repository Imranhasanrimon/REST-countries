import Countries from "./Components/Countries/Countries"

function App() {

  return (
    <>
      <h1 className="text-center">All Countries</h1>
      <div className="grid lg:grid-cols-4 gap-5">
        <Countries></Countries>
      </div>

    </>
  )
}

export default App
