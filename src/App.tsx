import Main from "./components/Main";
import Player from "./components/Player";

function App() {
  return (
    <div>
      <Main />
      <section className="min-h-screen bot-0 justify-end">
        <Player />
      </section>
    </div>
  );
}

export default App;
