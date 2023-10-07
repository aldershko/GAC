import React from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen font-poppins bg-white min-w-screen">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
