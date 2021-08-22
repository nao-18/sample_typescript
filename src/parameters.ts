export {};

/**
 * Parameters
 * @param name
 * @param age
 */
const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('Taro', 23);

type Profile = Parameters<typeof debugProfile>;
// type Profile = [name: string, age: number]

const Profile: Profile = ['Hanako', 89];

//Profileのみだと第一引数nameのみになるため、...Profileを使う
debugProfile(...Profile);

//Parameters定義
type Parameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
