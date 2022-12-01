const fs = require('fs');

fs.readFile("./input.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return
  }

  const elfSacks = data.split("\n\n")

  const mappedElfSacks = elfSacks.map(elfSack => elfSack.split("\n"))

  const elfSacksAsNumbers = []
  mappedElfSacks.forEach(elfSack => {
    elfSacksAsNumbers.push(elfSack.map(calCount => Number(calCount)))
  })

  const reducedSacks = []
  numberedSacks.forEach(elfSack => {
    reducedSacks.push(elfSack.reduce((acc, curr) => acc + curr, 0))
  })

  console.log(Math.max(...reducedSacks))
})