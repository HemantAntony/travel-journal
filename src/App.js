import Header from "./components/Header"
import Location from "./components/Location"
import locationData from "./data"

function App() {
  const locations = locationData.map(item => {
    return <Location {...item}/>
  })
  return (
    <div className="App">
      <Header />
      <section className="cards">
        {locations}
      </section>
    </div>
  );
}

export default App;
