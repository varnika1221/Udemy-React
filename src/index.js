import React from "react"
import ReactDOM from "react-dom/client"
import "./style.css"
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Recommended from "./components/Recommended";
import Saleimgae from "./components/Saleimage";
import Topics from "./components/Topics";
import Popular from "./components/Popular";
import Footer from "./components/Footer";
 
var root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<div>
  <Navbar></Navbar>
  <Categories></Categories>
  <Recommended></Recommended>
  <Saleimgae></Saleimgae>
  <Topics></Topics>
  <Popular></Popular>
  <Footer></Footer>
</div>)