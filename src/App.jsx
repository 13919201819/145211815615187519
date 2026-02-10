import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Solutions } from "./components/Solutions";
import { AGIVision } from "./components/AGIVision";
import { UseCases } from "./components/UseCases";
import { Technology } from "./components/Technology";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <AGIVision />
        <UseCases />
        <Technology />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;



//cleaed