import React from 'react'

const Input = ({ placeholder, handleChange,name,value }) => {
  return (
    <input
      onChange={(e)=>{handleChange(e)}}
      type="number"
      min="0"
      max="4"
      maxLength="10"
      value={value}
      name={name}
      placeholder={placeholder}
      className="w-full mb-1 md:mb-2 block border border-slate-300 outline-none py-2 px-4 rounded-md  focus:border-slate-400"
    />
  );
};

export default Input