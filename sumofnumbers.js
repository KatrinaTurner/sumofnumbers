
function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}
function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while(i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}
function sumRecursion(list) {
  if (list.length == 1) {
    return list[0]
  } else {
    return list[0] + sumRecursion(list.subarray(1, list.length - 1));
  }
}
function sumTheSimpleWay(list) {
  return _.reduce(list, function (num,memo) {return memo + sum},0);
}