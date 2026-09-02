import { useState } from "react";
import { registerUser } from "../services/authApi";
import { useNavigate, Link } from "react-router-dom";

function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await registerUser(form);
      navigate("/login");
    } catch {
      alert("Signup failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth-page">
      <aside className="auth-aside">
        <div className="auth-brand"><span className="brand-dot" />Pulseboard</div>
        <div className="auth-aside-content">
          <p className="page-eyebrow">Start with clarity</p>
          <h1 className="auth-aside-title mt-4">Your product has a pulse.</h1>
          <p className="auth-aside-copy mt-5">Connect your first property and turn everyday activity into a sharper view of growth.</p>
          <div className="auth-proof"><span>Fast setup</span><span>Real-time context</span></div>
        </div>
      </aside>

      <main className="auth-form-area">
        <div className="auth-panel">
          <p className="page-eyebrow">Create workspace</p>
          <h2 className="auth-panel-heading mt-3">Start your Pulseboard account</h2>
          <p className="auth-panel-copy mt-2">Set up your analytics workspace in a minute.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          <label className="auth-field">Full name
            <input type="text" placeholder="Your name" className="auth-input" onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          </label>

          <label className="auth-field">Work email
            <input type="email" placeholder="you@company.com" className="auth-input" onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          </label>

          <label className="auth-field">Password
            <input type="password" placeholder="At least 8 characters" className="auth-input" onChange={(e) => setForm({ ...form, password: e.target.value })} required />
          </label>

          <button type="submit" disabled={isSubmitting} className="auth-submit">{isSubmitting ? "Creating workspace..." : "Create account"}</button>

        </form>
        <p className="auth-switch mt-7">Already have an account? <Link to="/login" className="auth-link">Sign in</Link></p>
        </div>
      </main>

    </div>
  );
}

export default SignupPage;