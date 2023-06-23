export interface GridObj {
  id: number;
  selected: boolean;
  pattern: number;
}

export const obj: GridObj[] = [
  { id: 1, selected: false, pattern: 0 },
  { id: 2, selected: false, pattern: 0 },
  { id: 3, selected: false, pattern: 0 },
  { id: 4, selected: false, pattern: 0 },
  { id: 5, selected: false, pattern: 0 },
  { id: 6, selected: false, pattern: 0 },
  { id: 7, selected: false, pattern: 0 },
  { id: 8, selected: false, pattern: 0 },
  { id: 9, selected: false, pattern: 0 }
]

export const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];
