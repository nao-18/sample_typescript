export {}

let numbers: number[] = [1, 2, 3];
console.log({numbers});
//非推奨なアノテーション
// let numbers2: Array<number> = [1, 2, 3];
// console.log({numbers2});

let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];
console.log({strings});

//二次元配列
let nijigenHairetsu: number[][] = [
  [50, 100],
  [10, 200]
];

let nijigenHairetsu2: (number | number[])[] = [
  1,
  [10, 100]
];

//2つ以上の型の配列
let hairetsu: (number | boolean | string)[] = [1, false, 'Japan'];
console.log({hairetsu});


