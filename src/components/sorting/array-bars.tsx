"use client";

import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ArrayBarsProps {
  array: number[];
  currentIndices: number[];
  completedIndices: number[];
  barColor: string;
  className?: string;
}

export function ArrayBars({
  array,
  currentIndices,
  completedIndices,
  barColor,
  className,
}: ArrayBarsProps) {
  const maxValue = Math.max(...array);

  return (
    <div
      className={cn(
        "flex items-end gap-1 w-full transition-all duration-150",
        className
      )}
    >
      <TooltipProvider>
        {array.map((value, idx) => (
          <Tooltip key={idx} delayDuration={0}>
            <TooltipTrigger asChild>
              <div
                className={cn(
                  "flex-1 transition-all duration-150 cursor-pointer",
                  completedIndices.includes(idx)
                    ? "bg-green-500"
                    : currentIndices.includes(idx)
                    ? "bg-primary"
                    : ""
                )}
                style={{
                  height: `${(value / maxValue) * 100}%`,
                  transform: completedIndices.includes(idx) 
                    ? 'scale(1.05)' 
                    : 'scale(1)',
                  backgroundColor: completedIndices.includes(idx)
                    ? undefined
                    : currentIndices.includes(idx)
                    ? undefined
                    : barColor
                }}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Wert: {value}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
} 