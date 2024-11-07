function urutan(height: number) {
  for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += j + " ";
    }
    console.log(line.trim());
  }
}
const height: number = 5;
urutan(height);
