import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/authApi";

function LoginPage() {

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(form);

  
      if (!res.data.token) {
        throw new Error("Token missing in response");
      }

      // 🔥 STORE ONLY TOKEN
      localStorage.setItem("token", res.data.token);

      // 🔥 NAVIGATE AFTER TOKEN SET
      navigate("/dashboard");

    } catch (err) {
      console.error("LOGIN ERROR:", err);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg p-3"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg p-3"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button className="w-full bg-black text-white py-3 rounded-lg">
            Login
          </button>

        </form>

        <p className="text-sm text-center mt-4 text-gray-500">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-black font-medium">
            Signup
          </Link>
        </p>

      </div>

    </div>
  );
}

export default LoginPage;