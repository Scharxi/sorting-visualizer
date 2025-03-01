"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SortingControlsProps {
  selectedAlgorithm: string;
  onAlgorithmChange: (value: string) => void;
  onSort: () => void;
  onStop: () => void;
  onReset: () => void;
  isRunning: boolean;
}

export function SortingControls({
  selectedAlgorithm,
  onAlgorithmChange,
  onSort,
  onStop,
  onReset,
  isRunning,
}: SortingControlsProps) {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Select
        value={selectedAlgorithm}
        onValueChange={onAlgorithmChange}
        disabled={isRunning}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Wähle Algorithmus" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="bubble">Bubble Sort</SelectItem>
          <SelectItem value="quick">Quick Sort</SelectItem>
          <SelectItem value="bogo">Bogo Sort</SelectItem>
        </SelectContent>
      </Select>

      {isRunning ? (
        <Button 
          onClick={onStop}
          variant="destructive"
        >
          Abbrechen
        </Button>
      ) : (
        <Button onClick={onSort}>
          Sortieren
        </Button>
      )}

      <Button 
        onClick={onReset} 
        disabled={isRunning}
        variant="outline"
      >
        Neu generieren
      </Button>
    </div>
  );
} 