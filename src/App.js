import { Header } from "./components/Header";
import "boxicons";
import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "./components/Paginas";
import { DataProvider } from "./components/Context/DataProvider";
import Carrito from "./components/Carrito/Carrito";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <Carrito />
          <Paginas />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
