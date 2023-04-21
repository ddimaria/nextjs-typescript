"use client";

import { useStore } from "@/lib/store";

const useCounter = () => {
  return useStore((store) => ({
    count: store.count,
    increment: store.increment,
    decrement: store.decrement,
    reset: store.reset,
  }));
};

export default function Counter() {
  const { count, increment, decrement, reset } = useCounter();
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Count: <span>{count}</span>
      </h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
