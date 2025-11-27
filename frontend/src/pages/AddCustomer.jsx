import { useEffect, useState } from "react";
import CustomerForm from "../components/Customer/CustomerForm";
import CustomerTable from "../components/Customer/CustomerTable";
import { getCustomers } from "../services/customerAPI";

export default function AddCustomer() {
  const [customers, setCustomers] = useState([]);

  const load = async () => {
    const res = await getCustomers();
    setCustomers(res.data.customers);
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="p-4">
      <CustomerForm refresh={load} />
      <CustomerTable customers={customers} />
    </div>
  );
}
