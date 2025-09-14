// src/components/sorting/BubbleSort.tsx
import React, { useEffect, useState } from "react";

interface Step {
  array: number[];
  i: number;
  j: number;
  compareIdx: [number, number] | null;
  text: string;
}

export const BubbleSort: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);
  const [i, setI] = useState(0); // outer loop index
  const [j, setJ] = useState(0); // inner loop index
  const [compareIdx, setCompareIdx] = useState<[number, number] | null>(null);
  const [stepText, setStepText] = useState<string>("");
  const [history, setHistory] = useState<Step[]>([]); // store past steps

  // Generate a random array
  const generateArray = () => {
    const newArr = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 90) + 10
    );
    setArray(newArr);
    setStepText("Generated new array. Click 'Next Step' to begin sorting.");
    setI(0);
    setJ(0);
    setCompareIdx(null);
    setHistory([]); // clear history
  };

  // Save current state into history
  const saveStep = (arr: number[], iVal: number, jVal: number, text: string, cmp: [number, number] | null) => {
    setHistory((prev) => [
      ...prev,
      { array: [...arr], i: iVal, j: jVal, text, compareIdx: cmp },
    ]);
  };

  // Perform one step of bubble sort
  const nextStep = () => {
    let arr = [...array];

    if (i >= arr.length) {
      setStepText("Array is fully sorted!");
      setCompareIdx(null);
      return;
    }

    if (j < arr.length - i - 1) {
      setCompareIdx([j, j + 1]);
      let text = `Comparing ${arr[j]} and ${arr[j + 1]}`;

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        text = `Swapped ${arr[j + 1]} and ${arr[j]} → [${arr.join(", ")}]`;
      } else {
        text = `No swap needed between ${arr[j]} and ${arr[j + 1]}`;
      }

      saveStep(arr, i, j, text, [j, j + 1]);

      setArray([...arr]);
      setStepText(text);
      setJ(j + 1);
    } else {
      // inner loop finished, move outer loop
      saveStep(arr, i, j, `Completed pass ${i + 1}`, null);

      setI(i + 1);
      setJ(0);
    }
  };

  // Go back to previous step
  const prevStep = () => {
    if (history.length === 0) return;

    const lastStep = history[history.length - 1];
    setArray(lastStep.array);
    setI(lastStep.i);
    setJ(lastStep.j);
    setStepText(lastStep.text);
    setCompareIdx(lastStep.compareIdx);

    setHistory((prev) => prev.slice(0, -1)); // remove last step
  };

  // Generate array on first load
  useEffect(() => {
    generateArray();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold text-sky-700 mb-4">
        Bubble Sort (Step-by-Step)
      </h1>

      {/* Controls */}
      <div className="flex gap-4 mb-6 flex-wrap justify-center">
        <button
          onClick={generateArray}
          className="px-4 py-2 bg-sky-600 text-white rounded-lg shadow hover:bg-sky-700"
        >
          Generate Array
        </button>
        <button
          onClick={prevStep}
          disabled={history.length === 0}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 disabled:opacity-50"
        >
          Previous Step
        </button>
        <button
          onClick={nextStep}
          className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
        >
          Next Step
        </button>
      </div>

      {/* Array visualization */}
      <div className="flex items-end gap-3 h-72 w-full max-w-4xl border p-4 bg-white rounded-lg shadow">
        {array.map((value, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-end flex-1 relative"
          >
            {/* Number */}
            <span className="text-xs font-medium text-gray-700 mb-1">
              {value}
            </span>
            {/* Bar */}
            <div
              style={{ height: `${value * 2}px` }}
              className={`w-full rounded-t-md ${
                compareIdx && compareIdx.includes(idx)
                  ? "bg-red-500"
                  : "bg-sky-500"
              }`}
            />
            {/* Arrow under compared elements */}
            {compareIdx && compareIdx.includes(idx) && (
              <span className="absolute -bottom-6 text-red-600 text-lg">↓</span>
            )}
          </div>
        ))}
      </div>

      {/* Step description */}
      <div className="mt-6 text-center">
        <p className="text-gray-800 font-medium">{stepText}</p>
      </div>
    </div>
  );
};
