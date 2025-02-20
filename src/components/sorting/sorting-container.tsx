import { ClientSortingVisualizer } from "./client-sorting-visualizer";

export function SortingContainer() {
  return (
    <div className="flex flex-col gap-4 p-4 border rounded-lg">
      <ClientSortingVisualizer />
    </div>
  );
} 