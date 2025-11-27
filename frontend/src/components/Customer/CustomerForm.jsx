import { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Alert from "../UI/Alert";
import { addCustomer } from "../../services/customerAPI";

export default function CustomerForm({ refresh }) {
  const [form, setForm] = useState({ name: "", phone: "", address: "" });
  const [msg, setMsg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addCustomer(form);
      setMsg({ type: "success", text: "Customer added!" });
      refresh();
    } catch {
      setMsg({ type: "error", text: "Error adding customer" });
    }
  };

  return (
    <div className="flex justify-center ">
      <form
        onSubmit={handleSubmit}
        className=" p-4 rounded shadow mb-4 min-w-1/3 "
      >
        {msg && <Alert type={msg.type} message={msg.text} />}

        <Input
          label="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <Input
          label="Phone"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <Input
          label="Address"
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />

        <Button type="submit">Add Customer</Button>
      </form>
    </div>
  );
}
