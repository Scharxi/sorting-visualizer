"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { bubbleSort, quickSort, bogoSort } from "@/lib/sorting-algorithms";

export function useArrayOperations(size: number) {
  const [array, setArray] = useState<number[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [currentIndices, setCurrentIndices] = useState<number[]>([]);
  const [completedIndices, setCompletedIndices] = useState<number[]>([]);
  const [speed, setSpeed] = useState(50);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    setArray(generateRandomArray(size));
  }, [size]);

  const resetArray = useCallback(() => {
    setArray(generateRandomArray(size));
    setCurrentIndices([]);
    setCompletedIndices([]);
  }, [size]);

  const stopSorting = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
      setIsRunning(false);
      setCurrentIndices([]);
      setCompletedIndices([]);
    }
  }, []);

  const celebrateCompletion = useCallback(async () => {
    // Nacheinander alle Indizes als "completed" markieren
    for (let i = 0; i < array.length; i++) {
      setCompletedIndices(prev => [...prev, i]);
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    // Nach kurzer Verzögerung zurücksetzen
    setTimeout(() => {
      setCompletedIndices([]);
    }, 1000);
  }, [array.length]);

  const startSorting = useCallback(
    async (algorithm: string) => {
      abortControllerRef.current = new AbortController();
      const signal = abortControllerRef.current.signal;
      setCompletedIndices([]);

      setIsRunning(true);
      const operations = {
        bubble: bubbleSort,
        quick: quickSort,
        bogo: bogoSort
      }[algorithm];
      
      try {
        await operations(array, {
          onStep: (newArray, indices) => {
            if (signal.aborted) {
              return Promise.reject(new Error('Sorting aborted'));
            }
            setArray([...newArray]);
            setCurrentIndices(indices);
            return new Promise((resolve) => setTimeout(resolve, 50));
          },
        });
        await celebrateCompletion();
      } catch (error) {
        if (error.message !== 'Sorting aborted') {
          console.error('Sorting error:', error);
        }
      } finally {
        setIsRunning(false);
        setCurrentIndices([]);
        abortControllerRef.current = null;
      }
    },
    [array, celebrateCompletion]
  );

  return {
    array,
    isRunning,
    currentIndices,
    completedIndices,
    resetArray,
    startSorting,
    stopSorting,
    speed,
    setSpeed,
  };
}

function generateRandomArray(size: number): number[] {
  return Array.from({ length: size }, () => 
    Math.floor(Math.random() * 100) + 1
  );
} 