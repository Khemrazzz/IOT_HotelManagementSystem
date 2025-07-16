import { useState } from 'react';
import { supabase } from '../config/supabaseClient';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      alert(error.message);
      return;
    }
    alert('Check your inbox to confirm your email!');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border p-2 w-full"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border p-2 w-full"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
