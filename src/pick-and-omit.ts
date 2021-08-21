export {};

/**
 * PickとOmit
 */

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

//必要なプロパティのみ取得して型を作成する場合は"Pick"
type SampleProfile = Pick<DetailedProfile, 'name' | 'weight'>;
// type SampleProfile = {
//   name: string;
//   weight: number;
// }

//不要なプロパティを削除して型を作成する場合は"Omit"
type SmallProfile = Omit<DetailedProfile, 'height'>;
// type SmallProfile = {
//   name: string;
//   weight: number;
// }

// Omitの実装を追う
type MyOmit = Pick<DetailedProfile, 'height'>;
type MySmallProfile = MyOmit;
