interface AlgorithmInfo {
  name: string;
  description: string;
  timeComplexity: {
    best: string;
    average: string;
    worst: string;
  };
  spaceComplexity: string;
  stable: boolean;
}

const ALGORITHM_INFO: Record<string, AlgorithmInfo> = {
  bubble: {
    name: "Bubble Sort",
    description: "Bubble Sort vergleicht benachbarte Elemente und tauscht sie, wenn sie in der falschen Reihenfolge sind. Der Algorithmus durchläuft das Array mehrmals, bis keine Vertauschungen mehr nötig sind.",
    timeComplexity: {
      best: "O(n)", // Wenn das Array bereits sortiert ist
      average: "O(n²)",
      worst: "O(n²)",
    },
    spaceComplexity: "O(1)",
    stable: true,
  },
  quick: {
    name: "Quick Sort",
    description: "Quick Sort wählt ein Pivot-Element und teilt das Array in zwei Teilbereiche: Elemente kleiner und größer als das Pivot. Diese Teilbereiche werden dann rekursiv sortiert.",
    timeComplexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n²)", // Bei bereits sortiertem Array und ungünstiger Pivot-Wahl
    },
    spaceComplexity: "O(log n)",
    stable: false,
  },
  bogo: {
    name: "Bogo Sort",
    description: "Bogo Sort (auch bekannt als Stupid Sort) mischt das Array zufällig und prüft, ob es sortiert ist. Dies wird wiederholt, bis das Array zufällig in der richtigen Reihenfolge ist.",
    timeComplexity: {
      best: "O(n)",
      average: "O(n × n!)",
      worst: "∞",
    },
    spaceComplexity: "O(1)",
    stable: false,
  },
  merge: {
    name: "Merge Sort",
    description: "Merge Sort ist ein effizienter, stabiler Sortieralgorithmus, der nach dem Teile-und-Herrsche-Prinzip arbeitet. Er teilt das Array rekursiv in kleinere Teilarrays, sortiert diese und führt sie dann wieder zusammen.",
    timeComplexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)",
    },
    spaceComplexity: "O(n)",
    stable: true,
  },
  insertion: {
    name: "Insertion Sort",
    description: "Insertion Sort baut die sortierte Liste schrittweise auf, indem jedes Element an der richtigen Position in den bereits sortierten Teil des Arrays eingefügt wird. Ähnlich wie beim Sortieren von Spielkarten in der Hand.",
    timeComplexity: {
      best: "O(n)", // Wenn das Array bereits sortiert ist
      average: "O(n²)",
      worst: "O(n²)", // Wenn das Array in umgekehrter Reihenfolge sortiert ist
    },
    spaceComplexity: "O(1)",
    stable: true,
  },
};

interface AlgorithmExplanationProps {
  algorithm: string;
}

export function AlgorithmExplanation({ algorithm }: AlgorithmExplanationProps) {
  const info = ALGORITHM_INFO[algorithm];

  if (!info) return null;

  return (
    <div className="mt-8 p-6 border rounded-lg bg-card">
      <h3 className="text-xl font-semibold mb-4">{info.name}</h3>
      <p className="text-muted-foreground mb-4">{info.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium mb-2">Zeitkomplexität</h4>
          <ul className="space-y-1 text-sm">
            <li className="text-green-600">Bester Fall: {info.timeComplexity.best}</li>
            <li className="text-yellow-600">Durchschnitt: {info.timeComplexity.average}</li>
            <li className="text-red-600">Schlechtester Fall: {info.timeComplexity.worst}</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Weitere Eigenschaften</h4>
          <ul className="space-y-1 text-sm">
            <li>Speicherkomplexität: {info.spaceComplexity}</li>
            <li>Stabil: {info.stable ? "Ja" : "Nein"}</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 