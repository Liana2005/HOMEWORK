function Matrix(matrix) {
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrix.length; j++) {

      
      if (matrix[i][j] === 'M') {
        result[i][j] = 'M';
        continue;
      }
      let count = 0;

      for (let x = i - 1; x <= i + 1; x++) {
        for (let y = j - 1; y <= j + 1; y++) {
          if (x < 0|| x >=matrix.length|| y < 0 || y >= matrix.length) continue;

          if (x === i && y === j) continue;
          if (matrix[x][y] === 'M') count++;
        }
      }

      result[i][j] = count;
    }
  }

  return result;
}


const matrix = [
  [0, 'M', 0],
  ['M', 0, 0],
  [0, 0, 'M']
];

console.log(Matrix(matrix));
