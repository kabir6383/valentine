import React, { useState } from 'react';
import { verifyCouple, storeLoginAttempt } from '../services/authService';

interface LoginFormProps {
  onLoginSuccess: (name: string, partner: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [name, setName] = useState('');
  const [partner, setPartner] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !partner) {
      setError("Please fill in both names.");
      return;
    }

    setIsLoading(true);
    setError('');
    setStatusMessage('love.....');

    try {
      // Step 1: Store the attempt in the specified Drive Folder (Simulated)
      await storeLoginAttempt(name, partner);
      
      setStatusMessage('beauty is loading.....');
      
      // Step 2: Verify the couple against the database
      const isValid = await verifyCouple(name, partner);
      
      if (isValid) {
        setStatusMessage('success! unlocking heart.....');
        // Small delay to show success message
        setTimeout(() => {
            onLoginSuccess(name, partner);
        }, 500);
      } else {
        setError("Sorry, this pair was not found in our Love Database.");
        setStatusMessage('');
      }
    } catch (err) {
      setError("Unable to connect to Drive. Please try again.");
      setStatusMessage('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-love-50 to-love-200">
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-md border border-love-100 animate-float">
        <div className="text-center mb-8">
          <div className="inline-block p-4 rounded-full bg-love-100 text-4xl mb-2">
            ❤️
          </div>
          <h1 className="text-3xl font-bold text-love-800">Love Login</h1>
          <p className="text-love-500 text-sm mt-2">Enter your names to unlock the surprise</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-love-700 mb-1">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-love-200 focus:border-love-500 focus:ring-2 focus:ring-love-200 outline-none transition-all text-love-900 placeholder-love-300"
              placeholder="your name here..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-love-700 mb-1">Partner's Name </label>
            <input
              type="password"
              value={partner}
              onChange={(e) => setPartner(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-love-200 focus:border-love-500 focus:ring-2 focus:ring-love-200 outline-none transition-all text-love-900 placeholder-love-300"
              placeholder="you know... 😉"
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center bg-red-50 p-2 rounded animate-pulse">
              {error}
            </div>
          )}
          
          {statusMessage && !error && (
             <div className="text-love-600 text-sm text-center bg-love-50 p-2 rounded animate-pulse">
               {statusMessage}
             </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-love-600 hover:bg-love-700 text-white font-bold py-3 rounded-xl shadow-lg transform transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              "Access Heart"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;