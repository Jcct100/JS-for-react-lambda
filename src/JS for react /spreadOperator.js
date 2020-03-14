const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
const combinedUsingES6 = [...first, ...second];

console.log("combinedUsingES6", combinedUsingES6);
