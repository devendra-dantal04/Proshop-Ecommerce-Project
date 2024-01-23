import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Footer, Header } from "./components";
import { Container } from "react-bootstrap";
import {HomeScreen} from "./screens";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
