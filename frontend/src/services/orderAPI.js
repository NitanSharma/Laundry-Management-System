import api from "./api";

export const createOrder = (data) => api.post("/api/orders", data);
export const getOrders = () => api.get("/api/orders");
export const updateOrderStatus = (id, status) =>
  api.patch(`/api/orders/${id}`, { status });
