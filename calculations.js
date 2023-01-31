function increaseBalance(x, y) {
  x += y;
  return x;
}

function decreaseBalance(x, y) {
  x -= y;
  return x;
}

function divideBalanceByAccounts(x, y) {
  x /= y;
  return x;
}

function getRestAfterDivision(x, y) {
  x %= y;
  return x;
}

function decreaseBalancePlus(x, y) {
  x -= y;
  ++x;
  return x;
}

function increaseBalancePlus(x, y) {
  x += y;
  --x;
  return x;
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2));
console.log(getRestAfterDivision(7000, 3));
console.log(decreaseBalancePlus(3000, 700));
console.log(increaseBalancePlus(3000, 700));
