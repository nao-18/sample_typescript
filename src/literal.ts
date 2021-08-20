export {};

/**
 * literal型
 * 文字/数値/真偽値リテラルを細かく指定できる型
 */
let dayOfTheWeek: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日';
dayOfTheWeek = '月';
// dayOfTheWeek = '1234';

let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 12;
// month = 13;

let TRUE: true = true;
// TRUE = false;
