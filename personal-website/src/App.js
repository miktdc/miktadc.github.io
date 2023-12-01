import "./App.css";
import Tile from "./Tile.js";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Miktad Çakmak</h1>
        <p>Welcome to My Personal Website</p>
      </header>

      <Tile
        title="About Me"
        body="I am a Computer Science student at the University of Virginia."
      />
      <Tile
        title="Projects"
        body={
          <div>
            <a href="https://miktdc.github.io/miktadc.github.io/">
              Personal Website
            </a>
            <p>(more Projects to be displayed...)</p>
          </div>
        }
      />
      <Tile
        title="Contact"
        body={
          <p>
            <a href="mailto:cbt7br@virginia.edu">cbt7br@virginia.edu</a>
            <p>+1 (703) - 225 - 9731</p>
          </p>
        }
      />
      <footer>
        <p>&copy; 2023 Miktad Cakmak. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
