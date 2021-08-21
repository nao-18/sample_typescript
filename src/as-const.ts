export {};

/**
 * constアサーション
 * 変更できない値にする
 */
let name = 'taro' as const;

//constアサーションで値の書き換えが制限される
// name = 'hanako';
// Type '"hanako"' is not assignable to type '"taro"'.

let proflle = {
  name: 'Tanaka',
  height: 190,
} as const;

//オブジェクトにconstアサーションをつけるとreadonlyになる

// proflle.name = 'Sasaki';
// Cannot assign to 'name' because it is a read-only property.

// proflle.height = 166;
// Cannot assign to 'height' because it is a read-only property.
