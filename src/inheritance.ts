export {};

/**
 * 継承
 */

class Animal {
  constructor(public name: string) {}

  run(): string {
    return 'I can run';
  }
}

class Lion extends Animal {
  public speed: number;

  constructor(name: string, speed: number) {
    //super()で親クラスのコンストラクタを使用する
    super(name);

    //サブクラスで使用するインスタンス引数は手動で初期化する
    this.speed = speed;
  }

  run(): string {
    //super.メソッド名で親クラスのメソッドを呼び出せる
    const parentMessage = super.run();
    return `${parentMessage} ${this.speed}km/h.`;
  }
}

let animal = new Animal('dog');
console.log(animal.name);
console.log(animal.run());

let lion = new Lion('lion', 80);
console.log(lion.name);
console.log(lion.run());
