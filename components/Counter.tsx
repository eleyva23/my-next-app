'use client';
import { useState } from 'react';

type CounterProps = {
  initialCount?: number;
  initialStep?: number;
  floor?: number;
};

export default function Counter({
  initialCount = 0,
  initialStep = 1,
  floor = 0,
}: CounterProps) {
  // Count 
  const [count, setCount] = useState(Math.max(floor, initialCount));
  const [step, setStep] = useState(Math.max(1, initialStep));

  const inc = () => setCount(c => c + step);

  const dec = () => {
 
    if (count - step >= floor) setCount(c => c - step);
  };

  const reset = () => setCount(Math.max(floor, initialCount));

  return (
    <section aria-labelledby="counter-heading" className="max-w-sm rounded-2xl border p-4 shadow-sm space-y-4">
      <h2 id="counter-heading" className="text-xl font-semibold">Button Counter</h2>

      <p className="text-2xl font-bold" aria-live="polite" role="status">
        Count: {count}
      </p>

      <div className="flex items-center gap-3">
        <button
          onClick={dec}
          disabled={count - step < floor}
          className={`rounded-lg px-3 py-2 border ${count - step < floor ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
        >
          −1
        </button>

        <button onClick={inc} className="rounded-lg px-3 py-2 border hover:bg-gray-50">+1</button>

        <button onClick={reset} className="rounded-lg px-3 py-2 border hover:bg-gray-50">Reset</button>
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="step" className="text-sm font-medium">Step:</label>
        <input
          id="step"
          type="number"
          min={1}
          value={step}
          onChange={(e) => {
            const n = Number(e.target.value);
            setStep(Number.isFinite(n) && n >= 1 ? Math.floor(n) : 1);
          }}
          className="w-24 rounded-md border px-2 py-1"
        />
      </div>
    </section>
  );
}
