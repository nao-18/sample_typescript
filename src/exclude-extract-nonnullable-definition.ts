export {};

/**
 * Exclude
 * 実装を紐解く
 */
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;

//Exclude定義(Distributive conditional types)
// type Exclude<T, U> = T extends U ? never : T;
type MyExclude =
  //extendsは型互換性があるか判定するもの
  | (string extends string | number ? never : string) //never
  | (number extends string | number ? never : number) //never
  | (DebugType extends string | number ? never : DebugType); //DebugType
//結果的にDebugTypeが返される

type MyFunctionType = MyExclude;

/**
 * Extract
 */
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

/**
 * NonNullable
 */
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
