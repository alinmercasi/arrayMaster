// ** !! SECTION
// 1) Turn an array of numbers into a long string of all those numbers.

// using reduce
const arrayToString = array =>
  array.reduce((acc, current) => (acc += current), '')

// arrayToString([1,2,3,4]) -> "1234"

// ** !! SECTION
// 2) Turn an array of voter objects into a count of how many people voted
// const voters = [
//   { name: 'Bob', age: 30, voted: true },
//   { name: 'Jake', age: 32, voted: true },
//   { name: 'Kate', age: 25, voted: false },
//   { name: 'Sam', age: 20, voted: false },
//   { name: 'Phil', age: 21, voted: true },
//   { name: 'Ed', age: 55, voted: true },
//   { name: 'Tami', age: 54, voted: true },
//   { name: 'Mary', age: 31, voted: false },
//   { name: 'Becky', age: 43, voted: false },
//   { name: 'Joey', age: 41, voted: true },
//   { name: 'Jeff', age: 30, voted: true },
//   { name: 'Zack', age: 19, voted: false },
// ]

// do with while
// const totalVotes = voters => {
//   let voted = [],
//     i = 0
//   while (i < voters.length) {
//     // if (voters[i].voted) voted.push(voters[i])
//     voters[i].voted && (voted = [...voted, voters[i]])
//     i++
//   }
//   return voted.length
// }

// do with reduce
const totalVotes = voters =>
  voters.reduce((count, { voted }) => (count += voted), 0)

// do with map
// const totalVotes = voters =>
//   voters.map(voter => voter.voted).reduce((count, voted) => (count += voted))

//** !! SECTION
// 3) Given an array of all your wishlist items, figure out how much it
// would cost to just buy everything at once

// const wishlist = [
//   { title: 'Tesla Model S', price: 90000 },
//   { title: '4 carat diamond ring', price: 45000 },
//   { title: 'Fancy hacky Sack', price: 5 },
//   { title: 'Gold fidgit spinner', price: 2000 },
//   { title: 'A second Tesla Model S', price: 90000 },
// ]

const shoppingSpree = wishList =>
  wishList.reduce((totalPrice, { price }) => (totalPrice += price), 0)

//** !! SECTION
// 4) Given an array of arrays, flatten them into a single array

const arrays = [['1', '2', '3'], [true], [4, 5, 6]]

// using reduce
// const flatten = array =>
//   array.reduce((arr, current) => [...arr, ...current], [])

// using concat
// const flatten = array => [].concat.apply([], array)

// concat and spread
// const flatten = array => [].concat(...array)

//  concat and reduce
// const flatten = array => array.reduce((arr, current) => arr.concat(current), [])

// multi level flatten using reduce and a 'lil bit of recursion

// const flatten = array => {
//   return array.reduce((arr, current) => {
//     if (Array.isArray(current)) {
//       return [...arr, flatten(current)]
//     }
//     return [...arr, ...current]
//   }, [])
// }

const flatten = array =>
  array.reduce(
    (arr, current) =>
      Array.isArray(current)
        ? [...arr, ...flatten(current)]
        : [...arr, current],
    [],
  )

// ** SECTION
//  https://coursework.vschool.io/array-reduce-exercises/
// 5) 6) Given an array of potential voters,
// return an object representing the results of the vote
// return value
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/
// let voters = [
//   { name: 'Bob', age: 30, voted: true },
//   { name: 'Jake', age: 32, voted: true },
//   { name: 'Kate', age: 25, voted: false },
//   { name: 'Sam', age: 20, voted: false },
//   { name: 'Phil', age: 21, voted: true },
//   { name: 'Ed', age: 55, voted: true },
//   { name: 'Tami', age: 54, voted: true },
//   { name: 'Mary', age: 31, voted: false },
//   { name: 'Becky', age: 43, voted: false },
//   { name: 'Joey', age: 41, voted: true },
//   { name: 'Jeff', age: 30, voted: true },
//   { name: 'Zack', age: 19, voted: false },
// ]

// const voterResults = array => {
//   const hasKey = (obj, key) => !!obj[key]
//   return array.reduce((obj, current) => {
//     const {
//       youngPeoples,
//       youngVotes,
//       midPeoples,
//       midVotes,
//       oltPeoples,
//       oldVotes,
//     } = obj
//   for (let key in obj) {
//     if (!hasKey(obj, key)) {
//       obj[key] = 0
//     } else {
//       object[key]++
//     }
//   }
//   }, {})
// }

// ** SECTION
//  6) Sum of every positive element
// If the given input is an array of numbers,
// return the sum of all the positives ones
// If the array is empty or there aren't any positive numbers, return 0.
// const input = [1, -4, 12, 0, -3, 29, -150]
const sumPositive = array =>
  array
    .filter(item => item >= 0)
    .reduce((total, current) => (total += current), 0)

//  ** SECTION
// 7) calculate mean and median of an array
// https://crocoder.dev/blog/map-filter-reduce-exercises/
// https://www.khanacademy.org/math/statistics-probability/summarizing-quantitative-data/mean-median-basics/a/mean-median-and-mode-review
// const input = [12, 46, 32, 64]
// const meanAndMedian = array => {
//   const sortedArray = array.sort((a, b) => a - b)

//   const medianEvenIndexes = array.length

//   const mean = array.reduce(
//     (total, current) => (total += current / array.length),
//     0,
//   )
//   const median = 0
//   return { mean, median }
// }

// ** SECTION
// 8) Get Name initials
// The given input is a string of multiple words with a single space between each of them.
// Abbreviate the name and return the name initials.
// const input = 'George Raymond Richard Martin'
const initials = string =>
  string
    .split(' ')
    .map(word => word[0])
    .join('')

// ** SECTION
// 9) Age difference from the youngest and oldest
// Find the difference in age between the oldest and youngest family members,
// and return their respective ages and the age difference.
// const input = [
//   {
//     name: 'John',
//     age: 13,
//   },
//   {
//     name: 'Mark',
//     age: 56,
//   },
//   {
//     name: 'Rachel',
//     age: 45,
//   },
//   {
//     name: 'Nate',
//     age: 67,
//   },
//   {
//     name: 'Jeniffer',
//     age: 65,
//   },
// ]
const findDiff = array => {
  const ages = array.map(({ age }) => age)
  const min = Math.min(...ages)
  const max = Math.max(...ages)
  const diff = max - min
  return { max, min, diff }
}

// ** SECTION
// 10) Numeronyms
// Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. Words that have less than 4 letters aren't abbreviated, because that would just be odd. The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence. g2d l2k e6e

const input =
  'Every developer likes to mix kubernetes and javascript that only to test four letters'
// const numeronym = string => {
//   const coded = string
//     .split(' ')
//     .map(item => {
//       if (item.length <= 4) return `${item}`
//       return `${item[0]}${item.length - 2}${item[item.length - 1]}`
//     })
//     .join(' ')
//   return coded
// }

// using implicit arrow function return and ECMAScript 2022 Array.prototype.at() method instead of [] notation
const numeronym = string =>
  string
    .split(' ')
    .map(item =>
      item.length <= 4
        ? `${item}`
        : `${item.at(0)}${item.at(-2)}${item.at(-1)}`,
    )
    .join(' ')
