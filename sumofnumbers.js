
function sumFor(list) {
  let sum = 0;
  for (const num of list) {
    sum += num;
  }
  return sum;
}
function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}
function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1));
}
function sumTheSimpleWay(list) {
  return _.reduce(list, function (num, memo) { return memo + num; }, 0);
}

const testList = [1, 2, 3, 4, 5];
console.log(sumFor(testList));
console.log(sumWhile(testList));
console.log(sumRecursion(testList));
console.log(sumTheSimpleWay(testList));
