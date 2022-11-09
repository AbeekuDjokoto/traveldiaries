import NavBar from "./components/NavBar";
import Main from "./components/Main";
import data from "./components/data"

function App() {
  const Mapped = data.map((item)=> {
    return <Main  
            key={item.id}
            {...item}/>
  })
  console.log(Mapped)
  return (
    <div className="App">
      <NavBar />
      {Mapped}
    </div>
  );
}

export default App;
