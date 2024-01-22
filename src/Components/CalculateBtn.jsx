import React from 'react'

const CalculateBtn = ({ calculateResult }) => {
  return (
    <button
      onClick={calculateResult}
      className="bg-green-400 hover:bg-green-500 transition-all text-slate-950 font-semibold py-1 px-10 rounded-sm"
    >
      =
    </button>
  );
};

export default CalculateBtn