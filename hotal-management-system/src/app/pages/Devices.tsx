export default function Devices() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Devices</h1>
        <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded">Add Device</button>
      </div>
      <div className="bg-white rounded-xl p-5 shadow">
        <table className="w-full text-sm">
          <thead className="text-left text-gray-500">
            <tr><th>Device Name</th><th>Type</th><th>Room</th><th>Status</th></tr>
          </thead>
          <tbody>
            <tr className="border-t"><td>Plug-001</td><td>Smart Plug</td><td>101</td><td><span className="text-green-600 font-semibold">Online</span></td></tr>
            <tr className="border-t"><td>Thermo-01</td><td>Thermostat</td><td>102</td><td><span className="text-yellow-600 font-semibold">Offline</span></td></tr>
            <tr className="border-t"><td>TV-001</td><td>Smart TV</td><td>103</td><td><span className="text-green-600 font-semibold">Online</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
