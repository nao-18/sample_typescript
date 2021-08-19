export {}

//例外に対するデータ型はnever
function err(message: string): never {
  throw new Error(message);
}

try {
  let result = err('test')
  console.log({ result });
} catch (error) {
  console.log({error});
}

//返り値がnever型のものだけ受け取れる
let foo: void = undefined;
let bar: never = err('error')
// let bar2: never = null: