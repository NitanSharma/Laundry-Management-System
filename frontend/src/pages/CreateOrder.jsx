import { useEffect, useState } from "react";
import Input from "../components/UI/Input";
import Select from "../components/UI/Select";
import Button from "../components/UI/Button";
import Alert from "../components/UI/Alert";
import { getCustomers } from "../services/customerAPI";
import { createOrder } from "../services/orderAPI";
import { useNavigate } from "react-router-dom";


export default function CreateOrder() {
  const [customers, setCustomers] = useState([]);
  const [msg, setMsg] = useState(null);
  const [form, setForm] = useState({
    customer_id: "",
    service_name: "",
    quantity: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    getCustomers().then((res) => setCustomers(res.data.customers));
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    try {
      await createOrder(form);
      setMsg({ type: "success", text: "Order created!" });
      setTimeout(() => {
        navigate('/orders')
      }, 2000);
    } catch {
      setMsg({ type: "error", text: "Error creating order" });
    }
  };

  return (
    <div className="flex justify-center">

      <form onSubmit={submit} className="p-4 mt-4 bg-white rounded shadow min-w-1/3">
      {msg && <Alert type={msg.type} message={msg.text} />}

      <Select
        label="Select Customer"
        onChange={(e) => setForm({ ...form, customer_id: e.target.value })}
      >
        <option value="">Choose...</option>
        {customers.map((c) => (
          <option key={c._id} value={c._id}>{c.name}</option>
        ))}
      </Select>

      <Input label="Service Name" onChange={(e) => setForm({ ...form, service_name: e.target.value })} />
      <Input label="Quantity" type="number" onChange={(e) => setForm({ ...form, quantity: e.target.value })} />

      <Button type="submit">Create Order</Button>
    </form>
    </div>
    
  );
}
