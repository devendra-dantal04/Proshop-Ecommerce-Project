import "./App.css";
import { Footer, Header } from "./components";
import { Container } from "react-bootstrap";
import { HomeScreen, NotFound, ProductScreen } from "./screens";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} exact />
              <Route path="/product/:id" element={<ProductScreen />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
