import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#1f4b3f] text-white p-6">
      <h2 className="text-2xl font-bold mb-8">Energy Monitoring</h2>
      <nav className="flex flex-col gap-4">
        <Link href="/" className="hover:text-green-300">Dashboard</Link>
        <Link href="/rooms" className="hover:text-green-300">Rooms</Link>
        <Link href="/devices" className="hover:text-green-300">Devices</Link>
        <Link href="/alerts" className="hover:text-green-300">Alerts</Link>
      </nav>
    </aside>
  );
}
