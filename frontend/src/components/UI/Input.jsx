export default function Input({ label, ...props }) {
  return (
    <div className="mb-3">
      <label className="block text-sm mb-1">{label}</label>
      <input
        {...props}
        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#6C5CE7]"
      />
    </div>
  );
}
