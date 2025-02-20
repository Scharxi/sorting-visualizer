"use client";

import { useState } from "react";
import { ArrayBars } from "./array-bars";
import { SortingControls } from "./sorting-controls";
import { AlgorithmExplanation } from "./algorithm-explanation";
import { ColorPicker } from "./color-picker";
import { useArrayOperations } from "@/hooks/use-array-operations";

export function ClientSortingVisualizer() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>("bubble");
  const [barColor, setBarColor] = useState("#6366f1"); // Standard: Indigo
  const {
    array,
    isRunning,
    currentIndices,
    completedIndices,
    resetArray,
    startSorting,
    stopSorting,
  } = useArrayOperations(30);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Algorithmen Visualisierung</h2>
        <ColorPicker
          color={barColor}
          onChange={setBarColor}
        />
      </div>

      <SortingControls
        selectedAlgorithm={selectedAlgorithm}
        onAlgorithmChange={setSelectedAlgorithm}
        onSort={() => startSorting(selectedAlgorithm)}
        onStop={stopSorting}
        onReset={resetArray}
        isRunning={isRunning}
      />

      <div className="mt-4">
        {array.length > 0 ? (
          <ArrayBars
            array={array}
            currentIndices={currentIndices}
            completedIndices={completedIndices}
            barColor={barColor}
            className="h-[400px]"
          />
        ) : (
          <div className="h-[400px] flex items-center justify-center">
            Laden...
          </div>
        )}
      </div>

      <AlgorithmExplanation algorithm={selectedAlgorithm} />
    </div>
  );
} 