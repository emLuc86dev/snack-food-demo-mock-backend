import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";
import { SnackProvider } from "./context/SnackContext";
import { VoteProvider } from "./context/VoteContext";

function App() {
  return (
    <SnackProvider>
      <VoteProvider>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Article />} />
        </Routes>
        <Footer />
      </Router>
      <div className="site"></div>
      <ToastContainer />
      </VoteProvider>
    </SnackProvider>
  );
}

export default App;
