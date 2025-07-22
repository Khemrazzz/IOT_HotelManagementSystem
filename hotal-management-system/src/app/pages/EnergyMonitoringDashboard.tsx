import React from 'react';
import { Home, Grid3X3, Clock, AlertTriangle, Zap, Triangle } from 'lucide-react';

const EnergyMonitoringDashboard = () => {
  const rooms = [
    { id: 101, status: 'Occupied', energyUsage: '15.2 kWh' },
    { id: 102, status: 'Vacant', energyUsage: '8.7 kWh' },
    { id: 103, status: 'Occupied', energyUsage: '12.5 kWh' },
    { id: 104, status: 'Vacant', energyUsage: '18.3 kWh' },
    { id: 105, status: 'Occupied', energyUsage: '4.9 kWh' },
  ];

  const devices = [
    { name: 'Light', room: 'Room 101', status: 'On' },
    { name: 'Smart Plug', room: 'Room 101', status: 'Off' },
    { name: 'Air Conditioner', room: 'Room 102', status: 'On' },
    { name: 'Light', room: 'Room 103', status: 'Off' },
    { name: 'Television', room: 'Room 104', status: 'On' },
  ];

  const alerts = [
    { type: 'High energy usage', room: 104 },
    { type: 'Device offline', room: 101 },
  ];

  const StatCard = ({ icon: Icon, title, value, bgColor }: { icon: React.ElementType; title: string; value: string; bgColor: string; }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="flex items-center space-x-3">
        <div className={`p-3 rounded-lg ${bgColor}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );

  const StatusBadge = ({ status }: { status: string; }) => {
    const isOccupied = status === 'Occupied';
    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
        isOccupied 
          ? 'bg-green-100 text-green-800' 
          : 'bg-gray-100 text-gray-600'
      }`}>
        {status}
      </span>
    );
  };

  const DeviceStatus = ({ status }: { status: string; }) => (
    <span className={`text-sm font-medium ${
      status === 'On' ? 'text-green-600' : 'text-gray-500'
    }`}>
      {status}
    </span>
  );

  const AlertItem = ({ alert }: { alert: { type: string; room: number; }; }) => (
    <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
      <span className="text-sm text-amber-800 flex-1">{alert.type}</span>
      <span className="text-sm font-medium text-amber-800">{alert.room}</span>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-green-800 text-white relative">
        <div className="p-6">
          <h1 className="text-xl font-bold">Energy Monitoring Admin</h1>
        </div>
        <nav className="mt-8">
          <div className="px-6">
            <div className="flex items-center space-x-3 p-3 bg-green-700 rounded-lg">
              <Home className="w-5 h-5" />
              <span className="font-medium">Dashboard</span>
            </div>
          </div>
          <div className="mt-2 px-6">
            <div className="flex items-center space-x-3 p-3 hover:bg-green-700 rounded-lg cursor-pointer">
              <Grid3X3 className="w-5 h-5" />
              <span>Rooms</span>
            </div>
          </div>
          <div className="mt-2 px-6">
            <div className="flex items-center space-x-3 p-3 hover:bg-green-700 rounded-lg cursor-pointer">
              <Clock className="w-5 h-5" />
              <span>Devices</span>
            </div>
          </div>
          <div className="mt-2 px-6">
            <div className="flex items-center space-x-3 p-3 hover:bg-green-700 rounded-lg cursor-pointer">
              <AlertTriangle className="w-5 h-5" />
              <span>Alerts</span>
            </div>
          </div>
        </nav>
        {/* User Avatar */}
        <div className="absolute bottom-6 right-6">
          <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-amber-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard 
            icon={Grid3X3}
            title="Rooms"
            value="12"
            bgColor="bg-green-600"
          />
          <StatCard 
            icon={Clock}
            title="Devices"
            value="34"
            bgColor="bg-green-600"
          />
          <StatCard 
            icon={Zap}
            title="Total Energy Usage"
            value="245 kWh"
            bgColor="bg-green-600"
          />
          <StatCard 
            icon={Triangle}
            title="Active"
            value="3"
            bgColor="bg-green-600"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Rooms Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">Rooms</h2>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-3 text-sm font-medium text-gray-500">Room</th>
                      <th className="text-left py-3 text-sm font-medium text-gray-500">Status</th>
                      <th className="text-left py-3 text-sm font-medium text-gray-500">Energy Usage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rooms.map((room, index) => (
                      <tr key={room.id} className={index !== rooms.length - 1 ? 'border-b border-gray-50' : ''}>
                        <td className="py-4 text-sm font-medium text-gray-900">{room.id}</td>
                        <td className="py-4">
                          <StatusBadge status={room.status} />
                        </td>
                        <td className="py-4 text-sm text-gray-600">{room.energyUsage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Devices Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">Devices</h2>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-3 text-sm font-medium text-gray-500">Device</th>
                      <th className="text-left py-3 text-sm font-medium text-gray-500">Room</th>
                      <th className="text-left py-3 text-sm font-medium text-gray-500">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {devices.map((device, index) => (
                      <tr key={index} className={index !== devices.length - 1 ? 'border-b border-gray-50' : ''}>
                        <td className="py-4 text-sm font-medium text-gray-900">{device.name}</td>
                        <td className="py-4 text-sm text-gray-600">{device.room}</td>
                        <td className="py-4">
                          <DeviceStatus status={device.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Alerts Section */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">Alerts</h2>
            </div>
            <div className="p-6 space-y-3">
              {alerts.map((alert, index) => (
                <AlertItem key={index} alert={alert} />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">Alerts</h2>
            </div>
            <div className="p-6 space-y-3">
              {alerts.map((alert, index) => (
                <AlertItem key={index} alert={alert} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyMonitoringDashboard;
