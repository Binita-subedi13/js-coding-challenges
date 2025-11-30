function Destructure(arr) {
  const [first, , third = 0] = arr;
  return { first, third };
}
console.log(Destructure([1,2,3]))
console.log(Destructure([1,2]))
