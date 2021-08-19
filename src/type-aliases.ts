export {};

//typeで型のエイリアスが作成できる
type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  name: 'Taro',
  age: 22,
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'Taro',
  age: 45,
};

console.log({ example2 });

//リバースエンジニアリング的な使用方法
//変更を追従してくれるためバグが起こりにくい
type Profile2 = typeof example1;
