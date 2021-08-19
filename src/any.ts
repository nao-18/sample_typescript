import axios from 'axios'

export {}

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url)
  .then(function (response) {
    //apiから帰ってくるデータは不明なためanyを使う。
    //が、responseの型を調べてデータ型を定義する方がベスト。
    // let data: any = response.data;
    interface Article {
      id: number;
      title: string;
      description: string;
    }
    let data: Article[];
    data = response.data;
    // handle success
    console.log(data);
  });