export {};

/**
 * unknown
 */
const kansu = (): number => 35;

//anyはどんな型でも許す
let numberAny: any = kansu();
//unknownは受け取った変数が使用される型でエラーを発生させバグの早期発見に役立つ
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
// let sumUnknown = numberUnknown + 10;

//型が明確にできれば使用できる
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
  console.log({ sumUnknown });
}
