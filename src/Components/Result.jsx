import React from 'react'

const Result = ({ result }) => {
  switch(result){
    case null:
      return;
    default : 
      return (
        <span className="text-center block text-xl font-semibold text-slate-950">
          CGPA :
          <span className="lining-nums text-center text-green-500 text-xl font-semibold">
            {result}
          </span>
        </span>
      );
    
  }
  
};

export default Result