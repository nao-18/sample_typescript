export {};

/**
 * PartialとRequired
 */

type Profile = {
  name: string;
  age?: number;
  nationality: string;
};

//partial 全ての型を非必須にする
type PartialProfile = Partial<Profile>;

//required 全ての型を必須にする
type RequiredProfile = Required<Profile>;
