import React from "react";

interface CounterProps {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
}

function Counter({
  count,
  onIncrease,
  onDecrease,
  onIncreaseBy,
}: CounterProps) {
  return (
    <div className="flex flex-wrap bg-slate-700 pb-[40px]">
      <h1 className="w-full flex justify-center p-[40px] font-bold text-[40px]">
        {count}
      </h1>
      <div className=" flex w-full justify-center gap-[20px]">
        <button
          className="border-[1px] border-solid border-white p-[20px]"
          onClick={onIncrease}
        >
          +1
        </button>
        <button
          className="border-[1px] border-solid border-white p-[20px]"
          onClick={onDecrease}
        >
          -1
        </button>
        <button
          className="border-[1px] border-solid border-white p-[20px]"
          onClick={() => onIncreaseBy(5)}
        >
          +5
        </button>
      </div>
    </div>
  );
}

export default Counter;
