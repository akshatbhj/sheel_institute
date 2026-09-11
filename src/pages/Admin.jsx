import { useState } from "react";
import { Lock, User, ShieldCheck, ArrowRight } from "lucide-react";
import adminLoginImage from "../assets/optimized/adminLoginArea.png";

export default function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Admin login functionality connected.");
  };

  const inputClass =
    "w-full pl-11 pr-4 py-3.5 bg-slate-900/80 border border-slate-800 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/80 transition-all";

  return (
    <div className="relative bg-slate-950 text-white min-h-screen pt-28 sm:pt-32 pb-24 flex items-center justify-center overflow-hidden">
      {/* Background Dot Matrix */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] bg-size-[24px_24px] opacity-20 pointer-events-none"
      />

      {/* Ambient Radial Glows */}
      <div
        aria-hidden="true"
        className="absolute top-20 left-1/4 -translate-x-1/2 w-96 h-96 bg-blue-600/15 blur-[130px] rounded-full pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-1/4 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none"
      />

      <div className="relative max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Unified Side-by-Side Bento Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-xl shadow-2xl overflow-hidden items-stretch">
          {/* Left / Side Stage Image Window */}
          <div className="lg:col-span-5 relative w-full min-h-65 lg:min-h-110 bg-slate-950 p-2.5 sm:p-3 flex items-stretch">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-900 border border-slate-800/80 group">
              <img
                src={adminLoginImage}
                alt="Administrative Login Area"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-slate-950/20 pointer-events-none" />
            </div>
          </div>

          {/* Right Login Form Content Area */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 backdrop-blur-md shadow-inner mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">
                  Authorized Personnel Only
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Administrative{" "}
                <span className="bg-linear-to-r from-blue-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">
                  Login Area
                </span>
              </h1>
            </div>

            <form onSubmit={handleLogin} className="space-y-5 pt-2">
              <div className="space-y-4">
                {/* Username Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="User Name *"
                    required
                    className={inputClass}
                  />
                </div>

                {/* Password Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                    <Lock size={18} />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password *"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/20 active:scale-95 text-sm cursor-pointer w-full sm:w-auto"
                >
                  <span>Login Now</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
