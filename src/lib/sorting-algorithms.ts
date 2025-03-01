// Interface für die Visualisierungsoptionen
// onStep wird bei jedem Vergleich/Tausch aufgerufen, um den aktuellen Zustand zu visualisieren
interface SortingOptions {
  onStep: (array: number[], indices: number[]) => Promise<void>;
}

function isSorted(arr: number[]): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}

function shuffle(arr: number[]): void {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

export async function bubbleSort(
  arr: number[],
  options: SortingOptions
): Promise<number[]> {
  // Erstelle eine Kopie des Arrays, um das Original nicht zu verändern
  const array = [...arr];
  const n = array.length;

  // Äußere Schleife: Durchläuft das Array n-1 mal
  // Mit jedem Durchlauf wird das größte verbleibende Element ans Ende "gebubbled"
  for (let i = 0; i < n - 1; i++) {
    // Innere Schleife: Vergleicht benachbarte Elemente
    // Der Bereich wird mit jedem Durchlauf kleiner, da die größten Elemente bereits am Ende sind
    for (let j = 0; j < n - i - 1; j++) {
      // Visualisiere den aktuellen Vergleich
      await options.onStep(array, [j, j + 1]);
      
      // Wenn das linke Element größer ist als das rechte, tausche sie
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        // Visualisiere den Tausch
        await options.onStep(array, [j, j + 1]);
      }
    }
  }

  return array;
}

export async function quickSort(
  arr: number[],
  options: SortingOptions
): Promise<number[]> {
  // Erstelle eine Kopie des Arrays, um das Original nicht zu verändern
  const array = [...arr];

  // Rekursive Hilfsfunktion für den QuickSort-Algorithmus
  async function quickSortHelper(low: number, high: number): Promise<void> {
    if (low < high) {
      // Teile das Array und erhalte den Pivot-Index
      const pivotIndex = await partition(low, high);
      // Sortiere rekursiv die linke Hälfte (vor dem Pivot)
      await quickSortHelper(low, pivotIndex - 1);
      // Sortiere rekursiv die rechte Hälfte (nach dem Pivot)
      await quickSortHelper(pivotIndex + 1, high);
    }
  }

  // Partitionierung: Teilt das Array in zwei Hälften und ordnet die Elemente um das Pivot-Element
  async function partition(low: number, high: number): Promise<number> {
    // Wähle das letzte Element als Pivot
    const pivot = array[high];
    // i ist der Index des kleineren Elements
    let i = low - 1;

    // Visualisiere das ausgewählte Pivot-Element
    await options.onStep(array, [high]);

    // Durchlaufe alle Elemente von low bis high-1
    for (let j = low; j < high; j++) {
      // Visualisiere den aktuellen Vergleich mit dem Pivot
      await options.onStep(array, [j, high]);

      // Wenn das aktuelle Element kleiner oder gleich dem Pivot ist
      if (array[j] <= pivot) {
        i++; // Erhöhe den Index des kleineren Elements
        // Tausche Elemente nur wenn nötig
        if (i !== j) {
          [array[i], array[j]] = [array[j], array[i]];
          // Visualisiere den Tausch
          await options.onStep(array, [i, j]);
        }
      }
    }

    // Platziere das Pivot-Element an seine finale Position
    if (i + 1 !== high) {
      [array[i + 1], array[high]] = [array[high], array[i + 1]];
      // Visualisiere den finalen Pivot-Tausch
      await options.onStep(array, [i + 1, high]);
    }

    // Gib die finale Position des Pivot-Elements zurück
    return i + 1;
  }

  await quickSortHelper(0, array.length - 1);
  return array;
}

export async function bogoSort(
  arr: number[],
  options: SortingOptions
): Promise<number[]> {
  const array = [...arr];
  let iterations = 0;
  const maxIterations = 1000; // Sicherheitsabbruch

  while (!isSorted(array) && iterations < maxIterations) {
    shuffle(array);
    await options.onStep(array, Array.from({ length: array.length }, (_, i) => i));
    iterations++;
  }

  if (iterations >= maxIterations) {
    console.warn('Bogo Sort: Maximale Iterationen erreicht');
  }

  return array;
}

export async function mergeSort(
  arr: number[],
  options: SortingOptions
): Promise<number[]> {
  const array = [...arr];

  async function merge(left: number, middle: number, right: number): Promise<void> {
    const leftArray = array.slice(left, middle + 1);
    const rightArray = array.slice(middle + 1, right + 1);
    
    let i = 0; // Index für leftArray
    let j = 0; // Index für rightArray
    let k = left; // Index für das Hauptarray

    while (i < leftArray.length && j < rightArray.length) {
      // Visualisiere den Vergleich
      await options.onStep(array, [left + i, middle + 1 + j]);

      if (leftArray[i] <= rightArray[j]) {
        array[k] = leftArray[i];
        i++;
      } else {
        array[k] = rightArray[j];
        j++;
      }
      
      // Visualisiere das Einfügen
      await options.onStep(array, [k]);
      k++;
    }

    // Füge verbleibende Elemente aus leftArray ein
    while (i < leftArray.length) {
      array[k] = leftArray[i];
      await options.onStep(array, [k]);
      i++;
      k++;
    }

    // Füge verbleibende Elemente aus rightArray ein
    while (j < rightArray.length) {
      array[k] = rightArray[j];
      await options.onStep(array, [k]);
      j++;
      k++;
    }
  }

  async function mergeSortHelper(left: number, right: number): Promise<void> {
    if (left < right) {
      const middle = Math.floor((left + right) / 2);
      
      // Sortiere linke Hälfte
      await mergeSortHelper(left, middle);
      // Sortiere rechte Hälfte
      await mergeSortHelper(middle + 1, right);
      // Führe die sortierten Hälften zusammen
      await merge(left, middle, right);
    }
  }

  await mergeSortHelper(0, array.length - 1);
  return array;
}

export async function insertionSort(
  arr: number[],
  options: SortingOptions
): Promise<number[]> {
  const array = [...arr];
  const n = array.length;

  for (let i = 1; i < n; i++) {
    const current = array[i];
    let j = i - 1;

    // Visualisiere das aktuelle Element
    await options.onStep(array, [i]);

    while (j >= 0 && array[j] > current) {
      // Visualisiere den Vergleich
      await options.onStep(array, [j, j + 1]);
      
      // Verschiebe Elemente nach rechts
      array[j + 1] = array[j];
      await options.onStep(array, [j, j + 1]);
      j--;
    }

    // Füge das aktuelle Element an die richtige Position ein
    array[j + 1] = current;
    await options.onStep(array, [j + 1]);
  }

  return array;
} 