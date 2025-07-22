import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../config/supabaseClient';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return alert(error.message);
    localStorage.setItem('token', data.session?.access_token || '');
    navigate('/dashboard');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-600 to-blue-400">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Hotel EMS Login</h2>
        <input type="email" placeholder="Email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin} className="btn-primary w-full mt-4">Login</button>
        <p className="text-sm text-center mt-4 text-gray-500">Don't have an account? <a href="/register" className="text-blue-600">Register</a></p>
      </div>
    </div>
  );
};

export default Login;
