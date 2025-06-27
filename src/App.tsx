import Footer from "./components/Footer";
import Header from "./components/Header";
import Player from "./components/Player";

function App() {
  return (
    <div>
      <Header />
      <main className="pt-28">
        <Player />
      </main>
      <section className="min-h-screen bot-0 justify-end">
        <Footer />
      </section>
    </div>
  );
}

export default App;
