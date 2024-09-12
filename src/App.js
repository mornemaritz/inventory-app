import { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch("https://inventory-home.azurewebsites.net/weatherforecast")
      .then(response => response.json())
      .then(json => setData(json))
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>Weather</h1>
          <table border={1}>
            <thead>
              <tr>
                <th>Date</th>
                <th>TemperatureC</th>
                <th>Summary</th>
                <th>TemperatureF</th>
              </tr>
            </thead>
            <tbody>
            {data.map(w => (
              <tr key={w.temperatureC}>
                <td>{w.date}</td>
                <td>{w.temperatureC}</td>
                <td>{w.summary}</td>
                <td>{w.temperatureF}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  )
}

export default App