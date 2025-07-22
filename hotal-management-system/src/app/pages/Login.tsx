'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../supabaseClient';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
    } else {
      setError(null);
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3ede6]">
      <div className="text-center">
        <div className="mb-4 flex justify-center">
          <div className="bg-green-800 text-white rounded-full p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2a10 10 0 00-7.5 16.5L12 22l7.5-3.5A10 10 0 0012 2z"
              />
              <path d="M12 8v4l3 3" />
            </svg>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-green-900 mb-6">Energy Monitoring</h1>
        <div className="bg-white rounded-2xl shadow-md p-8 w-80 mx-auto">
          <h2 className="text-xl font-semibold mb-6 text-green-900">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-left">
              <label className="block text-green-900 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="text-left">
              <label className="block text-green-900 mb-1">Password</label>
              <input
                type="password"
                placeholder="****"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-700 font-semibold"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-sm text-green-900">
            <a href="#" className="hover:underline">
              Forgot password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
