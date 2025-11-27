import api from "./api";

export const addCustomer = (data) => api.post("/api/customers", data);
export const getCustomers = () => api.get("/api/customers");
