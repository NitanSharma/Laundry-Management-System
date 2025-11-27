import { useEffect, useState } from "react";
import { getOrders, updateOrderStatus } from "../services/orderAPI";
import StatusBadge from "../components/UI/StatusBadge";

export default function OrdersList() {
  const [orders, setOrders] = useState([]);

  const load = async () => {
    const res = await getOrders();
    setOrders(res.data.orders);
  };

  const updateStatus = async (id, status) => {
    await updateOrderStatus(id, status);
    load();
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="p-4">
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-secondary text-white">
            <th className="p-2">Customer</th>
            <th>Service</th>
            <th>Qty</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o) => (
            <tr key={o._id} className="border">
              <td className="p-2">{o.customer.name}</td>
              <td>{o.service_name}</td>
              <td>{o.quantity}</td>
              <td><StatusBadge status={o.status} /></td>
              <td>
                <select
                  className="border p-1"
                  value={o.status}
                  onChange={(e) => updateStatus(o._id, e.target.value)}
                >
                  <option>Received</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                  <option>Delivered</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
