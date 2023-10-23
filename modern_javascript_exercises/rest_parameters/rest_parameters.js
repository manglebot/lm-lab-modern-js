// Instructions can be found in rest_parameters.md

// Add rest parameters here!
export function add(...numbers) {
  // Add a loop here
  return numbers.reduce((total, num) => total + num, 0);
}


console.log(add(1, 2, 3, 4, 5));
