import React, { useEffect, useState } from "react";
import Input from "./Input";
import CalculateBtn from "./CalculateBtn";
import ClearBtn from "./ClearBtn";
import Result from "./Result";

const Calcutaor = () => {
  let [input, setInput] = useState({
    "1st": "",
    "2nd": "",
    "3rd": "",
    "4th": "",
    "5th": "",
    "6th": "",
    "7th": "",
    "8th": "",
  });
  let [result, setResult] = useState(null);
  const handleChange = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;

    setInput((preInput) => {
      let newInput = { ...preInput, [inputName]: inputValue };
      let newInput_2 = { ...preInput, [inputName]: "" };
      if (Number(newInput[`${inputName}`]) < 5) {
        return newInput;
      }
      return newInput_2;
    });
  };

  const calculateResult = () => {
    let cg_1 = (Number(input["1st"]) * 5) / 100;
    let cg_2 = (Number(input["2nd"]) * 5) / 100;
    let cg_3 = (Number(input["3rd"]) * 10) / 100;
    let cg_4 = (Number(input["4th"]) * 10) / 100;
    let cg_5 = (Number(input["5th"]) * 20) / 100;
    let cg_6 = (Number(input["6th"]) * 20) / 100;
    let cg_7 = (Number(input["7th"]) * 20) / 100;
    let cg_8 = (Number(input["8th"]) * 10) / 100;
    let total = (
      cg_1 +
      cg_2 +
      cg_3 +
      cg_4 +
      cg_5 +
      cg_6 +
      cg_7 +
      cg_8
    ).toPrecision(3);
    setResult(total);
  };
  const inputClear = () => {
    setInput({
      "1st": "",
      "2nd": "",
      "3rd": "",
      "4th": "",
      "5th": "",
      "6th": "",
      "7th": "",
      "8th": "",
    });
  };
  return (
    <div className="bg-white w-4/5 md:w-3/5 p-5 rounded-md">
      <h2 className="text-2xl text-center text-slate-950 font-semibold">
        CGPA Calculator
      </h2>
      <form className="flex flex-col mt-5 md:flex-row md:gap-2">
        <div className="w-full">
          <Input
            placeholder="1st"
            handleChange={handleChange}
            name="1st"
            value={input["1st"]}
          />
          <Input
            placeholder="2nd"
            handleChange={handleChange}
            name="2nd"
            value={input["2nd"]}
          />
          <Input
            placeholder="3rd"
            handleChange={handleChange}
            name="3rd"
            value={input["3rd"]}
          />
          <Input
            placeholder="4th"
            handleChange={handleChange}
            name="4th"
            value={input["4th"]}
          />
        </div>
        <div className="w-full">
          <Input
            placeholder="5th"
            handleChange={handleChange}
            name="5th"
            value={input["5th"]}
          />
          <Input
            placeholder="6th"
            handleChange={handleChange}
            name="6th"
            value={input["6th"]}
          />
          <Input
            placeholder="7th"
            handleChange={handleChange}
            name="7th"
            value={input["7th"]}
          />
          <Input
            placeholder="8th"
            handleChange={handleChange}
            name="8th"
            value={input["8th"]}
          />
        </div>
      </form>
      <div className="flex justify-between my-3">
        <CalculateBtn calculateResult={calculateResult} />
        <ClearBtn inputClear={inputClear} />
      </div>
      <Result result={result} />
    </div>
  );
};

export default Calcutaor;
