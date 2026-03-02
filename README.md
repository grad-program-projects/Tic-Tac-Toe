# Tic-Tac-Toe 

A classic Tic-Tac-Toe game built with **React**, **TypeScript**, and **Vite**. Features a full move history with time-travel — jump back to any previous board state during the game.

---

## Features

- Two-player local gameplay (X vs O)
- Automatic winner detection
- Tie game detection
- Move history list with jump-to-move functionality
- Immutable state management — no direct array mutation

---

## Project Structure

```
src/
├── components/
│   ├── Board.tsx           # Renders the 3×3 grid and handles click logic
│   └── Square.tsx          # Individual square button component
├── pages/
│   └── Game.tsx            # Top-level game state: history, current move, turn tracking
├── utils/
│   └── calculateWinner.ts  # Pure function that checks all 8 winning combinations
├── App.tsx
├── main.tsx
└── styles.css
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/grad-program-projects/Tic-Tac-Toe.git
cd Tic-Tac-Toe
npm install
```

### Running the App

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## How It Works

### State Management

All game state lives in `Game.tsx`:

- `history` — a 2D array where each entry is a full board snapshot (e.g. `[[null×9], ["X", null×8], ...]`)
- `currentMove` — the index of the currently viewed move

The current player is derived from the move number: even = X, odd = O.

### Immutability

On each move, `Board.tsx` copies the squares array via `.slice()` before updating it. This preserves the full history and enables time-travel without mutating past states.

### Winner Detection

`calculateWinner` in `utils/calculateWinner.ts` checks all 8 possible winning lines:

```
0 | 1 | 2
---------
3 | 4 | 5
---------
6 | 7 | 8
```

Returns `"X"`, `"O"`, or `null`.

---

## Key Concepts Demonstrated

| Concept | Where Used |
|---|---|
| React `useState` hook | `Game.tsx` |
| Props & TypeScript types | `Board.tsx`, `Square.tsx` |
| Default vs named exports | `Square` (default), `calculateWinner` (named) |
| Object destructuring | All components |
| Array immutability | `Board.tsx` — `.slice()` before mutation |
| Derived state | `xIsNext`, `currentSquares` computed from `history` + `currentMove` |
| Union types | `(string \| null)[]` for board squares |

---
