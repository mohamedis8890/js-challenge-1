function solution(a, b, x, y) {
  for (let i = 0; i < 100; i++) {
    let aD = Math.abs(x - a[i]);
    let bD = Math.abs(y - b[i]);

    if (aD <= 20 && bD <= 20) return i;
  }
  return -1;
}

console.log(solution([100, 200, 100], [50, 100, 100], 100, 100));
