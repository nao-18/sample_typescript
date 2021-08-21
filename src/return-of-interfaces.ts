export {};

class Mahoutsukai {}
class Souryo {}

// typescriptは複数クラスを継承できない
// class Taro extends Mahoutsukai, Souryo {}

/**
 * インターフェース
 * インターフェースで多重継承のようなことができる
 */
interface Kenja {
  //シグネチャーによる定義
  mutekiBougyo(): void;
}
interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenja, Senshi {
  mutekiBougyo(): void {
    console.log('mutekiBougyo');
  }

  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.mutekiBougyo();
jiro.kougeki();
