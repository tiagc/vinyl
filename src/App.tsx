import Player from "./components/Player";
import Playlist from "./components/Playlist";

function App() {
  return (
    <>
      <div className="custom-padding">
        <Playlist />
      </div>
      <Player />
    </>
  );
}

export default App;
