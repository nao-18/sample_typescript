export {};

/**
 * readonly修飾子
 */
class VisaCard {
  // readonly owner: string;

  // constructor(owner: string) {
  //   this.owner = owner;
  // }

  //省略記法
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('Taro');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'Hanako';
