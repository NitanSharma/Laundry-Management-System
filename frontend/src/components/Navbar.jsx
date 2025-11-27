import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#6C5CE7] text-white p-4 flex gap-6 justify-center">
      <Link to="/customers">Customers</Link>
      <Link to="/orders/create">Create Order</Link>
      <Link to="/orders">Orders</Link>
    </nav>
  );
}
