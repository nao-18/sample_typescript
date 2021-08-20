export {};

/**
 * enum型
 */

//数値列のenum型
enum Months {
  January = 1, //初期値を設定できる
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January);
console.log(Months.February);

//文字列のenum型
enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BULE = '#0000FF',
  BLACK = '#000000',
}

console.log(COLORS.RED);
console.log(COLORS.BLACK);

//enum追加方法
enum COLORS {
  YELLOW = '#FFFF00',
  GRAY = '#808080',
}

COLORS.YELLOW;
