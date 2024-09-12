import { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch("https://inventory-home.azurewebsites.net/shopping-list")
    // fetch("http://localhost:5003/shopping-list")
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
          <h1>Shopping List</h1>
          <table border={1}>
            <thead>
              <tr>
                <th></th>
                <th>Item Name</th>
              </tr>
            </thead>
            <tbody>
            {data.map(d => (
              <tr key={d.id}>
                <td><input type="checkbox" defaultChecked={d.marked}></input></td>
                <td>{d.name}</td>
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