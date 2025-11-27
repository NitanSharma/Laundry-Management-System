import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddCustomer from "./pages/AddCustomer";
import CreateOrder from "./pages/CreateOrder";
import OrdersList from "./pages/OrderList";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/customers" element={<AddCustomer />} />
        <Route path="/orders/create" element={<CreateOrder />} />
        <Route path="/orders" element={<OrdersList />} />
      </Routes>
    </BrowserRouter>
  );
}
