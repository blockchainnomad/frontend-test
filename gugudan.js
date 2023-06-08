let result1 = "";

for (let i = 1; i <= 9; i++) {
  if (i === 4) {
    continue;
  }
  for (let j = 2; j <= 5; j++) {
    result1 += j + "*" + i + "=" + j * i + "\t";
  }
  result1 += "\n";
}

let result2 = "";
for (let k = 1; k <= 9; k++) {
  if (k === 4) {
    continue;
  }
  for (let l = 6; l <= 9; l++) {
    result2 += l + "*" + k + "=" + l * k + "\t";
  }
  result2 += "\n";
}
console.log(result1 + "\n" + result2);
