var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  new_array = [element, ...array]
  return new_array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [element, ...array]
  return array
}

function addElementToEndOfArray(array, element) {
  new_array = [...array, element] 
  return new_array
}

function 