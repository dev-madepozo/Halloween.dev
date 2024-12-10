# Challenge #1: 🧙‍♀️ Create the perfect potion

## `Difficulty`

![easy](/assets/easy.png)

## Instructions

During Halloween night 🎃, **a witch 🧙‍♀️ is preparing a magical brew**. She has a list of potions, each with an associated power, and she wants to combine two of them to achieve a specific total power.

Given a list of integers where **each number represents the power of a potion** 🧪 and an integer representing the target power, you must find the index of the first two potions that add up to exactly the target power.

For example:

```js
const potions = [4, 5, 6, 2]
const goal = 8

createMagicPotion(potions, goal) // [2, 3]
```

If no combination is found, return undefined

```js
const potions = [1, 2, 3, 4]
const goal = 9

createMagicPotion(potions, goal) // undefined
```

In the case that there is more than one possible combination, select the combination whose second potion appears first in the list.

```js
const potions = [1, 2, 3, 4]
const goal = 5

createMagicPotion(potions, goal) // [1, 2]
// it could also be [0, 3] but there is a combination earlier
```
