export {};

/**
 * 前回のtypeを使用した場合
 */
type ObjectType = {
  name: string;
  age: number;
};

let object: ObjectType = {
  name: 'Taro',
  age: 45,
};

console.log({ object });

/**
 * インターフェース
 */
interface ObjectInterface {
  name: string;
  age: number;
}

let object2: ObjectInterface = {
  name: 'Ichiro',
  age: 50,
};

console.log({ object2 });
