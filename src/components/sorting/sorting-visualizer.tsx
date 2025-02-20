"use client";

import { useState } from "react";
import { ArrayBars } from "./array-bars";
import { SortingControls } from "./sorting-controls";
import { useArrayOperations } from "@/hooks/use-array-operations";

interface SortingVisualizerProps {
  initialSize?: number;
}

export function SortingVisualizer({ initialSize = 30 }: SortingVisualizerProps) {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>("bubble");
  const {
    array,
    isRunning,
    currentIndices,
    resetArray,
    startSorting,
  } = useArrayOperations(initialSize);

  return (
    <div className="flex flex-col gap-4 p-4">
      <SortingControls
              selectedAlgorithm={selectedAlgorithm}
              onAlgorithmChange={setSelectedAlgorithm}
              onSort={() => startSorting(selectedAlgorithm)}
              onReset={resetArray}
              isRunning={isRunning} onStop={function (): void {
                  throw new Error("Function not implemented.");
              } }      />

      <ArrayBars
              array={array}
              currentIndices={currentIndices}
              className="h-[400px]" completedIndices={[]} barColor={""}      />
    </div>
  );
} 