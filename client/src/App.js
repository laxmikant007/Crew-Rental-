import React from "react";
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Lform from "./Lform";
import Labourform from "./Labourform";
import AdminLabour from "./AdminLabour";
import Login from "./Login";
import ContractorForm from "./ContractorForm";
import RoleSelectionPage from "./RoleSelectionPage";
import ChatHere from "./ChatHere";
import AiChat from "../src/chat/AiChat";
import RoleSelectionPageHome from "./RoleSelectionPageHome";
import WorkersPage from "./WorkersPage";
import GroupOfWorkers from "./GroupOfWorkers";
import Contractors from "./Contractors";
import EngineerPage from "./EngineerPage";
import ThreedmapHouse from "./ThreedmapHouse";
import MapForm from "./MapForm";
import ProductRegister from "./ProductRegister";
import RentalProviderForm from "./RentalProviderForm";



const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/lform" element={<Lform />} />
          <Route path="/labourform" element={<Labourform />} />
          <Route path="/adminLabour" element={<AdminLabour />} />
          <Route path="/contractorForm" element={<ContractorForm />} />
          <Route path="/roleSelectionPage" element={<RoleSelectionPage />} />
          <Route path="/chatHere" element={<ChatHere />} />
          <Route path="/aiChat" element={<AiChat />} />
          <Route path="/workersPage" element={<WorkersPage />} />
          <Route path="/groupOfWorkers" element={<GroupOfWorkers />} />
          <Route path="/contractors" element={<Contractors />} />
          <Route path="/engineerPage" element={<EngineerPage />} />
          <Route path="/threedmapHouse" element={<ThreedmapHouse />} />
          <Route path="/mapForm" element={<MapForm />} />
          <Route path="/productRegister" element={<ProductRegister />} />
          <Route path="/rentalProviderForm" element={<RentalProviderForm />} />
          <Route path="/roleSelectionPageHome" element={<RoleSelectionPageHome />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
