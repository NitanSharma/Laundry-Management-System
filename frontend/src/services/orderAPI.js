import api from "./api";

export const createOrder = (data) => api.post("/orders", data);
export const getOrders = () => api.get("/orders");
export const updateOrderStatus = (id, status) =>
  api.patch(`/orders/${id}`, { status });
