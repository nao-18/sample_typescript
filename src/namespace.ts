export {};

/**
 * 名前空間の使用方法
 */
namespace Japanese {
  //名前空間内はnamespace、class共にexportを先頭に記述する
  //namespaceはネストして記述できる
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }

  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

let me = new Japanese.Tokyo.Person('Taro');
console.log(me.name);

let meOsaka = new Japanese.Osaka.Person('たろやん');
console.log(meOsaka.name);

let michael = new English.Person('michael', 'Joseph', 'Jackson');
console.log(michael);
