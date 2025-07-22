"use client";
import React, { useState } from 'react';
import {
  Home,
  Grid3X3,
  Clock,
  Monitor,
  AlertTriangle,
  FileBarChart,
  Settings,
  Plus,
  Edit2,
  Trash2,
  Power,
  Activity,
  Zap,
  Eye,
  Filter,
  Search,
  CheckCircle,
  XCircle,
  WifiOff,
  TrendingUp,
  TrendingDown,
  Users,
  Building,
  Thermometer,
  Lightbulb,
  Tv,
  Fan,
  Coffee,
  Laptop,
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

/**
 * Full admin portal used on the landing page. This component implements
 * all of the dashboard views (dashboard, rooms, devices, live monitor,
 * alerts, reports and settings) in a single file. The data is currently
 * mocked and can be swapped with real API calls when needed.
 */
const EnergyAdminPortal = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('all');
  const [selectedSeverity, setSelectedSeverity] = useState('all');

  // Sample data used throughout the portal
  const [rooms, setRooms] = useState([
    { id: 1, name: 'Conference Room A', floor: '1st Floor', devices: ['Light', 'AC', 'Projector'], totalDevices: 3, status: 'active' },
    { id: 2, name: 'Office 101', floor: '1st Floor', devices: ['Light', 'Computer'], totalDevices: 2, status: 'active' },
    { id: 3, name: 'Kitchen', floor: '1st Floor', devices: ['Refrigerator', 'Microwave', 'Light'], totalDevices: 3, status: 'active' },
    { id: 4, name: 'Meeting Room B', floor: '2nd Floor', devices: ['Light', 'TV'], totalDevices: 2, status: 'inactive' },
    { id: 5, name: 'Office 201', floor: '2nd Floor', devices: ['Light', 'AC', 'Computer'], totalDevices: 3, status: 'active' },
  ]);

  const [devices] = useState([
    { id: 1, name: 'AC Unit 1', type: 'Air Conditioner', room: 'Conference Room A', power: '2.1 kW', status: 'online', icon: Fan },
    { id: 2, name: 'LED Light 1', type: 'Light', room: 'Conference Room A', power: '0.02 kW', status: 'online', icon: Lightbulb },
    { id: 3, name: 'Projector 1', type: 'Projector', room: 'Conference Room A', power: '0.3 kW', status: 'offline', icon: Monitor },
    { id: 4, name: 'Computer 1', type: 'Computer', room: 'Office 101', power: '0.15 kW', status: 'online', icon: Laptop },
    { id: 5, name: 'LED Light 2', type: 'Light', room: 'Office 101', power: '0.02 kW', status: 'online', icon: Lightbulb },
    { id: 6, name: 'Refrigerator', type: 'Appliance', room: 'Kitchen', power: '0.5 kW', status: 'online', icon: Coffee },
    { id: 7, name: 'Microwave', type: 'Appliance', room: 'Kitchen', power: '1.2 kW', status: 'offline', icon: Coffee },
    { id: 8, name: 'TV Unit 1', type: 'Television', room: 'Meeting Room B', power: '0.2 kW', status: 'online', icon: Tv },
  ]);

  const [alerts, setAlerts] = useState([
    { id: 1, message: 'AC in Conference Room A consuming > 2kW!', severity: 'high', room: 'Conference Room A', timestamp: '2 minutes ago', acknowledged: false },
    { id: 2, message: 'Projector 1 went offline', severity: 'medium', room: 'Conference Room A', timestamp: '5 minutes ago', acknowledged: false },
    { id: 3, message: 'Microwave power spike detected', severity: 'low', room: 'Kitchen', timestamp: '10 minutes ago', acknowledged: true },
    { id: 4, message: 'Room temperature above threshold', severity: 'medium', room: 'Office 201', timestamp: '15 minutes ago', acknowledged: false },
  ]);

  const energyTrendsData = [
    { time: '00:00', energy: 120 },
    { time: '04:00', energy: 80 },
    { time: '08:00', energy: 200 },
    { time: '12:00', energy: 300 },
    { time: '16:00', energy: 280 },
    { time: '20:00', energy: 220 },
    { time: '24:00', energy: 150 },
  ];

  const roomConsumptionData = [
    { room: 'Conf. A', consumption: 45 },
    { room: 'Kitchen', consumption: 38 },
    { room: 'Office 101', consumption: 25 },
    { room: 'Meeting B', consumption: 20 },
    { room: 'Office 201', consumption: 35 },
  ];

  const deviceTypeData = [
    { name: 'AC Units', value: 45, color: '#0088FE' },
    { name: 'Lights', value: 20, color: '#00C49F' },
    { name: 'Computers', value: 15, color: '#FFBB28' },
    { name: 'Appliances', value: 20, color: '#FF8042' },
  ];

  const liveData = [
    { time: '14:00', power: 2.1 },
    { time: '14:05', power: 2.3 },
    { time: '14:10', power: 2.0 },
    { time: '14:15', power: 2.4 },
    { time: '14:20', power: 2.2 },
    { time: '14:25', power: 2.6 },
  ];

  const navigation = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'rooms', name: 'Rooms', icon: Grid3X3 },
    { id: 'devices', name: 'Devices', icon: Clock },
    { id: 'monitor', name: 'Live Monitor', icon: Monitor },
    { id: 'alerts', name: 'Alerts', icon: AlertTriangle },
    { id: 'reports', name: 'Reports', icon: FileBarChart },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  const StatCard = ({ icon: Icon, title, value, subtitle, trend, trendUp = true }: {
    icon: React.ElementType;
    title: string;
    value: string;
    subtitle?: string;
    trend?: string;
    trendUp?: boolean;
  }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-3 rounded-lg bg-green-100">
            <Icon className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
          </div>
        </div>
        {trend && (
          <div className={`flex items-center space-x-1 ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
            {trendUp ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            <span className="text-sm font-medium">{trend}</span>
          </div>
        )}
      </div>
    </div>
  );

  const StatusBadge = ({ status }: { status: string }) => {
    const styles: Record<string, string> = {
      online: 'bg-green-100 text-green-800',
      offline: 'bg-red-100 text-red-800',
      active: 'bg-green-100 text-green-800',
      inactive: 'bg-gray-100 text-gray-600',
      high: 'bg-red-100 text-red-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-blue-100 text-blue-800',
    };

    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status] || styles.default}`}>{status}</span>
    );
  };

  const acknowledgeAlert = (alertId: number) => {
    setAlerts(alerts.map((alert) => (alert.id === alertId ? { ...alert, acknowledged: true } : alert)));
  };

  /** Dashboard Page */
  const DashboardPage = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="text-sm text-gray-500">Last updated: Just now</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard icon={Zap} title="Total Energy Today" value="245 kWh" subtitle="$24.50 cost" trend="+12%" trendUp={false} />
        <StatCard icon={Building} title="Active Rooms" value="12" trend="+2" />
        <StatCard icon={Activity} title="Online Devices" value="28/34" subtitle="6 offline" trend="82%" />
        <StatCard icon={AlertTriangle} title="Active Alerts" value="3" trend="-1" trendUp={true} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Energy Trends (24h)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={energyTrendsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="energy" stroke="#059669" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Room Consumption</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={roomConsumptionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="room" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="consumption" fill="#059669" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Highest Consuming Devices</h3>
          <div className="space-y-3">
            {devices.slice(0, 5).map((device) => (
              <div key={device.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <device.icon className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="font-medium text-gray-900">{device.name}</p>
                    <p className="text-sm text-gray-500">{device.room}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{device.power}</p>
                  <StatusBadge status={device.status} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Device Types Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={deviceTypeData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} dataKey="value">
                {deviceTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {deviceTypeData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm text-gray-600">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  /** Rooms Page */
  const RoomsPage = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Rooms Management</h1>
        <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          <Plus className="w-4 h-4" />
          <span>Add Room</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search rooms..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 text-sm font-medium text-gray-500">Room Name</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-500">Floor</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-500">Devices</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-500">Status</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((room) => (
                  <tr key={room.id} className="border-b border-gray-50">
                    <td className="py-4 font-medium text-gray-900">{room.name}</td>
                    <td className="py-4 text-gray-600">{room.floor}</td>
                    <td className="py-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-600">{room.totalDevices} devices</span>
                        <div className="flex space-x-1">
                          {room.devices.slice(0, 3).map((device, idx) => (
                            <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                              {device}
                            </span>
                          ))}
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <StatusBadge status={room.status} />
                    </td>
                    <td className="py-4">
                      <div className="flex space-x-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  /** Devices Page */
  const DevicesPage = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Devices Management</h1>
        <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          <Plus className="w-4 h-4" />
          <span>Add Device</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search devices..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={selectedRoom}
              onChange={(e) => setSelectedRoom(e.target.value)}
            >
              <option value="all">All Rooms</option>
              {rooms.map((room) => (
                <option key={room.id} value={room.name}>
                  {room.name}
                </option>
              ))}
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 text-sm font-medium text-gray-500">Device</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-500">Type</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-500">Room</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-500">Current Power</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-500">Status</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody>
                {devices.map((device) => (
                  <tr key={device.id} className="border-b border-gray-50">
                    <td className="py-4">
                      <div className="flex items-center space-x-3">
                        <device.icon className="w-5 h-5 text-gray-600" />
                        <span className="font-medium text-gray-900">{device.name}</span>
                      </div>
                    </td>
                    <td className="py-4 text-gray-600">{device.type}</td>
                    <td className="py-4 text-gray-600">{device.room}</td>
                    <td className="py-4 font-medium text-gray-900">{device.power}</td>
                    <td className="py-4">
                      <StatusBadge status={device.status} />
                    </td>
                    <td className="py-4">
                      <div className="flex space-x-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-green-600 hover:bg-green-50 rounded">
                          <Power className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  /** Live Monitor Page */
  const LiveMonitorPage = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Live Monitoring</h1>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2 text-green-600">
            <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
            <span className="text-sm">Live</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard icon={Activity} title="Current Load" value="5.2 kW" subtitle="Real-time" />
        <StatCard icon={Thermometer} title="Avg Temperature" value="22°C" subtitle="All rooms" />
        <StatCard icon={Users} title="Occupied Rooms" value="8/12" subtitle="Active now" />
        <StatCard icon={WifiOff} title="Offline Devices" value="3" subtitle="Need attention" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Real-time Power Consumption</h3>
            <select className="px-3 py-1 border border-gray-300 rounded text-sm">
              <option>Last 30 minutes</option>
              <option>Last hour</option>
              <option>Last 4 hours</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={liveData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="power" stroke="#059669" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Room Status Monitor</h3>
          <div className="space-y-3">
            {rooms.slice(0, 5).map((room) => (
              <div key={room.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Building className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="font-medium text-gray-900">{room.name}</p>
                    <p className="text-sm text-gray-500">{room.totalDevices} devices</p>
                  </div>
                </div>
                <div className="text-right">
                  <StatusBadge status={room.status} />
                  <p className="text-sm text-gray-500 mt-1">
                    {Math.floor(Math.random() * 5) + 1}.{Math.floor(Math.random() * 10)} kW
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  /** Alerts Page */
  const AlertsPage = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Alert Management</h1>
        <div className="flex space-x-2">
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={selectedSeverity}
            onChange={(e) => setSelectedSeverity(e.target.value)}
          >
            <option value="all">All Severities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-6">
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`p-4 rounded-lg border-l-4 ${
                  alert.severity === 'high'
                    ? 'bg-red-50 border-red-500'
                    : alert.severity === 'medium'
                    ? 'bg-yellow-50 border-yellow-500'
                    : 'bg-blue-50 border-blue-500'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle
                      className={`w-5 h-5 ${
                        alert.severity === 'high'
                          ? 'text-red-600'
                          : alert.severity === 'medium'
                          ? 'text-yellow-600'
                          : 'text-blue-600'
                      }`}
                    />
                    <div>
                      <p className="font-medium text-gray-900">{alert.message}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <StatusBadge status={alert.severity} />
                        <span className="text-sm text-gray-500">Room: {alert.room}</span>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">{alert.timestamp}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {alert.acknowledged ? (
                      <div className="flex items-center space-x-1 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm">Acknowledged</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => acknowledgeAlert(alert.id)}
                        className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
                      >
                        Acknowledge
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  /** Reports Page */
  const ReportsPage = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Energy Reports</h1>
        <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          <FileBarChart className="w-4 h-4" />
          <span>Generate Report</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
          <FileBarChart className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold mb-2">Daily Report</h3>
          <p className="text-gray-600 text-sm mb-4">Energy consumption by day</p>
          <button className="bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200">Download PDF</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
          <FileBarChart className="w-8 h-8 text-blue-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold mb-2">Monthly Report</h3>
          <p className="text-gray-600 text-sm mb-4">Monthly energy trends</p>
          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200">Download PDF</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
          <FileBarChart className="w-8 h-8 text-purple-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold mb-2">Cost Analysis</h3>
          <p className="text-gray-600 text-sm mb-4">Billing and cost breakdown</p>
          <button className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-200">Download PDF</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Weekly Consumption Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={roomConsumptionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="room" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="consumption" fill="#059669" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Energy Efficiency Metrics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
              <span className="text-gray-700">Peak Hour Efficiency</span>
              <span className="font-bold text-green-600">87%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
              <span className="text-gray-700">Off-Peak Savings</span>
              <span className="font-bold text-blue-600">23%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
              <span className="text-gray-700">Monthly Cost Reduction</span>
              <span className="font-bold text-purple-600">$145</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
              <span className="text-gray-700">Carbon Footprint</span>
              <span className="font-bold text-yellow-600">-12%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  /** Settings Page */
  const SettingsPage = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">System Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Alert Thresholds</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">High Power Consumption (kW)</label>
              <input
                type="number"
                defaultValue="2.0"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Device Offline Timeout (minutes)</label>
              <input
                type="number"
                defaultValue="5"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Temperature Threshold (°C)</label>
              <input
                type="number"
                defaultValue="25"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Email Notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">SMS Alerts</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Push Notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Data Retention</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Keep historical data for (days)</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>30 days</option>
                <option>90 days</option>
                <option>180 days</option>
                <option>365 days</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Backup Frequency</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">System Information</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Version:</span>
              <span className="font-medium">v2.1.0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Last Update:</span>
              <span className="font-medium">2 days ago</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Database Size:</span>
              <span className="font-medium">2.3 GB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Active Connections:</span>
              <span className="font-medium">34 devices</span>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-200">
            <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700">Reset All Settings</button>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Save Settings</h3>
            <p className="text-gray-600">Changes will be applied immediately</p>
          </div>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">Save Changes</button>
        </div>
      </div>
    </div>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'rooms':
        return <RoomsPage />;
      case 'devices':
        return <DevicesPage />;
      case 'monitor':
        return <LiveMonitorPage />;
      case 'alerts':
        return <AlertsPage />;
      case 'reports':
        return <ReportsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-green-800 text-white relative">
        <div className="p-6">
          <h1 className="text-xl font-bold">Energy Monitoring Admin</h1>
        </div>
        <nav className="mt-8">
          {navigation.map((item) => (
            <div key={item.id} className="px-6 mb-2">
              <button
                onClick={() => setCurrentPage(item.id)}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                  currentPage === item.id ? 'bg-green-700 text-white' : 'hover:bg-green-700 text-green-100'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
                {item.id === 'alerts' && alerts.filter((a) => !a.acknowledged).length > 0 && (
                  <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    {alerts.filter((a) => !a.acknowledged).length}
                  </span>
                )}
              </button>
            </div>
          ))}
        </nav>

        {/* User Avatar */}
        <div className="absolute bottom-6 right-6">
          <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-amber-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">{renderCurrentPage()}</div>
    </div>
  );
};

export default EnergyAdminPortal;
