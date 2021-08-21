export {};

/**
 * null許容はunion型を使用する
 * | null
 */
let profile: { name: string; age: number | null } = {
  name: 'Taro',
  age: null,
};
