import Carousel from "./components/Carousel";
import { nickCagePictures } from "./data/nick-cage-data";
import "./app.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Nick Cage Fun Time</h1>
      </header>
      <Carousel data={nickCagePictures} />
    </div>
  );
}

export default App;
