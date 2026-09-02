// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { loginUser } from "../services/authApi";

// function LoginPage() {

//   const [form, setForm] = useState({
//     email: "",
//     password: ""
//   });

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await loginUser(form);

  
//       if (!res.data.token) {
//         throw new Error("Token missing in response");
//       }

//       // 🔥 STORE ONLY TOKEN
//       localStorage.setItem("token", res.data.token);

//       // 🔥 NAVIGATE AFTER TOKEN SET
//       navigate("/dashboard");

//     } catch (err) {
//       console.error("LOGIN ERROR:", err);
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">

//       <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

//         <h2 className="text-2xl font-bold text-center mb-6">
//           Login
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">

//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full border rounded-lg p-3"
//             value={form.email}
//             onChange={(e) =>
//               setForm({ ...form, email: e.target.value })
//             }
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full border rounded-lg p-3"
//             value={form.password}
//             onChange={(e) =>
//               setForm({ ...form, password: e.target.value })
//             }
//           />

//           <button className="w-full bg-black text-white py-3 rounded-lg">
//             Login
//           </button>

//         </form>

//         <p className="text-sm text-center mt-4 text-gray-500">
//           Don’t have an account?{" "}
//           <Link to="/signup" className="text-black font-medium">
//             Signup
//           </Link>
//         </p>

//       </div>

//     </div>
//   );
// }

// export default LoginPage;


import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/authApi";
import { setAccessToken } from "../store/authStore";

function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await loginUser(form);
      const accessToken = res.data.accessToken;

      if (!accessToken) {
        throw new Error("Access token missing in response");
      }

      setAccessToken(accessToken);
      navigate("/dashboard");
    } catch {
      alert("Invalid credentials");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth-page">
      <aside className="auth-aside">
        <div className="auth-brand"><span className="brand-dot" />Pulseboard</div>
        <div className="auth-aside-content">
          <p className="page-eyebrow">Product intelligence</p>
          <h1 className="auth-aside-title mt-4">Know what moves your product.</h1>
          <p className="auth-aside-copy mt-5">A focused workspace for understanding visitors, sessions, and the moments that matter.</p>
          <div className="auth-proof"><span>Live signals</span><span>Clear decisions</span></div>
        </div>
      </aside>

      <main className="auth-form-area">
        <div className="auth-panel">
          <p className="page-eyebrow">Welcome back</p>
          <h2 className="auth-panel-heading mt-3">Sign in to Pulseboard</h2>
          <p className="auth-panel-copy mt-2">Continue to your analytics workspace.</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">

            <label className="auth-field">Email address
              <input type="email" placeholder="you@company.com" className="auth-input" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            </label>

            <label className="auth-field">Password
              <input type="password" placeholder="Enter your password" className="auth-input" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
            </label>

            <button type="submit" disabled={isSubmitting} className="auth-submit">{isSubmitting ? "Signing in..." : "Sign in"}</button>

          </form>

          <p className="auth-switch mt-7">New to Pulseboard? <Link to="/signup" className="auth-link">Create an account</Link></p>
        </div>
      </main>

    </div>
  );
}

export default LoginPage;