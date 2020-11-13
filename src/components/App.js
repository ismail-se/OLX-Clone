import "../style/App.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Nav from "./Nav";
import Scroll from "./Scroll";

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Scroll showScroll={250} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
