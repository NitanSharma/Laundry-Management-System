export default function StatusBadge({ status }) {
  const colors = {
    Received: "bg-gray-200 text-gray-700",
    "In Progress": "bg-yellow-200 text-yellow-700",
    Completed: "bg-green-200 text-green-700",
    Delivered: "bg-primary text-white",
  };

  return (
    <span className={`px-3 py-1 rounded text-xs ${colors[status]}`}>
      {status}
    </span>
  );
}
