# Challenge #4: 🔪 Find the killer

## `Difficulty`

![easy](/assets/normal.png)

## Instructions

A person has been **murdered on Halloween night** 🔪. Using a spell 🧙‍♀️, we managed to hear their last **whisper** but it is very weak and doesn't allow us to identify who might have been the killer.

The information it provides us:

**whisper**: string representing what the victim tried to say before dying

**suspects**: list of strings representing the **names of all the suspects**.

We have to keep in mind that the whisper whisper has some rules:

- Each `~` represents an uncertain letter in the whisper.
- Each position in the whisper corresponds to a position in the killer's name.
- The length of the whisper doesn't always represent the full length of the name, as the victim might have died before finishing saying it.
- But if the last character of the whisper is a $, then the killer's name ended there.

Your goal is to find out who could be the killer! You must return:

- If only one name matches the whisper pattern, return that name.
- If there are multiple names that match, return all names separated by commas.
- If no name matches, return an empty string ("").
Letter case doesn't matter.

Letter case doesn't matter.

```js
const whisper = 'd~~~~~a';
const suspects = ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers'];

findTheKiller(whisper, suspects); // -> 'Dracula'

const whisper2 = '~r~dd~';
const suspects2 = ['Freddy', 'Freddier', 'Fredderic']

findTheKiller(whisper2, suspects2); // -> 'Freddy,Freddier,Fredderic'

const whisper3 = '~r~dd$';
const suspects3 = ['Freddy', 'Freddier', 'Fredderic']

findTheKiller(whisper3, suspects3); // -> ''

const whisper4 = 'mi~~def';
const suspects4 = ['Midudev', 'Midu', 'Madeval']

findTheKiller(whisper4, suspects4); // -> ''
```