export {};

/**
 * インデックスシグネチャー
 *
 * 書き方
 * { [ index: typeOfIndex ]: typeOfValue }
 */
//インデックスシグネチャーを用いることで未知の値の型にも対応できる

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'Taro', underTwenty: false };

profile.name = 'tanaka';
profile.age = 23;
