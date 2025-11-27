export default function CustomerTable({ customers }) {
  return (
    <table className="w-full bg-white rounded shadow">
      <thead>
        <tr className="bg-secondary text-white">
          <th className="p-2">Name</th>
          <th>Phone</th>
          <th>Address</th>
        </tr>
      </thead>

      <tbody>
        {customers.map((c) => (
          <tr key={c._id} className="border">
            <td className="p-2">{c.name}</td>
            <td>{c.phone}</td>
            <td>{c.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
