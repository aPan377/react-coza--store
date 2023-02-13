import Navbar from "./navbar/Navbar";
import Categories from "./categories/Categories";
import Products from "./products/Products";
import Footer from "./footer/Footer";

import "../css/app.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
