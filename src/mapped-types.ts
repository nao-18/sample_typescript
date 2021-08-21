export {};

/**
 * Mapped types
 */

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;

//key ofでProfileのnameとageが取得できる
type PropertyTypes = keyof Profile;

// in keyofを活用して独自のPartialのようなものを作成できる→mapped types
type Optional<T> = { [P in keyof T]?: T[P] | null };
type OptionalProfile = Optional<Profile>;
