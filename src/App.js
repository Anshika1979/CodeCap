import React, { useState } from "react";

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import VentureStudio from "./components/VentureStudio";
import Services from "./components/Services";
import Product from "./components/Product";
import Portfolio from "./components/Portfolio";
import Insights from "./components/Insights";
import Podcast from "./components/Podcast";
import Team from "./components/Team";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const navigate = (pageName) => {
    setPage(pageName);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (page) {
      case "home":
        return <HomePage />;

      case "venture-studio":
        return <VentureStudio />;

      case "services":
        return <Services />;

      case "products":
        return <Product />;

      case "team":
        return <Team />;

      case "contact":
        return <ContactCTA />;

      case "portfolio":
        return <Portfolio />;

      case "insights":
        return <Insights />;

      case "podcast":
        return <Podcast />;

      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <Navbar onNavigate={navigate} />

      <main>
        {renderPage()}
      </main>

      <Footer onNavigate={navigate} />
    </>
  );
}

export default App;