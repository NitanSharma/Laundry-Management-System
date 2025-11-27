export default function Alert({ type, message }) {
  return (
    <div
      className={`p-2 rounded mb-3 text-sm ${
        type === "error"
          ? "bg-red-100 text-red-600"
          : "bg-green-100 text-green-600"
      }`}
    >
      {message}
    </div>
  );
}
