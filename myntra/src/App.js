import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Men from "./components/Men/Men";
import Women from "./components/Women/Women";
import Kids from "./components/Kids/Kids";
import HomeKitchen from "./components/Home&Living/HomeKitchen";
import Beauty from "./components/Beauty/Beauty";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import Cart from "./components/Cart/Cart";
import SingleProduct from "./components/Product/SingleProduct";
import AddProduct from "./components/Product/AddProduct";
import EditProduct from "./components/Product/EditProduct";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/mens" element={<Men />} />
        <Route exact path="/womens" element={<Women />} />
        <Route exact path="/kids" element={<Kids />} />
        <Route exact path="/home-living" element={<HomeKitchen />} />
        <Route exact path="/beauty" element={<Beauty />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/single-product" element={<SingleProduct />} />
        <Route exact path="/add-product" element={<AddProduct />} />
        <Route exact path="/edit-product" element={<EditProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
