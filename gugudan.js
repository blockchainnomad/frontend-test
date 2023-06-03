for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    if ((i * j) % 4 == 0) {
      continue;
    }
    console.log(i + "*" + j + "=" + i * j);
  }
}
