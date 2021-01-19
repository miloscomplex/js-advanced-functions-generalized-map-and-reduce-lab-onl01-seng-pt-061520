// Add your functions here
function map(array, funcBlock) {
  let resultsArray = []
  array.forEach(element => {
    resultsArray.push(funcBlock(element))
  })
  return resultsArray
}

function reduce(array, funcBlock, memo = 0 ) {
  array.forEach(element => {
    if (isNaN(element)) {
      memo = true
    }
    memo = funcBlock(element, memo)
    console.log("memo= " + memo);
  })
  return memo
}
