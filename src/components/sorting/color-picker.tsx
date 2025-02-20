"use client";

import { Paintbrush } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
  className?: string;
}

const PRESET_COLORS = [
  "#000000",
  "#ef4444",
  "#f97316",
  "#84cc16",
  "#06b6d4",
  "#6366f1",
  "#a855f7",
  "#ec4899",
];

export function ColorPicker({ color, onChange, className }: ColorPickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          size="icon"
          className={cn("w-8 h-8 p-1", className)}
        >
          <Paintbrush className="h-4 w-4" />
          <span className="sr-only">Balkenfarbe wählen</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="space-y-3">
          <h4 className="font-medium leading-none">Balkenfarbe</h4>
          <div className="flex flex-col gap-2">
            <div>
              <input
                type="color"
                value={color}
                onChange={(e) => onChange(e.target.value)}
                className="w-full h-8 cursor-pointer"
              />
            </div>
            <div className="flex flex-wrap gap-1">
              {PRESET_COLORS.map((presetColor) => (
                <button
                  key={presetColor}
                  className={cn(
                    "w-6 h-6 rounded-md border",
                    color === presetColor && "ring-2 ring-primary"
                  )}
                  style={{ backgroundColor: presetColor }}
                  onClick={() => onChange(presetColor)}
                />
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
} 