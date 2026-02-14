import React, { useState } from 'react';

interface LoveCalculatorProps {
  name1: string;
  name2: string;
}

const LoveCalculator: React.FC<LoveCalculatorProps> = ({ name1, name2 }) => {
  const [percentage, setPercentage] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateLove = () => {
    setIsCalculating(true);
    
    // Simulate calculation time for suspense
    setTimeout(() => {
      // Requirement: Minimum 90%, Maximum 100%
      const randomHighScore = Math.floor(Math.random() * (100 - 90 + 1)) + 90;
      setPercentage(randomHighScore);
      setIsCalculating(false);
    }, 2000);
  };

  return (
    <div className="w-full max-w-sm mx-auto mt-8 bg-white/90 rounded-xl shadow-md p-6 border border-love-200">
      <h2 className="text-xl font-bold text-love-800 text-center mb-4">Love Calculator</h2>
      
      {!percentage && !isCalculating && (
        <div className="text-center">
          <button 
            onClick={calculateLove}
            className="group relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-love-900 rounded-full group bg-gradient-to-br from-love-400 to-love-600 group-hover:from-love-400 group-hover:to-love-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-love-200"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-full group-hover:bg-opacity-0">
              💘 Calculate Affinity
            </span>
          </button>
        </div>
      )}

      {isCalculating && (
        <div className="flex flex-col items-center justify-center space-y-2">
           <div className="w-16 h-16 border-4 border-love-200 border-t-love-600 rounded-full animate-spin"></div>
           <p className="text-love-500 text-sm animate-pulse">Analyzing hearts...</p>
        </div>
      )}

      {percentage !== null && (
        <div className="text-center animate-puff">
          <div className="relative w-32 h-32 mx-auto flex items-center justify-center bg-love-50 rounded-full border-4 border-love-400 mb-2 shadow-inner">
             <span className="text-4xl font-extrabold text-love-600">{percentage}%</span>
          </div>
          <h3 className="text-lg font-bold text-love-900">Beautiful Pair!</h3>
          <p className="text-sm text-love-600 italic mt-1">
            {name1} & {name2} are meant to be.
          </p>
        </div>
      )}
    </div>
  );
};

export default LoveCalculator;