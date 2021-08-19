export {};

//objectだと弱い型付け
let profile1: object = { name: 'Taro' };
profile1 = { birthYear: 1978 };

console.log({ profile1 });

//強い型付け
let profile2: {
  name: string;
} = { name: 'Taro' };
profile2 = { name: 'Yamada' };

console.log({ profile2 });
