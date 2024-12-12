# Challenge #3: 🛌 Escape from Freddy's nightmare

## `Difficulty`

![easy](/assets/normal.png)

## Instructions

You are trapped in a nightmare where **Freddy Krueger** is chasing you 😭. The dream is represented by a maze of cells, where each cell has a numeric value indicating the danger level of that part of the dream.

**You must find the safest path** (i.e., the one with the lowest total danger value) from the top-left corner to the bottom-right corner of the matrix.

In this challenge, **you can only move right or down** (you cannot move back or diagonally), and you must calculate the total danger level of the safest path.

The nightmare is represented by an n x m matrix called dream where each cell is a positive number representing the danger level of that cell in the dream.

And you have to return the total danger value of the safest path from the top-left corner (position `[0][0]`) to the bottom-right corner (position `[n-1][m-1]`).

**Example:**

```js
const dream = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]

const bestPath = findSafestPath(dream) // Returns 7
// The safest path is:
// [0, 0] -> 1
// [0, 1] -> 3
// [0, 2] -> 1
// [1, 2] -> 1
// [2, 2] -> 1

// 1 -> 3 -> 1 -> 1 -> 1 = 7
```