import api from "./api";

export const addCustomer = (data) => api.post("/customers", data);
export const getCustomers = () => api.get("/customers");
