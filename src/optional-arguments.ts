export {};

/**
 * オプショナルな型
 * 型名?で関数の実行に引数になくてもエラーで落ちなくなる。
 * @param height
 * @param weight
 * @returns
 */
let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi = weight / (height * height);
  if (printable) {
    console.log({ bmi });
  }
  //指定しなかった場合はprintableは"undefined"が入る。
  console.log({ printable });

  return bmi;
};

bmi(1.9, 70);
