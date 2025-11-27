export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="bg-[#6C5CE7] text-white px-4 py-2 rounded-lg hover:bg-[#A29BFE] transition"
    >
      {children}
    </button>
  );
}
