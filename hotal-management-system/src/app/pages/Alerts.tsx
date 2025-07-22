export default function Alerts() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Alerts</h1>
      <div className="bg-white rounded-xl p-5 shadow">
        <table className="w-full text-sm">
          <thead className="text-left text-gray-500">
            <tr><th>Timestamp</th><th>Room</th><th>Device</th><th>Message</th><th>Level</th></tr>
          </thead>
          <tbody>
            <tr className="border-t"><td>2025-07-21 08:32</td><td>101</td><td>TV-001</td><td>High power usage detected</td><td><span className="text-red-600 font-semibold">Critical</span></td></tr>
            <tr className="border-t"><td>2025-07-20 18:12</td><td>102</td><td>Thermo-01</td><td>Device offline</td><td><span className="text-yellow-600 font-semibold">Warning</span></td></tr>
            <tr className="border-t"><td>2025-07-20 10:45</td><td>103</td><td>Plug-001</td><td>Energy spike</td><td><span className="text-red-600 font-semibold">Critical</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
