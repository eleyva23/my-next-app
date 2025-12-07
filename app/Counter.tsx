'use client';

import { useState } from 'react';

type CounterProps = {
  initialCount?: number;
  initialStep?: number;
  minCount?: number; 
};

export default function Counter({
  initialCount = 0,
  initialStep = 1,
  minCount = 0,
}: CounterProps) {
  const [count, setCount] = useState<number>(initialCount);
  const [step, setStep] = useState<number>(initialStep);

  const inc = () => setCount((c) => c + step);
  const dec = () => setCount((c) => Math.max(minCount, c - step));
  const reset = () => {
    setCount(initialCount);
    setStep(initialStep);
  };

  const canDecrement = count - step >= minCount;
  const canReset = count !== initialCount || step !== initialStep;

  return (
    <section
      aria-labelledby="counter-heading"
      className="flex flex-col items-center gap-4 p-4 rounded-xl shadow bg-white"
    >
      <h2 id="counter-heading" className="text-xl font-semibold">
        Count: <span aria-hidden="true">{count}</span>
      </h2>

      {/* SR-only live region for screen readers */}
      <p className="sr-only" aria-live="polite">
        Current count is {count}. Step is {step}.
      </p>

      <div className="flex items-center gap-2">
        <label htmlFor="step" className="text-sm">
          Step
        </label>
        <input
          id="step"
          name="step"
          type="number"
          inputMode="numeric"
          min={1}
          value={step}
          onChange={(e) => {
            const val = Number(e.target.value);
            // ensure integer >= 1
            setStep(Number.isFinite(val) && val >= 1 ? Math.floor(val) : 1);
          }}
          className="w-20 rounded border px-2 py-1"
          aria-describedby="step-help"
        />
      </div>
      <p id="step-help" className="text-xs text-gray-600">
        Choose how much to increment or decrement.
      </p>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={inc}
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring"
        >
          Increment
        </button>

        <button
          type="button"
          onClick={dec}
          disabled={!canDecrement}
          className={`px-4 py-2 rounded text-white focus:outline-none focus:ring ${
            canDecrement
              ? 'bg-red-600 hover:bg-red-700'
              : 'bg-red-300 cursor-not-allowed'
          }`}
          aria-disabled={!canDecrement}
        >
          Decrement
        </button>

        <button
          type="button"
          onClick={reset}
          disabled={!canReset}
          className={`px-4 py-2 rounded text-white focus:outline-none focus:ring ${
            canReset
              ? 'bg-gray-600 hover:bg-gray-700'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
          aria-disabled={!canReset}
        >
          Reset
        </button>
      </div>
    </section>
  );
}
