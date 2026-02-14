import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import LoveCalculator from './components/LoveCalculator';
import Confetti from './components/Confetti';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [currentPartner, setCurrentPartner] = useState('');
  const quote = "Love looks not with the eyes, but with the mind.";

  const handleLogin = (name: string, partner: string) => {
    setCurrentUser(name);
    setCurrentPartner(partner);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to disconnect from the heart?");
    if (confirmLogout) {
      setIsAuthenticated(false);
      setCurrentUser('');
      setCurrentPartner('');
    }
  };

  if (!isAuthenticated) {
    return <LoginForm onLoginSuccess={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-love-50 overflow-hidden relative flex flex-col items-center">
      <Confetti />

<button 
  onClick={() => console.log("Ipaadi vasama sikkitiyae.")}
  className="absolute top-4 right-24 z-20 px-6 py-2.5 bg-gradient-to-r from-love-400 to-love-600 text-white font-bold rounded-full border-2 border-white/30 shadow-[0_0_15px_rgba(244,63,94,0.4)] hover:shadow-[0_0_25px_rgba(244,63,94,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 animate-pulse flex items-center gap-2"
>
  <span className="animate-bounce">📝</span>
  <span className="tracking-wide">Important Note</span>
</button>
      <button 
        onClick={handleLogout}
        className="absolute top-4 right-4 z-20 px-4 py-2 bg-white/50 backdrop-blur-md text-love-600 font-semibold rounded-full border border-love-200 hover:bg-love-100 transition-all duration-300 shadow-sm"
      >
        Logout 🚪
      </button>


      <main className="w-full max-w-2xl px-4 py-12 z-10 flex flex-col items-center text-center">
        
        <div className="animate-puff mb-8">
           <div className="text-8xl animate-bounce filter drop-shadow-xl">✨🎉✨</div>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-love-500 to-love-800 mb-6 drop-shadow-sm animate-heartbeat">
          Happy Valentine's Day!
        </h1>
        
        <p className="text-xl text-love-800 font-medium mb-8">
          Welcome, <span className="underline decoration-love-400">{currentUser}</span> & <span className="underline decoration-love-400">{currentPartner}</span>
        </p>

        <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl border-2 border-love-100 max-w-lg transform hover:rotate-1 transition-transform duration-300 relative mt-4">
          <div className="text-love-300 text-7xl absolute -top-8 -left-6 font-serif opacity-50">“</div>
          <p className="text-love-900 text-2xl font-serif italic leading-relaxed text-center">
            {quote}
          </p>
          <div className="text-love-300 text-7xl absolute -bottom-12 -right-6 font-serif opacity-50">”</div>
        </div>

        <div className="mt-12 w-full">
           <LoveCalculator name1={currentUser} name2={currentPartner} />
        </div>

      </main>

      <footer className="absolute bottom-4 text-love-300 text-sm">
        Made with magic & love ❤️
      </footer>
    </div>
  );
};

export default App;