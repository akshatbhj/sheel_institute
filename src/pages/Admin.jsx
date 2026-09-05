import { useState } from 'react';
import { Lock, User } from 'lucide-react';
import adminLoginImage from "../assets/optimized/adminLoginArea.png";

export default function Admin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert('Admin login functionality connected.');
  };

  return (
    <div className="py-16 bg-slate-50 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Banner Image / Illustration */}
        <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm">
          <img 
            src={adminLoginImage} 
            alt="Administrative Login Area" 
            className="w-full h-auto object-cover max-h-80"
          />
        </div>

        {/* Login Form Card */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-8 md:p-12 shadow-sm space-y-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Administrative Login Area
            </h1>
            <div className="w-12 h-1 bg-amber-500 rounded-full mt-2"></div>
          </div>

          <form onSubmit={handleLogin} className="space-y-6 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Username Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <User size={18} />
                </div>
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="User Name*" 
                  required
                  className="w-full pl-11 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                />
              </div>

              {/* Password Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Lock size={18} />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password *" 
                  required
                  className="w-full pl-11 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                />
              </div>

            </div>

            <div>
              <button 
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/20 text-sm"
              >
                Login Now
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}