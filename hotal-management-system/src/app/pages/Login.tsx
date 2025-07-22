export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f4ee]">
      <div className="bg-white shadow-lg rounded-xl p-10 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-[#1f4b3f]">Login to Energy Monitoring</h1>
        <form className="flex flex-col gap-4">
          <input type="email" placeholder="Email" className="border border-gray-300 rounded px-4 py-2 focus:outline-green-700" />
          <input type="password" placeholder="Password" className="border border-gray-300 rounded px-4 py-2 focus:outline-green-700" />
          <button type="submit" className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded">Login</button>
        </form>
        <div className="text-right mt-4">
          <a href="#" className="text-sm text-green-700 hover:underline">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}
