export {};

/**
 * Exclude
 * 型を取り除く
 */
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
//関数を取り除いた型
type FunctionType = Exclude<SomeTypes, string | number>;
//関数以外を取り除いた型
type NonFunctionType = Exclude<SomeTypes, DebugType>;
//全ての関数も取り除きたい場合は"Function"を使う
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

/**
 * Extract
 * 指定した型のみ抽出する
 */
// 関数のみ取得した型を作成
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
// 関数以外を取得した型を作成
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
// 全ての関数を取得した型を作成
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

/**
 * NonNullable
 * nullとundefinedを取り除く
 */
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
