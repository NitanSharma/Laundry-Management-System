export default function Select({ label, children, ...props }) {
  return (
    <div className="mb-3">
      <label className="block text-sm mb-1">{label}</label>
      <select
        {...props}
        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#6C5CE7]"
      >
        {children}
      </select>
    </div>
  );
}
