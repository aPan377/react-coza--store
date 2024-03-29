import Navbar from "./navbar/Navbar";
import Categories from "./categories/Categories";
import Products from "./products/Products";
import Footer from "./footer/Footer";

import "../css/app.css";
import Slider from "./slider/Slider";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
