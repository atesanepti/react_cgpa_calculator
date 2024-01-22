import React from 'react'

const ClearBtn = ({ inputClear }) => {
  return (
    <button
      onClick={inputClear}
      className="bg-green-400 hover:bg-green-500 transition-all text-slate-950 font-semibold py-1 px-4 rounded-sm"
    >
      Clear
    </button>
  );
};

export default ClearBtn