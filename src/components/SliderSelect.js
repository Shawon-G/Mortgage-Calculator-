import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = () => {
  const bank_limit = 10000;

  return (
    <div>
      <SliderComponent
        step={100}
        defaultValue={3000}
        min={1000}
        max={bank_limit}
        lebel="Home Value"
        unit="$"
        amount={3500}
        onChange={(e) => console.log(e.target.value)}
      />

      <SliderComponent
        step={100}
        defaultValue={3000}
        min={1000}
        max={10000}
        lebel="Down Payment"
        unit="$"
        amount={3500}
        onChange={(e) => console.log(e.target.value)}
      />

      <SliderComponent
        step={100}
        defaultValue={3000}
        min={1000}
        max={10000}
        lebel="Loan Amount"
        unit="$"
        amount={3500}
        onChange={(e) => console.log(e.target.value)}
      />

      <SliderComponent
        step={0.5}
        defaultValue={2}
        min={2}
        max={18}
        lebel="Interest Rate"
        unit="%"
        amount={2}
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
};

export default SliderSelect;
